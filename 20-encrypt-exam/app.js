// 모듈 불러오기
const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
    path: path.resolve(__dirname, '.env'),
});

const port = process.env.PORT;

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser 미들웨어 등록
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 라우터 분리
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 404
app.get('*', (req, res)=>{
    res.render('404');
})

app.listen(port, ()=>{
    console.log(`Sever is running! The port number is ${port} ...`);
});