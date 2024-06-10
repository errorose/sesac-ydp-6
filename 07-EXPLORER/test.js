const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var fileName = '.' + q.pathname;

    fs.readFile(fileName, function(err, data){
        if(err){
            res.writeHead(404, {'Content-type' : 'text/html'});
            return res.end('File not found');
        }else{
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(3000, ()=>{
    console.log('3000포트에서 서버 실행중');
});