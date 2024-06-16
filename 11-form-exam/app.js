// form 실습
// Get 방식으로 정보 받기

const express = require('express');
const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('views', './views');

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index', {title: 'Get 요청'});
})

app.get('/getForm', (req, res)=>{
    console.log(req.query);
    res.render('result', {
        title: 'Get 요청 결과',
        userInfo: req.query
    });
})

app.listen(PORT, ()=>{
    console.log(`Server start! http://localhost:${PORT}`);
})