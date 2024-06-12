// Spread 연산자 사용
// 두 개의 문자열을 합쳐서 배열로 만들기

const word1 = "abc";
const word2 = "xyz";

const spread = [...word1, ...word2];
console.log(spread);    // 결과 : [ 'a', 'b', 'c', 'x', 'y', 'z' ]

// Shape 클래스 만들기

class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        console.log(this.width * this.height);
    }
}

const rec1 = new Shape(3,4);
console.log(rec1.getArea());


