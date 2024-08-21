// only TS type (ts type)

// * 튜플 (Tuple)
// - 튜플은 고정된 개수의 요소를 가짐.
// - 각 요소의 타입이 미리 지정된 배열.
// - 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음.

// 튜플 타입 선언
let drink: [string, string];

// 튜플 값 할당
drink = ['cola', 'cocaCola'];
console.log(drink);

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = ['cola', 'pepci'];
console.log(drink2);

// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근.
// 또한, 배열의 메소드도 사용 가능.

// 인덱스로 접근해 값 변경 가능
drink2[0] = 'zeroCola';
drink2[1] = 'zeroPepci';
console.log(drink2);

drink2.push('good');
console.log(drink2);

/**
 * * 튜플의 숨겨진 한계
 * : 길이와 타입이 정해진 것처럼 보이지만, push 메서드가 동작하므로 그 정의가 깨짐.
 * 튜플이라 고정된 개수가 변하면 안되는데 변해버림.
 *
 * Why?
 * - 이는 TS의 타입 시스템이 배열 메소드와 관련된 동작을 '완전히' 제한하지 않기 때문입니다.
 *
 * 이처럼 타입 시스템의 의도와 어긋나는 동작을 방지하고자 한다면,
 * as const를 사용하거나, readOnly 키워드를 사용하여 튜플을 불변으로 만들 수 있습니다.
 */

// readOnly
// - 요소의 타입 순서와 길이를 "완벽히" 고정.
let drink3: readonly [string, number] = ['cider', 2000];
// drink3.push('hello'); // Error
console.log(drink3);

// * type 별칭
// - type 별칭을 이용해 type 선언 가능!
type campionInfo = [number, string, number];

// 엄격하고 명확히 데이터를 관리해야 하는 작업일 경우 사용하면 이점!
let most1: campionInfo = [1, 'Yumi', 50000];
let most2: campionInfo = [2, 'Timo', 100000];

// ################################################
// * Enum
// - 사용하는 이유 Why?
// 1. 분야별로 종류를 정의하여 명확하게 사용.
// 2. 하드코딩의 실수를 줄이기 위해.

// - 숫자 값 지정 가능. (기본)
// enum Auth {
//     admin = 0,
//     user = 1,
//     guest = 2,
// }

// - #1. enum은 기본으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
    admin,
    user,
    guset,
}
console.log(Auth.admin); // 0
console.log(Auth.user); // 1
console.log(Auth.guset); // 2

// - #2. 정의되지 않은 값은 "이전" 값에 1씩 더해짐.
enum Menu {
    pasta = 4000,
    pizza = 5000,
    chicken, // 5001
}
console.log(Menu.pasta);
console.log(Menu.pizza);
console.log(Menu.chicken);

//  - #3. 문자열 지정 가능
enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}
console.log(Cafe.americano); // 아메리카노
console.log(Cafe.latte); // 카페라떼

// - #3-2 문자열 & 숫자 혼합 지정 가능
enum Cake {
    choco, // 0
    vanilla = 200, //200
    mango, // 201
    kiwi = 'kiwi', // 'kiwi'
}
console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.mango);
console.log(Cake.kiwi);

// ################################################
// * Any
// 1. 명시적 타입 지정
let val: any;
val = true;
val = 'Dog';
console.log(val);

// 2. 암시적 타입 지정
let val2;
val2 = false;
val2 = 'Cat';
console.log(val2);

// ################################################
// 1. 아래와 같이 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
let olimpic_newgame: readonly [object, boolean] = [
    {
        name: "쇼트트랙",
        type: "혼성 계주",
    },
    true,
];

console.log(olimpic_newgame);

//2. olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기
// olimpic_newgame[1] = false;
// console.log(olimpic_newgame);
