package _05_class._exam;

// final 실습
public class Circle {
    // 필드
    private final double radius;
    private static final double PI = Math.PI;

    // 생성자
    public Circle(double radius){
        this.radius = radius;
    }

    public double calculagteArea(){
        return radius * radius * PI;
    }
}
