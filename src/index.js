'use strict';

const { autoMigrateSchema } = require('../database/migrations/auto-migrate');
const { runMigrations } = require('../database/migrations/run-migrations');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    console.log('\n🚀 Iniciando Strapi con auto-migración inteligente...\n');
    
    try {
      // PASO 1: AUTO-MIGRACIÓN (Detecta cambios automáticamente)
      console.log('═══════════════════════════════════════════════');
      console.log('  PASO 1: Detección automática de cambios');
      console.log('═══════════════════════════════════════════════\n');
      
      await autoMigrateSchema(strapi);
      
      // PASO 2: MIGRACIONES MANUALES (Si las creaste)
      console.log('═══════════════════════════════════════════════');
      console.log('  PASO 2: Migraciones manuales (opcional)');
      console.log('═══════════════════════════════════════════════\n');
      
      const migrationStats = await runMigrations(strapi);
      
      if (migrationStats.executed === 0 && migrationStats.skipped === 0) {
        console.log('⊘ No hay migraciones manuales\n');
      }
      
      console.log('═══════════════════════════════════════════════');
      console.log('✅ Sistema de migraciones listo');
      console.log('═══════════════════════════════════════════════\n');
      
    } catch (error) {
      console.error('\n⚠️  Error en el sistema de migraciones:', error.message);
      console.warn('⚠️  El servidor continuará funcionando...\n');
      // No lanzar el error para permitir que el servidor inicie
    }
    
    console.log('✓ Strapi iniciado correctamente\n');
  },
};
