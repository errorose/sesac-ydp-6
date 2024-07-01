const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const app = express();
const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

// cookie-parser 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));
const cookieConfig = {
    httpOnly: true, // 웹 서버를 통해서만 쿠키에 접근 가능 -> front js에서 document.cookie 로 접근 차단
    maxAge: 60 * 1000, // 쿠키 수명 (단위: ms)
    // expires: 만료 날짜/시간 지정 가능
    signed: true, // 쿠키의 암호화 (req.signedCookies)
    // secure: 웹 브라우저와 웹 서버가 https 프로토콜로 통신하는 경우만 쿠키를 서버에 전송
}

app.get('/', (req, res)=>{
    res.render('cookie');
})

app.get('/setCookie', (req, res)=>{
    // res.cookie(키, 값, 옵션)
    // : 쿠키를 설정하는 메서드 =/= 서버가 클라이언트 한테 응답
    // res.send(), res.json(), res.end() -> 서버가 클라이언트한테 응답 함 
    // res.cookie() -> 서버가 클라이언트한테 응답하는 게 아니라 "쿠키를 설정" (응답하기 전인 상태)
    res.cookie('myKeyTest', 'myValueTest', cookieConfig);

    // 클라이언트한테 응답!
    res.send('Set signed cookie!');
})

app.get('/clearCookie', (req, res)=>{
    // res.clearCookie(키, 값, 옵션)
    // : 쿠키를 삭제하는 메서드 =/= 서버가 클라이언트 한테 응답
    // : 쿠키를 생성할 때의 키, 값, 옵션이 일치해야 함!! (단, maxAge/expires 키는 일치할 필요 없음)
    res.clearCookie('myKeyTest', 'myValueTest', cookieConfig);

    res.send('Deleted signed cookie!');
})

app.get('/getCookie', (req, res)=>{
    // req.signedCookies
    // : cookie-parser가 만든 요청의 서명된 쿠키를 해석해서 보여줌
    res.send(req.signedCookies);
})

app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...`);
    console.log('쿠키 비밀키: ', process.env.COOKIE_SECRET);
}) // 실행할 때 명령어: npm run cookie:start

// cookie-parser
// : 요청에 실려온 쿠키를 해석해서 req.cookies 객체로 만듦

// cookieParser(secretKey, optionObj)
// - secretKey: 비밀키
//      - 비밀키의 값을 통해 해당 쿠키가 이 서버가 만든 쿠키임을 검증
//      - 쿠키는 클라이언트에 저장되는 정보이다보니 위조가 쉬워서 비밀키를 통해 만든 서명을 쿠키 뒤에 붙임
// - optionObj: 쿠키에 사용하는 옵션