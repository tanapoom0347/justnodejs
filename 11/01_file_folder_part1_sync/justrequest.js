const http = require('http');

for (let i = 1; i < 100; i++) {
    setTimeout(() => {
        const request = http.request(`http://127.0.0.1:8888/customer/${i}`);
        request.end();
    }, i);
}