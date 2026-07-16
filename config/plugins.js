module.exports = ({ env }) => ({
  i18n: {
    enabled: true,
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "local",
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true, // Es buena práctica asegurarse de que el plugin esté habilitado
    config: {
      // Strapi aplica un límite de 10 por defecto si "defaultLimit" no se define.
      // Se pone en -1 para no limitar la cantidad de elementos devueltos.
      defaultLimit: -1,
      maxLimit: -1,
      apolloServer: {
        introspection: true, // ¡Esta es la línea clave!
      },
    },
  },
  "color-picker": {
    enabled: true,
  },
});
