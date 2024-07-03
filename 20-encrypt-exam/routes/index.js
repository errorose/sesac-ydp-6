const express = require('express');
const controller = require('../controller/Cindex');
const router = express.Router();

// 메인 페이지
router.get('/', controller.index);

module.exports = router;
