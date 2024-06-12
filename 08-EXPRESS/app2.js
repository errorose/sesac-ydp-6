const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 브라우저에 처음 접속했을때
app.get('/', (req, res)=>{
    res.render('index', {title:'홈'});    
})

app.get('/about', (req, res)=>{
    res.render('about', {title:'소개'});
})

app.get('/create', (req, res)=>{
    res.render('create', {title:'작성'});
})

app.listen(PORT, ()=>{
    console.log('8000포트에서 서버 실행중');
})