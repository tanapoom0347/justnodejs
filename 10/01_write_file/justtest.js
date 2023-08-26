// บันทึกข้อมูล Request ได้แก่ วันที่, method, url, ลงใน Log file
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const { method, url } = request;

    // เขียน Content = ลงไฟล์
    const logContent = `${new Date()} : ${method} : ${url}\n`;
    fs.writeFileSync('request.log', logContent, { flag: 'a+' });
    
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.end('<h1>ล้อกหลบแบบดิจิทัลลลลลล</h1>');
});

server.listen(8888, () => {
    console.log('Server is started the war');
});