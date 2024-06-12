// &&(and) ||(or)
// true && true -> true
// true && false -> false
// true || true -> true
// true || false -> true

// const x = 5;
// const result = x || 100;    // or 연산자에서 첫번째 검사 값이 true면 다음 값 안봄 
// console.log(result);        // 결과 : 5

// const y = 7;
// const result2 = x < y && 'yy가 큼';     // and 연산자에서 첫번째 값이 true기 때문에 마지막 값 봄
// console.log(result2);                  // 결과 : 'yy가 큼'

// falsy : undefined, null, 0, false, '', NaN
// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);