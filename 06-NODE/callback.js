function first(){
    second();
    console.log('1');
    return
}

function second(){
    console.log('2');
    return
}

first();

// 콜백함수 : 어떤 지정된 기능이 종료된 후에 실행되는 함수.
// 거의 모든 함수가 이러한 콜백함수의 형태로 만들어져 있다.

