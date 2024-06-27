// TODO: 컨트롤러 코드
const { name } = require('ejs');
const User = require('../model/User');

// 메인
exports.main = (req, res)=>{
    res.render('index');
}

// 회원가입 페이지
exports.viewSignUp = (req, res)=>{
    res.render('signup');
}

// 회원생성
exports.postSignUp = (req, res)=>{
    // console.log('req.body >> ', req.body);
    User.postSignUp(req.body);
}

// 로그인 페이지
exports.viewSignIn = (req, res)=>{
    res.render('signin');
}

// 로그인 회원 조회
exports.postSignIn = (req, res)=>{
    // console.log('req.body >>', req.body);
    User.postSignIn(req.body, (result)=>{
        // console.log('controller/postSignIn >> ', result);
        res.send({result});
    })
}

// 로그인 성공시 회원 정보 수정 페이지 접속
exports.postProfile = (req, res)=>{
    User.postProfile(req.body, (result)=>{
        res.render('profile', {
            id: result.id,
            userid: result.userid,
            pw: result.pw,
            name: result.name,
        });
    })
}

// 회원 정보 수정
exports.patchProfile = (req, res)=>{
    // console.log('req.body >>', req.body);
    User.patchProfile(req.body, (result)=>{
        res.send({result});
    })
}

// 회원 정보 삭제
exports.deleteUser = (req, res)=>{
    // console.log('req.body.id >> ',req.body.id);
    User.deleteUser(req.body.id, (result)=>{
        res.send({result});
    })
}
