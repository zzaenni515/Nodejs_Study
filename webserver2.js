const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//webserver.js와 같은 동작
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
server.listen(port, hostname, function(){//listen은 시간이 오래걸릴수도 있어서 비동기로 함.
    console.log(`Server running at http://${hostname}:${port}/`);
});
