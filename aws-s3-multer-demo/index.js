const express = require('express');
const app = express();
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');

// 주의) aws-sdk와 multer-s3 모듈의 버전이 맞아야 한다.
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

dotenv.config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// AWS S3 설정
const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

// Multer-S3 미들웨어 설정
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME, // S3 버킷 이름
        acl: 'public-read', // ACL 권한 설정 (ex : public-read, private 등) // 누구나 파일 접근 가능
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname); // S3에 저장될 파일 이름 설정
            // 현재 시간과 원본 파일 이름을 조합하여 고유한 파일 이름 생성.
        },
    }),
});

// 루트 페이지 렌더링
app.get('/', (req, res) => {
    res.render('index', { imageUrl: '' }); // 초기 랜더링 시에는 업로드 된 이미지 URL이 없으므로 빈 문자열 전달
});

// 이미지 업로드 처리
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file); // 업로드 된 파일 정보를 콘솔 출력.
    const imageUrl = req.file.location;
    res.render('index', { imageUrl });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});