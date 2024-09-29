package _05_class._static;

// 정적(static) 멤버(field + method)
// - 객체를 생성할 필요 없이 클래스를 통해서 바로 접근 가능
// - 클래스가 메모리에 로딩되면 정적 멤버 바로 사용 가능
// - 클래스 이름과 함께 dot(.) 연사자로 접근 가능
// - 정적 메소드와 정적 블록은 객체가 없어도 실행 가능하므로 내부에 인스턴스 필드나 인스턴스 메소드 사용 불가능
// - 객체 자기자신의 참조인 this 도 사용 불가능!
public class Calculator {
    // static field
    // : PI 값은 어떤 계산기든 동일하므로 static 선언
    static double pi = 3.141592;

    // static method
    // : plus, minus 외부에서 주어진 값으로 처리하므로 정적 메서드로 처리하는게 유리
    // (메소드의 매개변수가 인스턴스 필드를 이용하지 않으니)
    static int plus(int x, int y) { return x + y; }

    static int minus(int x, int y) { return x - y; }
}