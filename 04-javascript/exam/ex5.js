// 내장 메소드와 내장객체 실습

/**
 *  Q) 오늘은 주말일까요? 평일일까요?
 *  1) 내장 객체 Date를 이용해서 오늘이 평일인지 주말인지 콘솔창에 출력하기
 *  2) 조건문과 함께 프로그램 작성 (if, switch, 삼항연산자 중 하나 선택)
 */

let today = new Date().getDay();
// console.log(today);

console.log(today === 0 || today === 6 ? '주말' : '평일');

console.log('--------------------');
/**
 *  Q) 랜덤 숫자 뽑기
 *  1) 0 ~ 10 사이의 랜덤한 숫자를 출력하는 프로그램 작성.
 *  2) 0과 10은 포함하여 뽑기
 *  3) 내장객체 Math 사용하기
 */

// 0 ~ 10
console.log(Math.floor(Math.random() * 11));
