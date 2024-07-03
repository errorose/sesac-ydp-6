const Sequelize = require('sequelize'); // sequelize 패키지 불러오기
const config = require(__dirname + '/../config/config.json')["development"]; // DB 연결 정보
const db = {}; // 빈 객체 생성

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); // sequelize 객체 생성

// 모델 불러오기
const MemberModel = require('./Member')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//  db = {
//    sequelize: sequelize,
//    Sequelize: Sequelize
//  }

db.Member = MemberModel;
//  db = {
//    sequelize: sequelize,
//    Sequelize: Sequelize,
//    Member: MemberModel
//  }

module.exports = db;
// db 객체를 모듈로 내보냄 -> 다른 파일에서 db 모듈을 사용할 예정
