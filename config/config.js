module.exports = {
  development: {
      username: "pp_admin",
      password: "password",
      database: "portfolio_platform_dev",
      host: "localhost",
      dialect: "mysql"
    },
    test: {
      username: "pp_admin",
      password: "password",
      database: "portfolio_platform_test",
      host: "localhost",
      dialect: "mysql"
    },
    production: {
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      host: process.env.RDS_HOSTNAME,
      port: 	  process.env.RDS_PORT,
      dialect: "mysql"
    }
}