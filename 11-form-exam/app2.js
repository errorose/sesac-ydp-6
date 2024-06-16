// form 실습
// Post 방식으로 정보 받기

const express = require('express');
const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index2', {title: 'Post 요청'});
})

app.post('/postForm', (req, res)=>{
    console.log(req.body);
    res.render('result2', {
        title: 'Post 요청 결과',
        userInfo: req.body
    });
})

app.listen(PORT, ()=>{
    console.log(`Server start! http://localhost:${PORT}`);
})