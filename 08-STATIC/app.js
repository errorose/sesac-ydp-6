const express = require('express');
const app = express();

//  설정
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));


// 홈페이지 접속시 경로 설정 (어떤 파일을 열건지)
app.get('/', (req, res)=>{
    res.render('index', {title : 'Home'});
})

app.get('/about', (req, res)=>{
    res.render('about', {title : 'About'});
})

app.get('/create', (req, res)=>{
    res.render('create', {title : 'Create'});
})

// 지정된 경로외 경로일때
app.use((req, res)=>{
    res.status(404).render('404');
})

// 8000포트 서버 열고 대기, 콜백함수 실행
app.listen(8000, ()=>{
    console.log('htp://localhost:8000');
});

