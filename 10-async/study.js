// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// }, 3000);
// console.log(3);

// let product;
// let price;

// function goMart(){
//     console.log('카페에 가서 어떤 음료를 살지 고민한다..');
// }

// function pickDrink(){
//     setTimeout(()=>{
//         console.log('고민끝!');
//         product = '아이스아메리카노';
//         price = 4500;
//     }, 3000);
// }

// function pay(product, price){
//     console.log(`상품명: ${product} // 가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product, price);

// let product;
// let price;

// function goMart(){
//     console.log('카페에 가서 어떤 음료를 살지 고민한다..');
// }

// function pickDrink(callback){
//     setTimeout(()=>{
//         console.log('고민 끝!');
//         product = '아이스아메리카노';
//         price = 4500;
//         callback(product, price);
//     }, 3000);
// }

// function pay(product, price){
//     console.log(`상품명: ${product} // 가격: ${price}`);
// }

// goMart();
// pickDrink(pay);


// function promise1(flag){
//     return new Promise((resolve, reject)=>{
//         if(flag){
//             resolve(`프로미스 이행(fulfilled) 상태! 성공! ${flag}`);
//         }else{
//             reject(`프로미스 거절(rejected) 상태.. 실패.. ${flag}`);
//         }
//     });
// }

// promise1(false)
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// let product;
// let price;

// function goMart(){
//     console.log('카페에 가서 어떤 음료를 살지 고민한다..');
// }

// function pickDrink(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('고민 끝');
//             product = '아이스아메리카노';
//             price = 4500;
//             // resolve();
//             if(price<=5000){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 3000);
//     })
// }

// function pay() {
//     console.log(`상품명: ${product} // 가격: ${price}`);
// }

// function nopay(){
//     console.log('금액 부족 ㅜㅜ');
// }

// goMart();
// pickDrink().then(pay).catch(nopay);

// (4 + 3) * 2 - 1
// function start(){
//     console.log('연산해보자!');
// }

// function add(n1, n2, callback){
//     setTimeout(()=>{
//         const result = n1 + n2;
//         callback(result);
//     }, 1000);
// }

// function mul(n, callback){
//     setTimeout(()=>{
//         const result = n * 2;
//         callback(result);
//     }, 700);
// }

// function sub(n, callback){
//     setTimeout(()=>{
//         const result = n - 1;
//         callback(result);
//     }, 500);
// }

// start();
// add(4, 3, (x)=>{
//     console.log(x);
//     mul(x, (y)=>{
//         console.log(y);
//         sub(y, (z)=>{
//             console.log(z);
//         });
//     });
// });

// (4 + 3) * 2 - 1
// function start(){
//     console.log('연산해보자!');
// }

// function add(n1, n2){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const result = n1 + n2;
//             resolve(result);
//         }, 1000);
//     });
// }

// function mul(n){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const result = n * 2;
//             resolve(result);
//         }, 700);
//     })
// }

// function sub(n){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const result = n - 1;
//             // resolve(result);
//             reject(new Error('에러!'));
//         }, 500)
//     })
// }

// add(4, 3)
//     .then((result)=>{
//         console.log(result);
//         return mul(result); // 7
//     }).then((result)=>{
//         console.log(result);
//         return sub(result); // 14
//     }).then((result)=>{
//         console.log(result);
//     }).catch((error)=>{
//         console.log(error);
//     })

// async function f1(){
//     return 1;
// }

// console.log(f1());

// async function f2(){
//     return Promise.resolve(1);
// }

// console.log(f2());

// const f3 = async()=>{
//     return 3;
// }

// console.log(f3());

// f1().then((result)=>{
//     console.log(result);
// })

// f2().then((result)=>{
//     console.log(result);
// })

// function fetchFruits(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const fruits = ['수박', '딸기', '복숭아'];
//             resolve(fruits);
//             // reject(new Error('에러!'));
//         }, 1000)
//     });
// }

// fetchFruits()
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// async function printItems(){
//     try{
//         const fruits = await fetchFruits();
//         console.log(fruits);
//     }catch(err){
//         console.log(err);
//     }
// }

// printItems();

let product;
let price;

function goMart(){
    console.log('카페에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('고민 끝!');
            product = '아이스아메리카노';
            price = 4500;
            if(price < 6000){
                resolve();
            }else{
                reject();
            }
        }, 3000);
    });
}

function pay(){
    console.log(`상품명: ${product} // 가격: ${price}`);
}

function nopay(){
    console.log('금액부족 ㅠㅠ');
}

async function exec(){
    try{
        goMart();
        await pickDrink();
        pay();
    }catch(error){
        nopay();
    }
}

exec();