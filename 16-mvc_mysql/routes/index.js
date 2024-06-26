const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

//  작업 순서
// read all -> create -> delete -> read one -> update

// 기본주소: localhost:PORT

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET / => visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 전체 조회

// GET /visitor/:id
router.get('/visitor/:id', controller.getVisitor); // 하나 조회

// POST /visitor
router.post('/visitor', controller.postVisitor); // 하나 추가

// DELETE /visitor
router.delete('/visitor', controller.deleteVisitor); // 하나 삭제

// PATCH /visitor
router.patch('/visitor', controller.patchVisitor); // 하나 수정

module.exports = router;

