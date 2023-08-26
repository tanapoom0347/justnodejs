// สร้างเว็บฝั่ง Server เพื่อตอบสนองต่อ URL เหล่านี้
// 1. Homepage -> "/"
// 2. About page -> "/about"
require('dotenv').config();
const http = require('http');

const { APP_PORT } = process.env;

const  server = http.createServer((request, response) => {
    const { method, url } = request;

    let content = '';
    if (method === 'GET' && url === '/') {
        content = '<h1>Homepage น่ารัก</h1>';
    }
    else if (method === 'GET' && url === '/about') {
        content = '<h1>About น่ารัก</h1>';
    }

    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.statusCode = 200;
    // response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(content);
});

server.listen(8888, () => {
    console.log('Server is start the war, on port ' + APP_PORT);
});