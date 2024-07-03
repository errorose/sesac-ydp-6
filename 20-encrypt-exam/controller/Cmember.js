const Member = require('../models/Member');

// 회원가입 페이지
exports.getSignUp = (req, res)=>{
    res.render('register');
}

// 회원 생성
exports.postSignUp = (req, res)=>{
    try{
        console.log('server req.body >> ', req.body);
        
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}