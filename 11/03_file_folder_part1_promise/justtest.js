// บันทึกข้อมูล Request ได้แก่ วันที่, url ลงใน log file ในโฟลเดอร์ logs
// 3 วิธี => 1 Sync , 2 Async (callback) , 3 Promise async await
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    const { method, url } = request;

    console.log(`Start ${url}`);

    // Sync
    // try {
    //     fs.statSync('logs');
    // } catch (error) {
    //     fs.mkdirSync('logs');
    // }

    // const logContent = `${new Date()} : ${method} : ${url}\n`;
    // fs.writeFileSync(path.join('logs', 'request.log'), logContent, { flag: 'a+' });

    // Async
    const logContent = `${new Date()} : ${method} : ${url}\n`;
    fs.stat('logs', (error, stats) => {
        if (!!error) {
            fs.mkdir('logs', (error1) => {
                fs.writeFile(path.join('logs', 'request.log'), logContent, { flag: 'a+' }, (error2) => {
                    console.log(`End ${url}`);
                });
            });
            return;
        }
        fs.writeFile(path.join('logs', 'request.log'), logContent, { flag: 'a+' }, (error2) => {
            console.log(`End ${url}`);
        });
    });
    


    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.end('<h1>ล้อกหลบแบบดิจิทัลลลลลล++</h1>');
});

server.listen(8888, () => {
    console.log('Server is started the war');
});