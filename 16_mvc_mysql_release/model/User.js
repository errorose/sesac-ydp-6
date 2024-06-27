// TODO: DB(mysql) 연결
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '12345678',
    database: 'codingon'
})
// TODO: 모델 코드
// 회원가입
exports.postSignUp = (data)=>{
    conn.query(
        `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`,
        (err, rows)=>{
            if(err){
                throw err;
            }
            // console.log('model/User.js >> ', rows);
        }
    )
}

// 로그인
exports.postSignIn = (data, callback)=>{
    conn.query(
        `select * from user where userid='${data.userid}' and pw = '${data.pw}'`,
        (err, rows)=>{
            if(err){
                throw err;
            }
            // console.log('model/postSignIn >> ', rows[0]);
            callback(rows[0]); 
        }
    )
}

// 로그인 성공시 회원 정보 수정 페이지 접속
exports.postProfile = (data, callback)=>{
    conn.query(`select * from user where userid = '${data.userid}'`,
        (err, rows)=>{
            if(err){
                throw err;
            }
            // console.log('model/postProfile', rows);
            callback(rows[0]);
        }
    )

}

// 회원 정보 수정
exports.patchProfile = (updateData, callback)=>{
    const {id, pw, name} = updateData;
    conn.query(`update user set pw = '${pw}', name = '${name}' where id = ${id}`,
        (err, rows)=>{
            if(err){
                throw err;
            }
            // console.log('model/patchProfile', rows);
            callback(true);
        }
    )
}

// 회원 정보 삭제
exports.deleteUser = (targetId, callback)=>{
    // console.log('model/targetId >> ', targetId);
    conn.query(`delete from user where id = '${targetId}'`,
        (err, rows)=>{
            if(err){
                throw err;
            }
            callback(true);
        }
    )
}