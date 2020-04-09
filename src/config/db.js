const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password:"farina121190",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})