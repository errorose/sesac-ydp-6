const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);

router.get('/user', controller.main);

// 로그인 회원 조회
router.post('/user/signin', controller.postSignIn);

// 로그아웃 페이지


// 회원가입 페이지
router.get('/user/signup', controller.getSignUp);

module.exports = router;