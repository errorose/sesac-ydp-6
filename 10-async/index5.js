// index.js에서 콜백함수를 사용해 작성한 코드를 async/await를 이용해 바꿔보자!

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

function nopay(){
    console.log('금액 부족 ㅜㅜ');
}

async function exec(){
    try{
        // 장점 : 함수의 실행 순서가 명확히 보인다!!
        goMart();
        await pickDrink(); // 시간이 걸리는 pickDrink() 함수의 작업을 await 키워드로 인해 기다려줌
        pay();
    }catch(err){
        nopay();
    }
}

exec();