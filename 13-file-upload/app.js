const express = require('express');
const multer = require('multer');   // multer 모듈 불러오기
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// multer 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'));
const upload = multer({
    dest: 'uploads/',
})

app.get('/', (req, res)=>{
    res.render('index', {title: '파일 업로드를 배워보자!'});
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})