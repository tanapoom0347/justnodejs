require('dotenv').config();
// สร้างลิ้งก์ MySQL connection string
// ตัวอย่าง -> mysql:://demo:12345678@127.0.0.1:3306/mydb99
const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } = process.env;
// const dbString = "mysql:://demo:12345678@127.0.0.1:3306/mydb99";
// console.log(process.env);
const dbString = `mysql:://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`;
console.log(dbString);