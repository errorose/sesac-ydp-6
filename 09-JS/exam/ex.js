// Spread 연산자 사용
// 두 개의 문자열을 합쳐서 배열로 만들기

const word1 = "abc";
const word2 = "xyz";

const spread = [...word1, ...word2];
console.log(spread);    // 결과 : [ 'a', 'b', 'c', 'x', 'y', 'z' ]

/////////////////////////////////////////////////////////////////////////

// Shape 클래스 만들기
class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const rec1 = new Shape(3,4);
console.log(rec1.getArea());

// Shape를 상속받은 각각의 클래스 Rectangel, Triangle, Circle 클래스를 이용해서 인스턴스 하나씩 생성

// Rectangel (직사각형) 클래스 만들기
class Rectangel extends Shape{
    constructor(width, height){
        super(width, height);
    }
    // 대각선 길이 구하기
    getDiagonal(){
        return Math.sqrt(this.width**2 + this.height**2);
    }
}

const rec2 = new Rectangel(3,4);
console.log('직사각형 넓이 : ', rec2.getArea());
console.log('대각선 길이 : ', rec2.getDiagonal());

// Triangle (삼각형) 클래스 만들기
class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }
    // 삼각형 넓이
    getArea(){
        return (this.width * this.height)/2;
    }
}

const tri = new Triangle(3,4);
console.log('삼각형 넓이 : ', tri.getArea());

// Circle (원) 클래스 만들기
class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height);
        this.radius = radius;
    }
    // 원 넓이
    getArea(){
        return (this.radius**2*Math.PI);
    }
}

const cir = new Circle(1,1,2);
console.log('원 넓이 : ', cir.getArea());
