'use strict';

const { runMigrations } = require('../database/migrations/run-migrations');

module.exports = {
  /**
   * Se ejecuta ANTES de la inicialización de Strapi
   * En Strapi v5, aquí NO hay acceso a la BD aún
   */
  register(/* { strapi } */) {
    // Nota: register() se ejecuta antes de que Strapi conecte a la BD
    // por lo tanto, no podemos ejecutar migraciones aquí
  },

  /**
   * Se ejecuta DESPUÉS de que Strapi inicializó y sincronizó el schema
   * 
   * IMPORTANTE: En Strapi v5, el schema sync ocurre ANTES de bootstrap()
   * Por lo tanto, este sistema solo maneja:
   * 1. Migraciones de DATOS (transformaciones, cálculos, etc.)
   * 2. NO puede prevenir errores de schema NOT NULL
   * 
   * Para prevenir errores de NOT NULL al añadir campos:
   * - Define `default` en tu schema.json
   * - O usa migraciones manuales para añadir con ALTER TABLE
   */
  async bootstrap({ strapi }) {
    console.log('\n🚀 Strapi iniciado - Ejecutando migraciones...\n');
    
    try {
      const migrationStats = await runMigrations(strapi);
      
      if (migrationStats.total === 0) {
        console.log('⊘ No hay migraciones pendientes\n');
      } else {
        console.log(`✅ ${migrationStats.executed} migraciones ejecutadas\n`);
      }
      
    } catch (error) {
      console.error('\n⚠️  Error en migraciones:', error.message);
      console.warn('⚠️  El servidor continuará...\n');
    }
    
    console.log('✓ Strapi listo\n');
  },
};
