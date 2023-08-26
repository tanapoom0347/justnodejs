// สร้างเว็บฝั่ง Server เพื่อตอบสนองต่อ URL เหล่านี้
// 1. Homepage -> "/"
// 2. About page -> "/about"
require('dotenv').config();
const http = require('http');
const mysql = require('mysql2/promise');

const { APP_PORT, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } = process.env;

const dbConnectionString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`;

async function startApp() {
    const db = await mysql.createConnection(dbConnectionString);

    const  server = http.createServer(async (request, response) => {
        const { method, url } = request;

        if (method === 'GET' && url === '/') {
            const results = await db.query('select * from todo');
            const resultsString = results[0].map(item => `<p>${item.title}</p>`).toString();
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.statusCode = 200;
            response.end('<h1>Homepage น่ารัก</h1>' + resultsString);
        }
        else if (method === 'GET' && url === '/about') {
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.statusCode = 200;
            response.end('<h1>About น่ารัก</h1>');
        }
    });

    server.listen(8888, () => {
        console.log('Server is start the war, on port ' + APP_PORT);
    });
}

startApp();