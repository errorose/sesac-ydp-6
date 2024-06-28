const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');
const {sequelize} = require('./models/index');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 라우터 미들웨어 등록
app.use('/', router);
app.use('/players', playerRouter);
app.use('/teams', teamRouter);

sequelize
    // force: true; 서버 실행때 마다 테이블을 재 생성
    // force: false; 서버 실행 시 테이블이 없으면 생성
    .sync({force: false})
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log('Database connection succeeded!');
            console.log(`Server is running! Port number is ${PORT} ...`);
        });
    })
    .catch((err)=>{
        console.error(err);
    });

