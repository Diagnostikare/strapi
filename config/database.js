module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
      ssl: env.bool('DATABASE_SSL', false) ? {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false)
      } : false,
    },
    debug: env.bool('DATABASE_DEBUG', false),
    pool: { 
      min: 0, 
      max: 7,
      // Configuración para manejar mejor las conexiones
      acquireTimeoutMillis: 60000,
      idleTimeoutMillis: 30000,
      createTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
    },
    acquireConnectionTimeout: 60000,
    // Manejo de errores de conexión
    useNullAsDefault: true,
  },
  settings: {
    // Configuración de migraciones de Strapi
    forceMigration: env.bool('FORCE_MIGRATION', true),
    runMigrations: env.bool('RUN_MIGRATIONS', true),
  },
});
