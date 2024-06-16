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

let product;
let price;

function goMart(){
    console.log('카페에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('고민 끝');
            product = '아이스아메리카노';
            price = 4500;
            if(price<=5000){
                resolve();
            }else{
                reject();
            }
        }, 3000);
    })
}

function pay() {
    console.log(`상품명: ${product} // 가격: ${price}`);
}

function nopay(){
    console.log('금액 부족 ㅜㅜ');
}

goMart();
pickDrink().then(pay).catch(nopay);