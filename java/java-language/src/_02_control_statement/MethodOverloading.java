package _02_control_statement;

// 메소드 오버로딩
// - 하나의 클래스에서 동일한 이름의 메소드 여러개 정의
// - 즉, 이름이 같고 매개변수 타입/개수/순서가 다르면 됨!!
// => 동작이 유사할 때 사용하면 편리

public class MethodOverloading {
    public static void main(String[] args) {
        // non-static 메소드로 선언했으므로 객체 생성해서 메소드를 호출
        // 1. 객체 생성
        MethodOverloading ol = new MethodOverloading();

        // 2. 생성된 객체의 메소드 사용
        System.out.println(ol.add(1, 2));
        System.out.println(ol.add(2.2, 3.3));
        System.out.println(ol.add(1.1, 2.2, 2.7));
        System.out.println(ol.add(2, 3, 4));
    }

    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b+ c;
    }

    public double add(double a, double b, double c) {
        return a + b + c;
    }
}