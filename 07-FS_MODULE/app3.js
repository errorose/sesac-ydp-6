// 파일 생성
const fs = require('fs');

// Sync -> 순서대로 실행
const data = fs.readFileSync('./input.txt', 'utf-8');
console.log(data);
console.log('파일 읽기 완료');

// console.log('파일 읽기 완료'); 부터 실행
// fs.readFile('./input.txt', function(err, data){
//     console.log(data);
// });
// console.log('파일 읽기 완료');
