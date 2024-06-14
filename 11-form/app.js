const express = require('express'); // express 모듈을 가져오기
const app = express(); // express 애플리케이션 객체 생성
const PORT = 8888; // 서버가 실행될 포트 번호

app.set('view engine', 'ejs'); // 뷰 엔진이 ejs임을 알려줌
app.set('views', './views'); // 뷰들이 위치하게 될 폴더 위치를 알려줌

// 미들웨어(Middleware) 연결
// : 요청(request)과 응답(response)의 중간에서 작업하는 모든 것
// express에서는 app.use() 로 등록해야 함

// ex. body-parser 모듈
app.use(express.urlencoded({extended: true})); // urlencoded로 파싱된 body를 요청 -> post 요청으로 들어오는 모든 형식의 데이터를 파싱(풀어헤진다!)
app.use(express.json()); // 요청의 body 객체에 json 형태(일단은 js object와 유사한 것으로 알고 있자)로 온다

// 라우팅 (Routing) => 주소를 설정한다.
// localhost:PORT/ 경로로 접속했을 때, index.ejs를 응답하겠다.
app.get('/', (req, res) => {
    res.render('index', {title: '폼 실습을 해봅시다'});
})

app.get('/getForm', (req, res) => {
    console.log(req.query); // { id: 'banana', pw: '1234' }
    // res.send('get 요청 성공!')
    res.render('result', {title: 'GET 요청 결과', userInfo: req.query}) 
    // userInfo: req.query => userInfo: { id: 'banana', pw: '1234' }
})

app.post('/postForm', (req, res) => {
    console.log(req.body); // { id: 'apple', pw: '1234' }
    // res.send('post 요청 성공!')
    res.render('result', {title: 'POST 요청 결과', userInfo: req.body})
})

// res.send(): 문자열, JSON, 파일 등을 클라이언트에게 응답 (JSON을 가장 많이 응답)
// => 서버가 데이터를 응답할 때 send() 사용
// res.render(뷰, 데이터): 템플릿 엔진을 사용해서 서버 측에서 "동적으로" HTML을 생성하고 클라이언트에게 응답
// => 서버 측에서 동적으로 페이지를 렌더링할 때 render() 사용
// => 뷰: views/ 폴더의 ejs 파일을 연결
// => 데이터: 뷰에 넣어줄 정보 

// listen(포트번호, 서버가 실행되었을 때 실행할 콜백함수): 서버 시작 메서드
app.listen(PORT, ()=>{
    console.log(`Start server!!! http://localhost:${PORT}`);
})



