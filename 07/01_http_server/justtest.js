// สร้างเว็บฝั่ง Server เพื่อตอบสนองต่อ URL เหล่านี้
// 1. Homepage -> "/"
// 2. About page -> "/about"
const http = require('http');

const  server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end('<h1>น่ารัก</h1>');
});

server.listen(8888, () => {
    console.log('Server is start the war');
});