const minimist = require('minimist');

// เลือกคำนวณ พื้นที่สามเหลี่ยม หรือ พื้นที่สี่เหลี่ยม
// node justtest.js --s=rect --w=6 --h=8
function get_triangle_area(width, height) {
    return 1/2 * width * height;
}

function get_rectangle_area(width, height) {
    return width * height;
}

const arguments = process.argv.slice(2);
// console.log(arguments);
const cleanArguments = minimist(arguments);
// console.log(cleanArguments);
const { s, w, h } = cleanArguments;
// console.log(s);

let area = 0;
if (s === 'tri') {
    area = get_triangle_area(w, h);
}
else if (s === 'rect') {
    area = get_rectangle_area(w, h);
}

console.log(area);