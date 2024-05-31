// 반복문

// for문
for(let i = 0; i < 10; i++){
    // i가 0 ~ 9 총 10번 반복
    console.log('안녕', i);
}

// 1 ~ 5 출력
for (let i = 0; i < 5; i++){
    console.log(i + 1);
}

console.log('-------------');
// 5 ~ 1 출력
for(let i = 5; i >= 1; i--){
    console.log(i);
}
console.log('-------------');

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for(let i = 1; i <= n; i++){
    // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복변수 i 값)
    sum = sum + i; // sum = 0 + 1; / 1 + 2 / 3 + 3
    console.log(i, sum);
}
console.log('-------------');

// for ~ if 중첩
// Hint 1) 1 ~ 20 까지 숫자를 반복
// Hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기.
// Hint 3) for문 안에 if문 조합해보세요.

// 1 ~ 20 중에서 짝수 일 때의 합을 구하기.
// let n2 = 20;
let sum2 = 0; // 빈값
for(let i = 1; i <= 20; i++){
    if(i%2 === 0){
        sum2 = sum2 + i; // sum += i;
        console.log(i, sum2);
    }
}
console.log(sum2);
console.log('-------------');

////////////////////////////////////////////////////////////
// while 문
let idx = 0;
while(idx < 10){
    console.log('안녕', idx);
    idx = idx + 1;
}
console.log('-------------');

let idx2 = 0;
while(true){
    // 의도적으로 무한루프
    // (무한루프에 빠졌다면 브라우저 닫고 다시 실행하기)
    console.log('안녕', idx2);
    idx2 = idx2 + 1;

    // 무한루프를 빠져나오는 조건
    if(idx2 === 10){
        break;
    }
}
console.log('-------while 문 (무한루프)------');

// 구구단 while 버전
let i = 2, j = 1;
while(i < 10){
    while(j < 10){
        console.log(i, 'x', j, '=', i*j);
        j++;
    }
    i++;
    j = 1;
}
console.log('-------------------');

// 구구단 for 버전
// let i = 2, j = 1;
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i, 'x', j, '=', i*j);
    }
}
console.log('-------------------');

////////////////////////////////////////////////////
// do ~ while문
/**
 * JavaScript에서 사용되는 반복문 중 하나로,
 * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사한다.
 * 즉) 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속!
 */

// * 구문
// do {
//     // 실행할 코드 내용
// } while(조건);

// ex1 )
// let g = 1;
// do {
//     console.log(g);
//     g++;
// } while(g <= 5);

// ex2)
// let number;

// do {
//     number = parseInt(prompt('숫자를 입력하세요 (10보다 큰 숫자):'), 10);
// } while (number <= 10)
// console.log("입력한 숫자: ", number);


///////////////////////////////////////////////////
// break & continue
// - 반복문에서 사용되는 제어문.

// # break
// - 반복문을 중단하고 빠져나옴

// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘어감.

// ex)
for (let i = 1; i<=10; i++) {
    if (i === 5) {
        break; // i가 5일 때 반복문 종료
    }
    console.log(i);
}
// 출력 결과 : 1, 2, 3, 4
console.log("----------------");
// ex2)
for (let i = 1; i<=5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
// 출력 결과 : 1, 2, 4, 5



