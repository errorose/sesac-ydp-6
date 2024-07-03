// MySQL 연결

const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

const conn = mysql.createConnection({
    host : process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// 로그인 시도 때 회원 조회
exports.postSignIn = (data, callback)=>{
    conn.query(
        `select * from user where userid = '${data.userid}'`,
        (err, rows)=>{
            if(err){
                throw err;
            }
            console.log('DB 로그인 유저 조회 >> ', rows);  // MySQL{ id: 2, userid: 'test', name: 'test', pw: '1234' }
            callback(rows[0]);
        }
    )
}

// 로그인 성공시 회원정보 수정 페이지
exports.postProfile = (data, callback)=>{
    conn.query(
        `select * from user where userid = '${data.userid}'`,
        (err, rows)=>{
            if(err){
                throw err;
            }
            console.log('유저 상세보기 조회 >> ', rows); // MySQL{ userid: 'test', userpw: '1234' }
            callback(rows[0]);
        }
    )
}

