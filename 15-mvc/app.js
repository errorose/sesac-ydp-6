const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 

const indexRouter = require('./routes/index'); // index는 생략 가능
app.use('/', indexRouter); // 기본 요청 주소: "localhost:PORT"

const userRouter = require('./routes/user');
app.use('/user', userRouter); // 기본 요청 주소: "localhost:PORT/user"

// 404 
// 맨 마지막 라우트(주소)로 선언
// : 그렇지 않으면 나머지 라우팅(주소를 설계한 행위)이 전부 무시됨!!!!
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});