const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req);

    fs.readFile('index.html', (err,data) => {
        res.writeHead(200, {'Content-type': 'text-hmtl'});
        res.write(data);
        
        return res.end();
    });
});

server.listen(port, hostname,() => {
    console.log("Server is running.");
});