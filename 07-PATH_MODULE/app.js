/**
 * path.join() : 여러인자를 넣으면 하나의 경로로 합쳐준다.
 * path.resolve() : path.join()과 비슷하지만 약간의 차이가 있다.
 * path.parse() : 파일경로를 root, dir, base, ext, name 으로 구분한다.
 * path.format() : path.parse()한 객체를 파일 경로로 합친다.
 */

const path = require('path');
// console.log(abc);
console.log(__dirname); // 경로까지 나옴
console.log(path.basename(__dirname));  // 현재 자기가 있는 폴더 이름
console.log(path.basename(__filename)); // 현재 자기가 있는 파일 이름
console.log(path.join('a', 'b', 'index.html'));

console.log('------------------');
// 구문 분석
let pahtname = path.parse('/home/user/dir/file.txt')    
console.log(pahtname);

console.log('==================');
console.log(path.extname('/home/user/dir/file.txt'));   // 확장자 이름
console.log(path.basename('/home/user/dir/file.txt'));  // 파일 이름




