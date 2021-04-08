const http = require('http');
const Route = require('./modules/route.js');
const hostname = 'localhost'; 
const port = 8080; 

http.createServer((req, res) => {
    const route = new Route(req, res);
    route.static();
}).listen(port, () => {console.log(`Server running at http://${hostname}:${port}/`);});