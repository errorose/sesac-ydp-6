// 모듈 불러오기
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const memberRouter = require('./routes/member');
const {sequelize} = require('./models/index');
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

// 라우터 미들웨어 등록
app.use('/', indexRouter);
app.use('/member', memberRouter);

// 404
app.get('*', (req, res)=>{
    res.render('404');
})

sequelize
    // force: true; 서버 실행때 마다 테이블을 재 생성
    // force: false; 서버 실행 시 테이블이 없으면 생성
    .sync({force: false})
    .then(()=>{
        app.listen(port, ()=>{
            console.log('Database connection success!');
            console.log(`Sever is running! The port number is ${port} ...`);
        });
    })
    .catch((error)=>{
        console.error(error);
    })

