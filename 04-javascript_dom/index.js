// 변수 or (함수 매개변수)가 전달될 때,
// 값 또는 참조가 어떻게 전달되는지? 

// #1. pass by value (값에 의한 전달)
// - 원시 타입(primitive type)은 값(value)이 복사되어 전달.

let num = 1;
let num2 = num;
console.log(num, num2); // 1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1
console.log(num === num2); // false

function changeValue(x) {
    x = 10;
    console.log('x > ', x); // 10
}
changeValue(num);
console.log("num > ", num); // 5

// 함수로 전달될 때, 변수의 값이 복사되어 함수의 매개변수로 전달.
// 따라서 함수 내에서 매개변수의 값을 변경하더라도 원본 변수의 값은 변하지 않음.
// Why? 함수 내에서 사용되는 변수는 함수 내에서만 유효한 지역 변수이기 때문.
// x가 num의 값의 복사본을 가지고 있기 때문.

// #2. pass by reference (참조에 의한 전달)
// - 객체나 배열 같은 참조 타입 전달될 때 사용.
// - 변수의 메모리 위치(참조)가 전달되므로, 함수 내에서 요소를 변경하면 원래 변수도 변경됨.

const obj = {one: 1, two: 2};
const obj2 = obj;
console.log(obj, obj2); // {one: 1, two: 2} 
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2); // {one: 1, two: 2, five: 5}
console.log(obj === obj2); // true

// obj와 obj2는 현재 데이터도 같고 참조값 (address, 주소)도 같다.

console.log('-----------------');

const obj3 = {one: 1, two: 2};
const obj4 = {one: 1, two: 2};
console.log(obj3, obj4); // {one: 1, two: 2} 
console.log(obj3 === obj4); // false

// why?
// obj3와 obj4는 현재 데이터가 같지만, 서로 다른 별도의 객체이다.
// 즉, 참조값 (address, 주소)가 다르다.

obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4); // false