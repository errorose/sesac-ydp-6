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
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res)=>{
    res.render('cookie');
})

app.listen(port, ()=>{
    console.log(`Sever is running! The port number is ${port} ...`);
    console.log('쿠키 비밀키: ', process.env.COOKIE_SECRET);
});