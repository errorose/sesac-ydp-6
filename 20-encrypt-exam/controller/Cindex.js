// 메인 페이지
exports.index = (req, res)=>{
    res.render('index');
}

// 회원가입 페이지
exports.getSignUp = (req, res)=>{
    res.render('register');
}