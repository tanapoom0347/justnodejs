// ค้นหาไฟล์โค้ดในโฟลเดอร์ exercises ที่มีเนื้อหาซ้ำกันเป๊ะๆ แล้วเปลี่ยนชื่อทั้งหมดให้รู้ว่าเป็นไฟล์ซ้ำ
const fs = require('fs');
const path = require('path');

let fileNames = fs.readdirSync('exercises');
for (let i = 0; i < fileNames.length; i++) {
  // อ่านไฟล์ต้นแบบ
  const duplicatedFileNames = [];
  const currentFilePath = path.join('exercises', fileNames[i]);
  const currentFileContent = fs.readFileSync(currentFilePath, 'utf-8');

  // ค้นหาไฟล์ที่โค้ดซ้ำกันแบบเป๊ะๆ
  for (let j = i + 1; j < fileNames.length; j++) {
    const nextFilePath = path.join('exercises', fileNames[j]);
    const nextFileContent = fs.readFileSync(nextFilePath, 'utf-8');

    if (currentFileContent === nextFileContent) {
      duplicatedFileNames.push(fileNames[j]);
    }
  }

  // เปลี่ยนชื่อไฟล์ต้นแบบ
  if (duplicatedFileNames.length > 0) {
    const newCurrentFilePath = path.join('exercises', `dup_${fileNames[i]}`);
    fs.renameSync(currentFilePath, newCurrentFilePath);
  }

  // เปลี่ยนชื่อไฟล์ซ้ำ และลบออกจากรายชื่อไฟล์ (fileNames)
  // จะได้ไม่ต้องวนลูปตรวจสอบพวกนี้ต่อ เพราะมันซ้ำไปแล้ว
  duplicatedFileNames.forEach(dupFileName => {
    const nextFilePath = path.join('exercises', dupFileName);
    const newNextFilePath = path.join('exercises', `dup_${dupFileName}`);
    fs.renameSync(nextFilePath, newNextFilePath);
    fileNames = fileNames.filter(fileName => fileName !== dupFileName);
  });

  // แสดงข้อมูลซักหน่อย
  console.log(currentFilePath, duplicatedFileNames.length);
}
