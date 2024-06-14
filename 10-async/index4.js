// 비동기처리의 3번째 방법 : async/await

// async 키워드 : 함수 앞에 작성
// => async를 붙이는 순간 해당 함수는 프로미스가 아닌 값을 반환하더라도 프로미스로 감싸서 반환

// async function f1(){
//     return 1;
// }

// async function f2(){
//     return Promise.resolve(1);
// }

// // 화살표 함수에도 async 키워드를 쓸 수 있음
// const f3 = async () => {
//     return 3;
// }

// console.log('f1() >> ', f1()); // Promise { 1 }
// console.log('f2() >> ', f2()); // Promise { <pending> }

// f1().then(function(result){
//     console.log(result);
// })

// f2().then(function(result){
//     console.log(result);
// })

////////////////////////////////////////////////////
// async/await
// await : 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 오게 됨
// - **async 키워드를 사용한 함수 안에서만 await를 사용 가능

// async/await는 세트다!!!!!!!!!!!!!!!

function fetchFruits(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const fruits = ['🥝', '🍇', '🍋'];
            resolve(fruits);
            // reject(new Error('알수 없는 에러 발생!! 아이템을 가져올 수 없습니다 ㅜ.ㅜ'));
        }, 100);
    });
}

// i) promise then()
fetchFruits()
    .then(function(f){
        console.log(f);
    })
    .catch(function(err){
        console.log(err);
    });


// ii) async/await
// async/await 에서는 예외 처리를 try-catch 구문으로 하게 됨!
async function printItems(){
    try{
        const fruits = await fetchFruits(); // [ '🥝', '🍇', '🍋' ]
        // const fruits = fetchFruits(); // Promise { <pending> }
        console.log(fruits);
    }catch(err){
        console.log(err);
    }
    
}
printItems();


