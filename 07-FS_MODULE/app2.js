const fs = require('fs');

// 디렉토리 읽기
// fs.readdir('./', function(err, files){  // './' -> 현재 내 위치
//     if(err){
//         console.log('에러', err);
//     }else{
//         console.log('결과는 ', files);
//     }
// });
// console.log('---------------');

// 파일 생성 (내용이 있는 파일 생성)
// fs.writeFile('myNewFile.txt', 'Hello world', function(err){
//     if(err) throw err;
//     console.log('파일이 생성됨');
// });

// open(), w를 이용해서 파일생성 (내용이 없는 파일 생성 -> 빈파일)
// fs.open('myNewFile2.txt', 'w', function(err, file){
//     if(err) throw err;
//     console.log('파일이 생성됨');
// });

// 파일 생성 appendFile() 추가, 기존파일을 전제 (기존에 있는 파일에 내용 추가)
// fs.appendFile('myNewFile.txt', 'Kim', function(err){
//     if(err) throw err;
//     console.log('파일이 생성됨');
// });

// 파일 삭제
// fs.unlink('myNewFile2.txt', function(){
//     console.log('파일삭제 완료');
// });

// 파일이름 변경
fs.rename('myNewFile.txt', 'renameFile.txt', function(err){
    if(err) throw err;
    console.log('파일이름 변경 완료');
});
