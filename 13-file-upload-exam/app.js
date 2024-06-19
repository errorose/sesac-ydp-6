const exp = require('constants');
const { render } = require('ejs');
const express = require('express');
const multer = require('multer');
const path = require('path');
const { title } = require('process');

const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname + '/public'));

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

app.get('/', (req, res)=>{
    res.render('index', {title: '동적 파일 업로드'});
})

// 동적 폼 업로드
app.post('/dynamicFile', uploadDetail.single('thumbnail'), (req, res)=>{
    console.log(req.body);
    console.log(req.file);
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})