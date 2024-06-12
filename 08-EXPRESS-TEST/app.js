const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(PORT, ()=>{
    console.log('8000포트에서 서버 실행중');
})