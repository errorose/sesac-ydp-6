package _05_class._interface._02;

// 상수 인터페이스 패턴
// - enum 이나 상수 유틸리티 클래스를 사용하는 것이 더 바람직한 코드
// - 문법적으로 문제는 없지만, Java 프로그래밍 방식에서 다른 방법이 사용되는 것이 좋다!
// => 주로 interface 는 메서드 선언을 위해 사용하며, 상수 정의만을 위한 인터페이스는 피하는 것이 바람직!
interface Constants {
    // 상수 필드 선언
    public static final int MAX_VALUE = 100;
    double PI = 3.141592; // public static final 생략
}

class ConstantsEx implements Constants {
    // 일반 메소드
    void display() {
        System.out.println("Max Value: " + MAX_VALUE);
        System.out.println("PI: " + PI);
    }
}

public class InterfaceEx02 {
    public static void main(String[] args) {
        ConstantsEx obj = new ConstantsEx();
        obj.display();
    }
}