// 1. เอา Content จากไฟล์ home.txt มาลงในเว็บ
// 2.เอา Content จากไฟล์ home.md (Markdown) มาลงในเว็บ
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    const { method, url } = request;

    let content = '';
    if (method === 'GET' && url === '/') {
        // อ่าน Content จากไฟล์
        try {
            content = fs.readFileSync(path.resolve('files', 'home.txt'), 'utf-8');
        } catch (error) {
            console.error(error);
        }
    }
    
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.end(content);
});

server.listen(8888, () => {
    console.log('Server is started the war');
});