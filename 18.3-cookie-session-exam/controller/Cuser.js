const User = require('../model/User'); // 모델 파일에서 User 가져오기

// 로그인 회원 조회
exports.postSignIn = (req, res)=>{
    console.log('server req.body >> ', req.body); // { userid: 'test', userpw: '1234' }
    const {userid, userpw} = req.body;
    
    User.postSignIn({userid: userid}, (result)=>{  // {userid: userid} -> req의 userid와 DB의 userid
        if(!result){
            return res.send({flag: false});
        }else{
            if(userpw !== result.pw){  // result.pw: 데이터베이스의 비밀번호 필드명
                return res.send({flag: false});
            }else{
                return res.send({flag: true});
            }
        }
    })
}

// 로그인 성공시 회원정보 수정 페이지
exports.postProfile = (req, res)=>{
    const userid = req.body;
    console.log('server req.body >> ', req.body); // { userid: 'test', userpw: '1234' }

    User.postProfile(userid, (result)=>{
        if(!result){
            res.status(404).send('User Not Found!');
        }else{
            res.render('profile', {data: result}); // {data: result} -> model/User.js에서 가져온 값 = callback(rows[0])
        }
        
    })
}

// 회원가입 페이지
exports.getSignUp = (req, res)=>{
    res.render('signup');
}

// 회원 생성

