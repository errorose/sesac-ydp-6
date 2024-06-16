// Promise (프로미스) 객체
// - 비동기처리하기 위한 첫번째 방법이 콜백함수인데, 콜백 지옥이라는 치명적인 단점이 있음
//      이 단점을 해결하기 위해 es6(ECMAScript6)부터 등장한 문법 (2015년)
// - 미래에 실패/성공에 대한 결과값을 "약속"한다는 의미
// - 어떤 작업에 대해 성공, 실패 분리해서 반환
//      성공은 then으로 실패는 catch 메서드로 이어서 받음

// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// 1. promise를 생성하는 코드 "제작 코드(Producing code)"
// function promise1(flag) {
//     // 프로미스 객체를 반환
//     // - new 연산자를 이용해서 프로미스 객체를 만들고 바로 반환

//     // 실행함수(excutor)가 두개의 콜백함수(resolve, reject)를 받음
//     return new Promise(function (resolve, reject) {
//         if (flag) {
//             resolve(`프로미스 이행(fulfilled) 상태! 성공! ${flag}`);
//         } else {
//             reject(`프로미스 거절(rejected) 상태.. 실패.. ${flag}`);
//         }
//     });
// }


// 2. promise를 소비하는 코드 "소비 코드(Consuming code)"
// promise1(5 < 3)
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// promise1(5 < 3)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// #############################################################

// index.js에서 콜백함수를 사용해 작성한 코드를 promise를 이용해 바꿔보자!
let product;
let price;

function goMart() {
    console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('고민 끝');
            product = '제로 콜라';
            price = 6000;
            // resolve();

            if (price <= 3000) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}

function pay() {
    console.log(`상품명: ${product} // 가격: ${price}`);
}

function nopay() {
    console.log('금액 부족ㅜㅜ');
}

goMart();
pickDrink().then(pay).catch(nopay);
// pickDrink().then(function () {
//     pay();
// });

