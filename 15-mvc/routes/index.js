const express = require('express');
const controller = require('../controller/Cmain');
// const { getMain, getComments, getComment } = require('../controller/Cmain');
const router = express.Router();

console.log('---- routes/index.js ----');
console.log(controller);

// 기본 요청 주소: "localhost:PORT"

// GET localhost:PORT/
router.get('/', controller.getMain);
// router.get('/', { getMain });

// GET localhost:PORT/comments
router.get('/comments', controller.getComments);
// router.get('/comments', { getComments });

// GET localhost:PORT/comment:id
router.get('/comment/:id', controller.getComment);
// router.get('/comment/:id', { getComment });

// 내보내기 한 걸 app.js 에서 받아서 index.js에 연결 해줌
module.exports = router; 
