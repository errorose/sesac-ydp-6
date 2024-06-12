const express = require('express');
const app = express();
const PORT = 8000;
// console.log(app);

app.set('view engine', 'ejs');
app.set('views', './views'); // views 폴더 안에 파일.ejs (화면에 보여지는 views들은 이 폴더에서 가져와라)

app.get('/', (req, res)=>{
    res.render('index');    // index파일 불러오기
})
// app.get('/', function(req, res){
//     res.send('Hello Express');
// })

app.listen(PORT, ()=>{
    console.log('8000포트에서 서버 실행중');
})

/**
 * 1. app.get(path, callback) HTTP GET 요청에 대한 라우터를 등록
 * 2. app.post (path, callback) HTTP POST 요청에 대한 라우터를 등록
 * 3. app.use([path,] callback [, callback...]): 미들웨어 함수를 등록
 * 4. app.set(name, value): Express 애플리케이션의 설정 값을 지정 일반적으로, view engine과 views 설정을 지정하는 데 사용
 * 5. app.listen(port, [host], [backlog], [callback]): HTTP 서버를 시작 이 메서드는 포트 번호, 호스트 이름, 백로그 크기, 콜백 함수를 전달
 * 6. res.send([body]): HTTP 응답으로 데이터를 전송 이 메서드는 문자열, 버퍼, 객체, 배열 등 다양한 유형의 데이터를 전송할 수 있음
 * 7. res.redirect([status,] path): HTTP 리다이렉트를 수행 이 메서드는 경로와 상태 코드를 전달
 * 8. req.params: 라우트 매개변수를 가져옴. 이 메서드는 콜론(:)으로 시작되는 동적 라우트 매개변수를 포함하는 객체를 반환함
 * 9. req.query: URL 쿼리 매개변수를 가져옴 이 메서드는 URL의 ? 뒤에 나오는 쿼리 문자열을 객체로 반환
 * 10. res.render(view [, locals] [, callback]): 뷰 템플릿을 렌더링 이 메서드는 뷰 이름과 뷰에 전달될 데이터를 전달
 */