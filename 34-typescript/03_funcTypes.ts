// TS 에서의 함수 선언

// #1. 기본 함수 선언
function add(a: number, b: number): number {
    return a + b;
}
// 두 매개변수 'a', 'b' 모두 'number' type / 반환 값도 'number' type

// #2. 선택적 매개변수
// - 선택적 매개변수('?')는 매개변수 중 맨 뒤에 있어야 한다.
function print(a: number, b: number, c?: number): void {
    console.log('print() 출력 결과');
    console.log(a);
    console.log(b);
    console.log(c);
}
// 함수의 리턴값이 없는 함수 = void
// - return이 없거나 함수가 단순히 작업을 "수행"만 할 때

// print(2, 4, 6);  // 2 4 6
// print(2, 4);     // 2 4 undefined
// print(2);        // Error

// ** JS는 선언된 매개변수의 개수와 함수 호출시 전달되는 파라미터의 개수가 달라도 상관없음!
// ** TS는 매우 상관이 있습니다.

// #3. 기본값 매개변수
// - 매개변수에 기본 값 할당 가능
// - 매개변수 입력을 안받으면 기본 값 출력.
function print2(a: number, b: number, c = 100): void {
    console.log('print2() 출력 결과');
    console.log(a);
    console.log(b);
    console.log(c);
}
print2(2, 4, 6);    // 2 4 6
print2(2, 4);       // 2 4 100

// #4. 매개변수 없는 함수
function sayHello(): void {
    console.log('Hello');
}
sayHello();

// #5. void가 아닌 자료형을 리턴하는 함수
// 1. 
function sayHello2(): string {
    return 'Hello world!';
}
// sayHello2();             // 반환값이 문자열이므로! X
console.log(sayHello2());   // O

// 2.
function concatString(x: string, y: string): string {
    return x + y;
}
console.log(concatString('안녕', '하세요'));

// 3.
function circleArea(r: number): number {
    return r * r * Math.PI;
}
console.log(circleArea(5));

// #6. 화살표 함수
const squareArea = (x: number, y: number): number => {
    return x * y;
}
console.log(squareArea(3, 5));

// #7. 화살표 함수& return 구문 생략
const triangleArea = (w: string, h: string): number => 
    (parseInt(w, 10) * parseInt(h, 10)) / 2;
console.log(triangleArea('3', '4'));

// #8. interface 정의 시 함수 타입 표현
interface Greet {
    name: string;
    hi(): string;
    bye(a: number): string;
}

const sesac: Greet = {
    name: 'sesac',
    hi() {
        return '여기는 ' + this.name + ' 영등포 캠퍼스';
    },
    bye(a: number) {
        return `작별 인사를 ${a}번 했습니다.`;
    },
}
console.log(sesac.hi());
console.log(sesac.bye(5));

// #9. never
// - 함수의 끝에 절대 도달하지 않는 경우.
function goingOn(): never {
    while(true) {
        console.log('go!');
    }
}
// goingOn();   // 무한반복

// #10. 오버라이딩 vs 오버로딩
// ** 오버라이딩
// 클래스에서 부모 클래스의 메서드를 자식 클래스에서 재정의하는 개념
// 메서드의 "이름"과 "매개변수" 목록이 동일,
// 자식 클래스에서 새로운 구현을 제공하여 부모 클래스의 동작을 변경합니다.

class Animal {
    speak(): void {
        console.log('Animal sounds');
    }
}

class Dog extends Animal {
    speak(): void {
        super.speak();  // 부모 클래스의 speak 메서드를 호출.
        console.log('Dog 왈왈');
    }
}

const myDog = new Dog();
myDog.speak();

// ** 오버로딩
// "동일한 함수 이름"을 사용하지만 "서로 다른 매개변수" 목록을 가지는 여러 함수 정의를 제공하는 것.
// Ex1)
function greet(person: string): string;
function greet(person: string, age: number): string;

// 함수 구현
function greet(person: string, age?: number): string {
    if(age !== undefined) {
        return `Hello ${person}, you are ${age}`;
    } else {
        return `Hello ${person}`;
    }
}

// Ex2)
function sum(a: string, b: string): string; // 함수 선언
function sum(a: number, b: number): number; // 함수 선언

// 함수 구현
function sum(a: any, b: any) {
    return a + b;
}
console.log(sum('가', '나'));   // '가나'
console.log(sum(10, 20));      // 30






// ####################################################################################
// 두 개의 수를 매개변수로 받고 합을 console.log로 출력하는 함수 sum1 만들기
// function sum1(a: number, b: number): number {
//     return a + b;
// }
// console.log(sum1(1, 2));

function sum1(a: number, b: number): void {
    console.log(a + b);
}
sum1(5, 11); // 테스트는 이렇게 하기!

// ####################################################################################
// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

function sum2(...number: number[]): number {
   let sum: number = 0;
   number.forEach((num) => {
    sum += num;
});
    return sum;
}
// 테스트는 이렇게!
console.log(sum2(1, 2, 3, 4, 10)); // 20







