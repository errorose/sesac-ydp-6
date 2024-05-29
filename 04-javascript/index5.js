// 연산자

// 대입 연산자 (=)
// : 변수에 값을 "할당" 할 때 사용하는 연산자.

// 산술 연산자
// 사칙연산 : +, -, /, *
// 나머지 연산: %
// 거듭제곱 연산 : **

let a = 5;
let b = 2;

console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log(a % b); // 1
console.log(a**b); // 25

// 비교 연산자
// #1. 동등 비교
// - 같다 (동등): ==, ===
// - 같지 않다 (부등): !=, !==
// ==, != : "값" 만 비교 => type은 비교하지 않는 관대한 연산자.
// ===, !== : "값" 과 "type" 모두 비교 => 엄격한 연산자

console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 != 1); // false
console.log('1' == 1); // true
console.log('1' != 1); // false
console.log("--------------------");

console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 2); // true
console.log(1 !== 1); // false
console.log('1' === 1); // false
console.log('1' !== 1); // true
console.log("--------------------");

// #2. 크기 비교
// >, <, >=, <=
console.log(2 > 1); // true
console.log(2 >= 2); // true
console.log(2 < 1); // false
console.log(2 <= 2); // true
console.log("--------------------");

// 동등연산자 2개 (==) 는 예기치 못한 결과를 발생할수도..!!
// 자제 하도록 하자.. // 다 true 결과 값.
console.log(1 == '1'); // true
console.log('0' == false); // true
console.log('' == 0); // true
console.log(null == undefined); // true
console.log('-----------------');

// 논리 연산자
// !: not (참 -> 거짓, 거짓 -> 참)
// &&: and (여러 값 중 모두가 참 -> 참)
// ||: or (여러 값 중 하나라도 참 -> 참)
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!(2 > 1)); // !true => false
console.log(2 > 1 && - 2 < 1); // true && true -> true
console.log((2 > 1 && - 2 < 1) || 5 > 2); // true
console.log("---------------------");

// 문자열에서 + 연산 : 문자열 더하기
console.log("안녕" + "하세요");
console.log("12"+"34");

// 더하기 이외의 연산은 숫자로 자동 형변환 되어서 계산이 됩니다!
console.log('5' - '2'); // 3
console.log('5' * '2'); // 10
console.log('5' / '2'); // 2.5
console.log("-----------------------");

// 증감 연산자
// ++: 변수 값을 1 증가
// --: 변수 값을 1 감소
// 증감 연산자를 붙이는 위치에 따라 결과가 다르다.
let result1, result2;
let num = 10, num2 = 10;
console.log("num >", num);
console.log("num2 >", num2);

// 후위 연산자(postfix operator)
// : 변수에 먼저 대입한 후에 +1(-1) 연산을 수행
result1 = num++;

console.log(result1); // 10
console.log(num); // 11

// 전위 연산자(prefix operator)
// : +1(-1) 연산을 먼저 수행하고 변수에 대입.
result2 = ++num2;
console.log('result2 >', result2); // 11
console.log(num2); // 11

// 연산자 줄여쓰기
// +=, -= 연산자를 더 자주 씀!
console.log((num += 1)); // 12
console.log(num); // 12
console.log(num -= 1); // 11
console.log(num); // 11
console.log(num *= num2); // 11 * 11 = 121
console.log(num); // 121
console.log(num /= num2); // 11