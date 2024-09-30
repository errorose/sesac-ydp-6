package _05_class._abstract;

public class ShapeEx {
    public static void main(String[] args) {
        // 추상클래스인 Shape 은 new 연산자로 인스턴스 직접 생성 불가능
        // -> 자식 클래스인 Circle, Square 는 new 연산자로 인스턴스 생성 가능
        //        Shape shape = new Shape("green");
        Circle circle = new Circle("blue");
        Square square = new Square("yellow");

        // 매개변수의 다형성
        // : Shape 이 알아서 각각의 실체 클래스로 자동 타입 변환
        go(circle);
        go(square);
    }

    // static method
    public static void go(Shape shape) {
        shape.start();
        shape.draw();
        System.out.println("도형의 색상은 " + shape.color);
    }
}