// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 메인
router.get('/', controller.main);

// 메인
router.get('/user', controller.main);

// 회원가입 페이지
router.get('/signup', controller.viewSignUp);

// 회원 생성
router.post('/signup', controller.postSignUp);

// 로그인 페이지
router.get('/signin', controller.viewSignIn);

// 로그인 회원 조회
router.post('/signin', controller.postSignIn);

// 로그인 성공시 회원 정보 수정 페이지 접속
router.post('/profile', controller.postProfile);

// 회원 정보 수정
router.patch('/profile/edit', controller.patchProfile);

// 회원 정보 삭제
router.delete('/profile/delete', controller.deleteUser);

module.exports = router;