// express 모듈 등록
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config({
    path: path.resolve(__dirname, '.env'),
});

const port = process.env.PORT;

// 뷰 엔진 설정
app.set('view engine', 'ejs');  // ejs 엔진 설정
app.set('views', './views');    // views 폴더 연결

// static 미들웨어 등록
app.use('/static', express.static(__dirname + '/static'));

// body-parser 미들웨어 등록
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// express-session 미들웨어 등록
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30일
    }
}));

// 라우터
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.use('/user', indexRouter);

app.get('*', (req, res)=>{
    res.render('404');
})

// 서버 실행
app.listen(port, ()=>{
    console.log(`Server start!! http://localhost:${port}`);
});