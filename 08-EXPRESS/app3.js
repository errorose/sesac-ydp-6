// express 모듈 불러오기
const express = require('express');
const app = express();
const PORT = 8000;

// 템플릿 엔진을 ejs로 지정
app.set('view engine', 'ejs');
// 템플릿이 있는 디렉토리 지정
app.set('views', './views');

// index.ejs 파일 가져와서 렌더링
app.get('/', (req, res)=>{
    res.render('index');
})

// express로 서버 시작
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})