// สร้างเว็บฝั่ง Server เพื่อตอบสนองต่อ URL เหล่านี้
// 1. Homepage -> "/"
// 2. About page -> "/about"
require('dotenv').config();
const http = require('http');
const mysql = require('mysql2/promise');

const { APP_PORT, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } = process.env;

const dbConnectionString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`;
const db = mysql.createConnection(dbConnectionString);

const  server = http.createServer((request, response) => {
    const { method, url } = request;

    // let content = '';
    if (method === 'GET' && url === '/') {
        db.query('select * from todo', (error, results) => {
            if (!!error) {
                console.log('Has error');
            }
            console.log(results);
            const resultsString = results.map(item => `<p>${item.title}</p>`).toString();
            response.setHeader('Content-Type', 'text/html; charset=UTF-8');
            response.statusCode = 200;
            // response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.end('<h1>Homepage น่ารัก</h1>' + resultsString);
        });
        // content = '<h1>Homepage น่ารัก</h1>';
    }
    else if (method === 'GET' && url === '/about') {
        // content = '<h1>About น่ารัก</h1>';
        response.setHeader('Content-Type', 'text/html; charset=UTF-8');
        response.statusCode = 200;
        // response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.end('<h1>About น่ารัก</h1>');
    }
});

server.listen(8888, () => {
    console.log('Server is start the war, on port ' + APP_PORT);
});