const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "trip2day",
    host: "localhost",
    port: 3001,
    database: "trip2day"
});

module.exports = pool;