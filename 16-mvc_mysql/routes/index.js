const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

//  작업 순서
// read all -> create -> delete -> update

// 기본주소: localhost:PORT

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET / => visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 전체 조회

// POST /visitor
router.post('/visitor', controller.postVisitor); // 하나 추가

// DELETE /visitor
router.delete('/visitor', controller.deleteVisitor); // 하나 삭제

module.exports = router;