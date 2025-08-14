module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_PUBLIC_URL"), // External connection for local dev
    },
    debug: true,
    pool: { min: 0, max: 7 },
  },
});
