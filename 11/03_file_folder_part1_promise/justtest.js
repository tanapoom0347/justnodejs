// บันทึกข้อมูล Request ได้แก่ วันที่, url ลงใน log file ในโฟลเดอร์ logs
// 3 วิธี => 1 Sync , 2 Async (callback) , 3 Promise async await
const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const server = http.createServer(async (request, response) => {
    const { method, url } = request;

    console.log(`Start ${url}`);

    try {
        await fs.stat('logs');
    }
    catch (error) {
        try {
            await fs.mkdir('logs');
        }
        catch (error2) {}
    }

    const logContent = `${new Date()} : ${method} : ${url}\n`;
    await fs.writeFile(path.join('logs', 'request.log'), logContent, { flag: 'a+' });

    console.log(`End ${url}`);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.end('<h1>ล้อกหลบแบบดิจิทัลลลลลล++</h1>');
});

server.listen(8888, () => {
    console.log('Server is started the war');
});