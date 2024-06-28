// 선수와 관련된 라우터를 정의하는 파일

// 기본 요청 경로
// localhost:PORT/players

const express = require('express');
const router = express.Router();
const controller = require('../controller/CPlayer');

// 전체 선수 조회
router.get('/', controller.getPlayers);

// id로 특정 선수 조회
router.get('/:player_id', controller.getPlayer);

// 선수 추가
router.post('/', controller.postPlayer);

// 특정 선수의 소속 팀 변경
router.patch('/:player_id/team', controller.patchPlayer);

// 특정 선수 방출(삭제)
router.delete('/:player_id', controller.deletePlayer);

module.exports = router;