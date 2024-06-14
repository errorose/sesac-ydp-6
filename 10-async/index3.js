// 프로미스 체이닝 (Promise Chaining)
// 목표: 함수를 이용해 (4 + 3) * 2 - 1 을 연산해보자
// => sub(mul(add(4, 3), 2), 1) : add -> mul -> sub

// i) 콜백함수를 이용해 처리한 경우
// function add(n1, n2, callback) {
//     setTimeout(function () {
//         const result = n1 + n2;
//         callback(result);
//     }, 1000);
// }

// function mul(n, callback) {
//     setTimeout(function () {
//         const result = n * 2;
//         callback(result);
//     }, 700);
// }

// function sub(n, callback) {
//     setTimeout(function () {
//         const result = n - 1;
//         callback(result);
//     }, 500);
// }

// add(4, 3, function (x) {
//     console.log(x); // 예상값: 7

//     mul(x, function (y) {
//         console.log(y); // 예상값: 14

//         sub(y, function (z) {
//             console.log(z); // 예상값: 13
//         })

//     })

// })

// ii) 프로미스 체이닝을 이용한 경우
function add(n1, n2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n1 + n2; // 7
            resolve(result); // resolve(7)
        }, 1000);
    })
}

function mul(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n * 2; // 14
            resolve(result); // resolve(14)
            // reject(new Error('의도적으로 발생시킨 에러입니다!'));
        }, 700);
    })
}

function sub(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n - 1; // 13
            // resolve(result); // resolve(13)
            reject(new Error('의도적으로 발생시킨 에러입니다!'));
        }, 500);
    })
}

add(4, 3)
    .then(function (result) {  // 7
        console.log(result); // 7

        return mul(result); // return mul(7)
    })
    .then(function (result) { // 14
        console.log(result); // 14

        return sub(result); // return sub(14)
    })
    .then(function (result) { // 13
        console.log(result); // 13
    })
    .catch(function(error){
        console.log(error);
    })