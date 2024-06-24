const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

console.log('---- routes/user.js ----');
console.log(controller);

// 기본 요청 주소: "localhost:PORT/user"

// GET localhost:PORT/user
router.get('/', controller.getUser);

module.exports = router;
