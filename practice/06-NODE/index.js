// console.log('Hello world');

const http = require('http');
http.createServer(function(req, res){
    var _url = req.url;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("<h2> Hello </h2>");
    res.end(`<p> ${_url} </p>`);
}).listen(8000, function(){
    console.log('8000포트에서 서버 실행중');
});