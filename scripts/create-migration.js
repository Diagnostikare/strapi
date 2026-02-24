#!/usr/bin/env node

/**
 * Script para generar una nueva migración
 * Uso: node scripts/create-migration.js nombre-de-la-migracion
 */

const fs = require('fs');
const path = require('path');

// Obtener el nombre de la migración del argumento
const migrationName = process.argv[2];

if (!migrationName) {
  console.error('❌ Error: Debes proporcionar un nombre para la migración');
  console.log('\nUso: npm run migration:create nombre-de-la-migracion');
  console.log('Ejemplo: npm run migration:create add-featured-flag\n');
  process.exit(1);
}

// Validar el nombre (solo letras, números y guiones)
if (!/^[a-z0-9-]+$/.test(migrationName)) {
  console.error('❌ Error: El nombre debe contener solo letras minúsculas, números y guiones');
  process.exit(1);
}

// Crear el nombre del archivo con la fecha actual
const date = new Date();
const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
const timestamp = date.getTime();
const fileName = `${dateStr}-${timestamp}-${migrationName}.js`;

// Plantilla de migración
const template = `/**
 * Migración: ${migrationName}
 * Creada: ${new Date().toLocaleString('es-ES')}
 * 
 * Descripción: [Describe qué hace esta migración]
 */

const migrationHelper = require('./utils/migration-helper');

module.exports = {
  /**
   * Ejecuta la migración
   */
  async up(knex) {
    console.log('🚀 Ejecutando migración: ${migrationName}');

    try {
      // ⬇️ IMPLEMENTA TU MIGRACIÓN AQUÍ ⬇️
      
      // EJEMPLO BÁSICO - Añadir un campo de texto:
      await migrationHelper.addColumnWithDefault(
        knex,
        'TU_TABLA',           // ← Reemplaza con tu tabla (ej: 'blogs')
        'TU_CAMPO',           // ← Reemplaza con el nombre del campo
        (table) => table.string('TU_CAMPO', 255).nullable(),
        ''                    // ← Valor por defecto
      );

      // MÁS EJEMPLOS EN: database/migrations/GUIA-REFERENCIA-RAPIDA.md
      
      console.log('✅ Migración ${migrationName} completada');
    } catch (error) {
      console.error('❌ Error en migración ${migrationName}:', error);
      throw error;
    }
  },

  /**
   * Revierte la migración (OPCIONAL pero recomendado)
   */
  async down(knex) {
    console.log('🔄 Revirtiendo migración: ${migrationName}');

    try {
      // Eliminar el campo que añadiste
      await migrationHelper.dropColumnSafe(knex, 'TU_TABLA', 'TU_CAMPO');

      console.log('✓ Migración ${migrationName} revertida');
    } catch (error) {
      console.error('❌ Error al revertir migración ${migrationName}:', error);
      throw error;
    }
  }
};
`;

// Crear el archivo de migración
const migrationsDir = path.join(__dirname, '..', 'database', 'migrations');
const filePath = path.join(migrationsDir, fileName);

try {
  fs.writeFileSync(filePath, template, 'utf8');
  console.log('\n✅ ¡Migración creada exitosamente!');
  console.log(`\n📄 Archivo: ${fileName}`);
  console.log(`📂 Ubicación: database/migrations/${fileName}`);
  console.log('\n⚡ Próximos pasos:');
  console.log('   1. Edita el archivo y reemplaza TU_TABLA y TU_CAMPO');
  console.log('   2. Prueba con: npm run dev');
  console.log('   3. Si funciona, haz commit y merge\n');
  console.log('📖 Documentación: database/migrations/README.md');
  console.log('💡 Tip: Para cambios simples, el sistema AUTO-MIGRACIÓN ya lo hace por ti\n');
} catch (error) {
  console.error('❌ Error al crear el archivo:', error.message);
  process.exit(1);
}
