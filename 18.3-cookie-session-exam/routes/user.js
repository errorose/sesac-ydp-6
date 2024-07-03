const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 로그인 회원 조회
router.post('/signin', controller.postSignIn);

// 로그인 성공시 회원정보 수정 페이지
router.post('/profile', controller.postProfile);

// 로그아웃 페이지


// 회원가입 페이지
router.get('/signup', controller.getSignUp);

module.exports = router;