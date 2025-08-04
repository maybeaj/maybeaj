const http = require("http");
let count = 0;

const server = http.createServer((req, res) => {
    count += 1;              // 요청 올 때마다 증가
    log(count);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("hello\n");
    setTimeout(() => {
        res.end("Node.js");
    }, 2000);
});

function log(n) {
    console.log(n);
}

server.listen(8000, () => console.log("Hello Node.js"));