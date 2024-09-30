package _05_class._abstract;

public class Square extends Shape {
    public Square(String color) { super(color); }

    // 추상 메소드 구현
    @Override
    void draw() {
        System.out.println("사각형 그리기!");
    }
}
