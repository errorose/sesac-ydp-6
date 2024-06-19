// path 내장 모듈
const path = require('path');

const ext = path.extname('hello.txt'); // extname: 확장자를 추출해주는 메서드
const base = path.basename('hello.txt', ext); // basename: 파일명에서 확장자를 제외한 파일 이름만 추출
const result = base + Date.now() + ext; // 파일명 + 현재시각 + 확장자

console.log(ext); // .txt
console.log(base); // hello
console.log(result); // hello1718771926535.txt