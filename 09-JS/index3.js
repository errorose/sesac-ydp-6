// 클래스

class House{
    constructor(year, name, window){  // constructor에 메서드에 사용할 변수 정의 (속성 정의)
        this.year = year;
        this.name = name;
        this.window = window;
    }
    getAge(){   // 사용할 메서드
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요! `);
    }
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
}

// House 복제해서 house1에 넣기
const house1 = new House(1990, '롯데', 1);  // 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 한다.

// console.log(house1);
// console.log(typeof house1); // object

// console.log(house1.year);
// house1.getAge();
// house1.getWindow();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 클래스의 상속

class Apartment extends House{
    constructor(year, name, window, floor, windowMaker){
        super(year, name, window)   // 부모의 속성을 가져올 때 (super)
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name} 아파트의 
        총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
    }
    // override(오버라이드) 부모의 메소드와 같은 함수를 재정의할 때
    getWindow(){    // 자식이 같은 이름의 메서드를 갖고 있으면 부모의 메서드가 삭제된다. (덮어씌움)
        return `${this.name} 아파트의 ${this.window} 개의 창문은 
            ${this.windowMaker} 회사에서 생산되었습니다.`;
    }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());


