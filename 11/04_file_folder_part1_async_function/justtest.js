// บันทึกข้อมูล Request ได้แก่ วันที่, method, url ลงใน log file ในโฟลเดอร์ logs (Promise in async function version)
const fs = require('fs').promises;
const http = require('http');
const path = require('path');

async function writeLog(request) {
  const { method, url } = request;
  
  console.log(`Start ${url}`);

  try {
    await fs.stat('logs');
  }
  catch (error) {
    try {
      await fs.mkdir('logs');
    }
    catch (error1) {}
  }
  const logContent = `${new Date()} : ${method} ${url}\n`;
  await fs.writeFile(path.join('logs', 'request.log'), logContent, { flag: 'a+' });
  
  console.log(`End ${url}`);
}

const server = http.createServer(async (request, response) => {
  writeLog(request);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  response.end('<h1>ล็อกหลบแบบดิจิทัลลลลลล++</h1>');
});

server.listen(8888, () => {
  console.log('Server is started the war');
});