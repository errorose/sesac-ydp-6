const http = require('http');
http.createServer(function(req, res){
    // send http 
    // http status 200은 정상적인 응답
    // Content-Type : text/plain
    // res.writeHead(200, {'Content-Type':'text/plain'})
    res.writeHead(200, {'Content-Type':'text/html'}) // status : 200, {'Content-Type':'text/html'} html로 해석해라
    res.end(`<h2>Hello World</h2>`)

}).listen(8080, ()=>{
    console.log('8080포트에서 실행중');
});