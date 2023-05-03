const { Client } = require('pg');
const { db } = require('./config');

async function getConnection() {
    const client = new Client({
        user: 'postgres',
        password : 'admin123',
        host: 'localhost',
        port: '5432',
        database: 'taskdb'
    })
    await client.connect();
    return client;
}

module.exports = getConnection;




