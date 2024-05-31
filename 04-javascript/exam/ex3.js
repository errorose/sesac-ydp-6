// 실습
/**
 * 10000 까지의 숫자 중에서
 * 13의 배수면서 홀수인 숫자를 찾아 봅시다!
 * + prompt 를 이용해서 입력받은 수 까지 13의 배수이면서 홀수인 숫자를 찾는 프로그램을 만들어 봅시다!
 */
let num = parseInt(prompt('숫자를 입력해주세요!'));
let n = 10000;
for(let i = 0; i <= n; i++){
    if(i % 13 === 0 && i % 2 === 1){
        console.log(i + ' 입력한 숫자 : ' + num);
    }
}

console.log('---------------------------------');

/**
 * 0 ~ 100의 숫자 중에서ㅓ 2 또는 5의 배수 총합 구하기!
 * 힌트 1 ) 나머지 연산자 % 를 사용
 * 힌트 2 ) 5 % 3 -> 2 (5를 3으로 나눈 나머지인 2의 값을 반환)
 */

let sum = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0 || i % 5 === 0){
        sum += i;
    }
}
console.log(sum);



