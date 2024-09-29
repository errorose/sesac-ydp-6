package _05_class._inheritance;

public class Dog extends Animal {
    // 메소드 오버라이딩
    // : 부모 클래스의 makeSound 메소드를 재정의
    @Override
    void makeSound() {
        super.makeSound(); // **부모 메소드 호출
        System.out.println("멍멍!");
    }

    // 자식 클래스에서만 존재하는 추가 메소드
    void fetch() {
        System.out.println("공 가져와!");
    }
}

// ** 부모 메소드 호출
// - 메소드 재정의;
//  부모 메소드는 숨겨지고 자식 메소드만 사용됨 (부모 메소드의 일부만 변경되더라도
//     중복된 내용을 자식 메소드도 가지고 있어야 함)
// ex. 부모 메소드가 100줄의 코드를 가지고 있다면, 자식 메소드에서 1줄만 추가하고 싶어도 100줄 코드를 다 써야함;;;
// - 자식 메소드와 부모 메소드의 공동 작업 처리 기법을 이용하면 쉽게 가능!!!! (즉, 자식 메소드 내에서 부모 메소드 호출)
// ex. super.METHOD() : 숨겨진 부모 메소드 호출