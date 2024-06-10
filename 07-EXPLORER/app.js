// 모듈 3개 불러오기
var http = require('http');
var url = require('url');
var fs = require('fs');

// 서버 생성
// 127.0.0.1:3000포트로 접속해서 winter.html 이나 summer.html 브라우저에 띄우기
http.createServer(function(req, res){
    // req에 사용자가 원하는 파일 갖고오기
    var q = url.parse(req.url, true);
    var fileName = '.' + q.pathname;

    // 파일 읽어오기 (에러나면 err 실행, 정상적이면 data 실행)
    fs.readFile(fileName, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'}); // html 형식으로 읽어온다. 
            return res.end('File not found');
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    })

}).listen(3000, ()=>{
    console.log('3000포트에서 서버 실행중');
});
