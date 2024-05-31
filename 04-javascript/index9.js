// 내장 메서드란?
// - 프로그래밍 언어나 프레임워크에서 기본적으로 제공되는 메서드.
// - 따로 설치하거나 추가 설정할 필요 x

// 문자열 관련 내장 메서드
// - 문자열을 다루는데 유용한 기능들을 제공.

let str = 'Happy Birthday'
let str2 = '    Happy Birthday   '

console.log(str);
console.log(str2);

// 문자열 인덱싱
console.log(str[0]); // H
console.log(str[0] + str[12]); // Ha

// Hard
console.log(str[0] + str[1] + str[8] + str[11]);

// 문자열의 길이 (length는 메서드가 아닌 속성입니다.) / str.length -> (괄호)가 없다!
console.log(str.length); // 14
console.log(str2.length); // 21

// 대/소문자 변환
console.log(str.toUpperCase()); // HAPPY BIRTHDAY
console.log(str.toLowerCase()); // happy birthday

// 양끝 공백 제거
console.log(str2.trim()); // Happy Birthday
console.log(str2.trim().length); // 14
console.log('----------------');

console.log(str);
console.log(str2);
// indexOf() 글자 위치 찾기
// 위치(index): 0 부터 시작
// 같은 문자열이 있으면 처음에 나오는 위치
console.log(str.indexOf('y')); // 4
console.log(str.indexOf('i')); // 7
console.log(str.indexOf(' ')); // 5
console.log(str.indexOf('v')); // -1
// 존재하지 않는 문자에 대해 검색하면 -1 반환.
console.log(str.indexOf()); // -1
// 매개변수로 아무 값이 들어가지 않는다면 -1 반환.

// slice() 문자열 자르기
// 음수값이 들어간다면 뒤에서부터 순서를 센다.
console.log(str.slice(10)); // hday - 10번 위치의 글자 ~ 끝
console.log(str.slice(1, 5)); // appy - start (1) ~ end-1 (4) 까지 자르기.
console.log(str.slice(-4)); // hday - 뒤에서 4번 위치의 글자 ~ 끝
console.log('----------------');
console.log(str);
console.log(str2);

// replace() 문자열 바꾸기
console.log(str.replace('p','w'));
console.log(str.replace('B','w'));
console.log(str.replaceAll('p','w'));

// split() 문자열 쪼개기 (배열로 변환)
let str3 = 'dinner';
console.log(str3.split('e')); // ['dinn', 'r']
console.log(str3.split('n')); // ['di', '', 'er']

// repeat()
console.log(str3.repeat(4)); // dinnerdinnerdinnerdinner
console.log('------------------');

/////////////////////////////////////
// 배열 내장 메서드
let arr = [1, 2, 3, 4, 5];
let arr2 = ['quokka', 'dog', 'koala', 'panda'];

console.log(arr);
 // How? 배열에 값을 추가하려면?
//  arr[5] = 6; // arr 배열의 5번 인덱스에 6이라는 값 추가.
//  console.log(arr);
//  arr[8] = 100; // 인덱스를 건너뛰면 빈 값(empty)이 들어가게 됨.
//  console.log(arr);

// push(): 맨 끝에 요소 추가
arr.push(6);
arr.push(10)
console.log(arr);

// pop(): 맨 끝에 요소 제거
arr.pop();
console.log(arr);
 
// unshift(): 맨 앞에 요소 추가
arr2.unshift('cat');
console.log(arr2);

// shift(): 맨 앞에 요소 제거
arr2.shift();
console.log(arr2);

// length : 배열의 길이 변환
console.log(arr.length); // 6

// includes(요소): 요소가 있는지 없는지 검사. (true, false)
console.log(arr2.includes('quokka')); // true
console.log(arr2.includes('apple')); // false

// reverse()
// console.log(arr.reverse());
console.log(arr); // 원본 배열이 변경됨

// join(): join 안의 문자열 기준으로 병합.
console.log(arr2);
console.log(arr2.join(''));
console.log(arr2.join('-'));

console.log('--------------------');

// 메서드 체이닝(method chaining)
// 여러 메서드를 연결해서 사용할 수 있다!
console.log('hello'.split('')); // ['h', 'e', 'l', 'l', 'o']
console.log('hello'.split('').reverse()); //  ['o', 'l', 'l', 'e', 'h']
console.log('hello'.split('').reverse().join('')); // olleh



