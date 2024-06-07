const http = require('http');
const fs = require('fs');   // 파일 관리해주는 파일 시스템 모듈 불러오기

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })   // readFile 함수로 index.html 파일 가져오기
});
server.listen(8000, ()=>{
    console.log('8000서버 실행');
})
