const express = require('express');
const controller = require('../controller/Cmember');
const router = express.Router();

// 회원가입 페이지
router.get('/signup', controller.getSignUp);

// 회원생성
router.post('/signup', controller.postSignUp);

module.exports = router;