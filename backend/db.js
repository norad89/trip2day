const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "trip2day",
    host: "localhost",
    port: 3002,
    database: "trip2day"
});

module.exports = pool;