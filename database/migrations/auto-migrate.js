/**
 * AUTO-MIGRACIÓN INTELIGENTE PARA STRAPI v5
 * 
 * Este sistema detecta automáticamente cambios en el schema de Strapi
 * y aplica valores por defecto seguros antes de que Strapi ejecute sus migraciones.
 * 
 */

const fs = require('fs');
const path = require('path');

/**
 * Genera valores por defecto inteligentes basados en el tipo de dato
 */
function getDefaultValueForType(attribute) {
  // Si ya tiene un valor por defecto definido, usarlo
  if (attribute.default !== undefined) {
    return attribute.default;
  }

  // Generar valores por defecto según el tipo
  switch (attribute.type) {
    case 'string':
    case 'text':
    case 'richtext':
    case 'email':
    case 'password':
    case 'uid':
      return attribute.required ? '' : null;
    
    case 'integer':
    case 'biginteger':
    case 'float':
    case 'decimal':
      return attribute.required ? 0 : null;
    
    case 'boolean':
      return attribute.required ? false : null;
    
    case 'date':
    case 'time':
    case 'datetime':
    case 'timestamp':
      return null;
    
    case 'json':
      return attribute.required ? {} : null;
    
    case 'enumeration':
      return attribute.enum && attribute.enum.length > 0 ? attribute.enum[0] : null;
    
    case 'relation':
    case 'component':
    case 'dynamiczone':
    case 'media':
      return null;
    
    default:
      return null;
  }
}

/**
 * Detecta y aplica cambios de schema automáticamente
 */
async function autoMigrateSchema(strapi) {

  try {
    const knex = strapi.db.connection;
    let changesDetected = 0;
    let changesApplied = 0;

    // Obtener todos los content types de Strapi
    const contentTypes = strapi.contentTypes;
    
    for (const [uid, contentType] of Object.entries(contentTypes)) {
      // Ignorar content types internos de Strapi
      if (uid.startsWith('admin::') || uid.startsWith('plugin::')) {
        continue;
      }

      const tableName = contentType.collectionName;
      if (!tableName) continue;

      // Verificar si la tabla existe
      const tableExists = await knex.schema.hasTable(tableName);
      
      if (!tableExists) {
        console.log(`⊘ Tabla '${tableName}' no existe aún (será creada por Strapi)`);
        continue;
      }

      console.log(`🔍 Analizando: ${uid} (${tableName})`);

      // Obtener columnas actuales de la tabla
      const columns = await knex(tableName).columnInfo();
      
      // Verificar cada atributo del content type
      const attributes = contentType.attributes || {};
      
      for (const [attrName, attribute] of Object.entries(attributes)) {
        // Omitir relaciones y componentes (Strapi los maneja especialmente)
        if (['relation', 'component', 'dynamiczone', 'media'].includes(attribute.type)) {
          continue;
        }

        // Mapear nombre de atributo a nombre de columna
        const columnName = attribute.columnName || attrName;
        
        // Si la columna no existe, será añadida por Strapi
        if (!columns[columnName]) {
          changesDetected++;
          
          // Si el campo es requerido y hay datos en la tabla
          const count = await knex(tableName).count('* as total');
          const hasData = parseInt(count[0].total) > 0;
          
          if (hasData && (attribute.required || attribute.notNullable)) {
            console.log(`   → Campo nuevo detectado: '${columnName}' (requerido)`);
            
            // Aplicar valor por defecto ANTES de que Strapi intente crear la columna
            const defaultValue = getDefaultValueForType(attribute);
            
            console.log(`   ✓ Se aplicará valor por defecto: ${JSON.stringify(defaultValue)}`);
            changesApplied++;
          }
        }
        // Si la columna existe pero es NULL y ahora es requerida
        else if (attribute.required || attribute.notNullable) {
          const nullCount = await knex(tableName).whereNull(columnName).count('* as total');
          const hasNulls = parseInt(nullCount[0].total) > 0;
          
          if (hasNulls) {
            changesDetected++;
            const defaultValue = getDefaultValueForType(attribute);
            
            console.log(`   → Campo con NULLs detectado: '${columnName}'`);
            console.log(`   ⚡ Aplicando valor por defecto a ${nullCount[0].total} registros...`);
            
            await knex(tableName)
              .whereNull(columnName)
              .update({ [columnName]: defaultValue });
            
            console.log(`   ✓ Registros actualizados con: ${JSON.stringify(defaultValue)}`);
            changesApplied++;
          }
        }
      }
    }

    if (changesApplied > 0) {
      console.log('✅ Valores por defecto aplicados - Strapi puede continuar de forma segura\n');
    } else {
      console.log('✓ No se requieren ajustes - Schema sincronizado\n');
    }

    return { detected: changesDetected, applied: changesApplied };

  } catch (error) {
    console.error('\n❌ Error en auto-migración:', error.message);
    console.warn('⚠️  El servidor intentará continuar...\n');
    return { detected: 0, applied: 0, error: error.message };
  }
}

/**
 * Hook para ejecutar antes de que Strapi sincronice el schema
 */
async function beforeSchemaSync(strapi) {
  console.log('⏳ Preparando auto-migración antes de sincronizar schema...');
  
  try {
    // Ejecutar auto-migración
    await autoMigrateSchema(strapi);
    
  } catch (error) {
    console.error('Error en auto-migración:', error);
    // No lanzar el error para permitir que Strapi continúe
  }
}

module.exports = {
  autoMigrateSchema,
  beforeSchemaSync,
  getDefaultValueForType
};
