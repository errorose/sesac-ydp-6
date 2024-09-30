package _05_class._abstract;

public class Circle extends Shape {
    // 추상클래스는 new 연산자로 "직접 생성자 호출은 불가능"하지만,
    // 자식 객체 생성시 `super(...)` 연산자 호출(부모 클래스의 생성자)해서 추상클래스 객체 생성
    public Circle(String color) { super(color); }

    // 추상 메소드 구현
    @Override
    void draw() {
        System.out.println("원 그리기!");
    }
}