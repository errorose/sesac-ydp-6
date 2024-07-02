const User = require('../model/User'); // 모델 파일에서 User 가져오기

// 메인 (로그인)
exports.main = (req, res) => {
    res.render('signin');
};

// 로그인 회원 조회
exports.postSignIn = (req, res)=>{
    const {userid, userpw} = req.body;
    console.log('req.body >> ', req.body);

    User.postSignIn({userid: userid}, (result)=>{
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

// 회원가입 페이지
exports.getSignUp = (req, res)=>{
    res.render('signup');
}

// 회원 생성

