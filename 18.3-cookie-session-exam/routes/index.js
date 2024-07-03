const express = require('express');
const controller = require('../controller/Cindex');
const router = express.Router();

// 메인 페이지(로그인)
router.get('/', controller.main);

module.exports = router;