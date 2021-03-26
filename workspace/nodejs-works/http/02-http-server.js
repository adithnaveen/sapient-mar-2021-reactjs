const http = require("http"); 
const fs = require("fs")

// send html file 
// const server = http.createServer((req, res) => {
//     const rs = fs.createReadStream("./static/index.html");
//     res.writeHead(200,{'content-type' :'text/html'})
//     rs.pipe(res); 
// })


const server = http.createServer((req, res) => {
    const rs = fs.createReadStream("./json/emp.json");
    res.writeHead(200,{'content-type' :'application/json'})
    rs.pipe(res); 
})

console.log("Server starting... ");
server.listen('3000')