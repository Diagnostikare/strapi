/**
 * Script de ejecución de migraciones
 * Se ejecuta automáticamente cuando hay cambios de schema
 */

const fs = require('fs');
const path = require('path');

/**
 * Ejecuta todas las migraciones pendientes
 */
async function runMigrations(strapi) {
  const migrationsDir = path.join(__dirname, '.');
  const migrationHelper = require('./utils/migration-helper');
  
  console.log('\n===========================================');
  console.log('🔄 Verificando migraciones pendientes...');
  console.log('===========================================\n');

  try {
    // Obtener conexión a la base de datos
    const knex = strapi.db.connection;

    // Crear tabla de control de migraciones si no existe
    const hasMigrationsTable = await knex.schema.hasTable('strapi_migrations_custom');
    
    if (!hasMigrationsTable) {
      await knex.schema.createTable('strapi_migrations_custom', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.timestamp('executed_at').defaultTo(knex.fn.now());
        table.boolean('success').defaultTo(true);
        table.text('error_message').nullable();
      });
      console.log('✓ Tabla de migraciones creada: strapi_migrations_custom\n');
    }

    // Obtener migraciones ya ejecutadas
    const executedMigrations = await knex('strapi_migrations_custom')
      .select('name')
      .where('success', true)
      .pluck('name');

    // Leer archivos de migración
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter(file => {
        return file.endsWith('.js') && 
               !file.includes('example-migration') &&
               file !== 'run-migrations.js' &&
               !file.startsWith('utils');
      })
      .sort(); // Ordenar por nombre (fecha)

    if (migrationFiles.length === 0) {
      console.log('⊘ No hay archivos de migración para ejecutar\n');
      return { total: 0, executed: 0, skipped: 0, failed: 0 };
    }

    let stats = { total: migrationFiles.length, executed: 0, skipped: 0, failed: 0 };

    // Ejecutar migraciones pendientes
    for (const file of migrationFiles) {
      const migrationName = file.replace('.js', '');
      
      if (executedMigrations.includes(migrationName)) {
        console.log(`⊘ Migración ya ejecutada: ${migrationName}`);
        stats.skipped++;
        continue;
      }

      console.log(`Ejecutando: ${migrationName}`);
      
      try {
        const migration = require(path.join(migrationsDir, file));
        
        if (typeof migration.up !== 'function') {
          console.warn(`⚠ Migración ${migrationName} no tiene función 'up', omitiendo...`);
          stats.skipped++;
          continue;
        }

        // Ejecutar migración dentro de una transacción
        await knex.transaction(async (trx) => {
          // Ejecutar la migración
          await migration.up(trx);
          
          // Registrar en la tabla de migraciones
          await trx('strapi_migrations_custom').insert({
            name: migrationName,
            success: true,
            error_message: null
          });
        });

        console.log(`✓ Migración completada: ${migrationName}`);
        stats.executed++;

      } catch (error) {
        console.error(`✗ Error en migración ${migrationName}:`, error.message);
        
        // Registrar error en la tabla (fuera de la transacción que falló)
        try {
          await knex('strapi_migrations_custom').insert({
            name: migrationName,
            success: false,
            error_message: error.message
          });
        } catch (insertError) {
          console.error('No se pudo registrar el error de migración:', insertError.message);
        }

        stats.failed++;
        
        // IMPORTANTE: No lanzar el error para que el servidor pueda continuar
        console.warn(`⚠ El servidor continuará a pesar del error en la migración`);
      }
    }

    // Resumen
    console.log('\n===========================================');
    console.log('📊 Resumen de migraciones:');
    console.log(`   Total: ${stats.total}`);
    console.log(`   ✓ Ejecutadas: ${stats.executed}`);
    console.log(`   ⊘ Omitidas: ${stats.skipped}`);
    console.log(`   ✗ Fallidas: ${stats.failed}`);
    console.log('===========================================\n');

    return stats;

  } catch (error) {
    console.error('\n✗ Error crítico al ejecutar migraciones:', error);
    console.warn('⚠ El servidor intentará continuar...\n');
    return { total: 0, executed: 0, skipped: 0, failed: 1 };
  }
}

module.exports = { runMigrations };
