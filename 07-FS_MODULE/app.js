const fs = require('fs');
// console.log(fs);
// fs.mkdir(path, mode, callback);  // 형식

const path = require('path');

// 디렉터리 생성
// fs.mkdir(path.join(__dirname, 'test'), (err)=>{
//     if(err){
//         return console.error(err);
//     }else{
//         console.log('디렉토리 생성완료');
//     }
// });

// 디렉터리 삭제
fs.rmdir(path.join(__dirname, 'test'), (err)=>{
    if(err){
        return console.error(err);
    }else{
        console.log('디렉토리 삭제완료');
    }
});