const http = require("http"); 

const server = http.createServer((req, res) => {
    res.write("Hello World from Node JS")
    res.end();
})

server.listen('3000');
console.log("Server starting at 3000");


