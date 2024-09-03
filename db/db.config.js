require("dotenv").config();

const config = {
    development: {
        username: "postgres",
        password: "root",
        host: "localhost",
        database: "airtribe",
        dialect: "postgres",
        logging: false,
        port: 5432,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: true,
            underscored: false,
            schema: 'public'
        }
    }
}

module.exports = config;