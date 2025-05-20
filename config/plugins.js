module.exports = ({ env }) => ({
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
  chartbrew: true,
  graphql: {
    enabled: true, // Es buena práctica asegurarse de que el plugin esté habilitado
    config: {
      // Aquí puedes tener otras configuraciones de GraphQL si las necesitas, como:
      // defaultLimit: 25,
      // maxLimit: 100,
      apolloServer: {
        introspection: true, // ¡Esta es la línea clave!
      },
    },
  },
});
