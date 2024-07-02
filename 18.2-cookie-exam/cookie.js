const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({
    path: path.resolve(__dirname, '.env'),
});

const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views');

const today = new Date();
const expireToday = new Date();
expireToday.setDate(today.getDate() + 1);

// cookie-parser 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));
const cookieConfig = {
    httpOnly: true,
    expires: expireToday,
    signed: false,
}

app.get('/', (req, res)=>{
    const popupCookie = req.cookies.popup;
    
    if(popupCookie === 'hide'){
        res.render('cookie', {popup: popupCookie});
        // console.log('popupCookie >> ', popupCookie);
    }else{
        res.render('cookie', {popup: ''});
    }
})

app.get('/setCookie', (req, res)=>{
    res.cookie('popup', 'hide', cookieConfig);
    res.send('쿠키 설정 성공!');
})

app.listen(port, ()=>{
    console.log(`Sever is running! The port number is ${port} ...`);
    console.log('쿠키 비밀키: ', process.env.COOKIE_SECRET);
});