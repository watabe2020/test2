const http = require('http');
const PORT = 90;

var server =  http.createServer(function(request, response) {

response.writeHead(200, {'Content-Type': 'text/plain'});
response.write('Hello World1\n');
response.write('Hello World2\n');
response.write('Hello World3\n');
response.write('Hello World4\n');
response.end('Hello World!\nThis site is created in Node.js.');

})

server.listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);


