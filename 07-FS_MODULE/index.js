const fs = require('fs');
const path = require('path');

// demo라는 디렉터리 생성
fs.mkdir(path.join(__dirname, 'demo'), (err)=>{
    if(err){
        return console.error(err);
    }else{
        console.log('디렉터리 생성완료');
    }
});