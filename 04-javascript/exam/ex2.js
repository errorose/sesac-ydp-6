// 과제. 함수 만들기

// 함수 선언문
function multify(num1, num2){
    return num1*num2;
}

console.log(multify(2,3));

// 함수 표현식
let square = function(x){
    return x**2;
}

console.log(square(5));

// 조건문) IF문
let age = prompt('나이를 입력해주세요.');

if(age === ''){
    console.log('나이를 입력하지 않았습니다.');
}else if(age >= 20){
    console.log('성인');
}else if(age >= 17){
    console.log('고등학생');
}else if(age >= 14){
    console.log('중학생');
}else if(age >= 8){
    console.log('초등학생');
}else if(age >= 0){
    console.log('유아');
}else{
    console.log('잘못된 값입니다');
}

