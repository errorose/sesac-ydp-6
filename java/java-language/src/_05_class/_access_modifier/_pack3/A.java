package _05_class._access_modifier._pack3;

// 필드와 메소드의 접근 제한자
public class A {
    public int field1; // public
    int field2; // default
    private int field3; // private

    // constructor
    public A() {
        // 클래스 내부이므로 접근 제한자의 영향 받지 않음
        field1= 1;
        field2= 2;
        field3= 3;
    }

    // public method
    public void method1() {}

    // default method
    void method2() {}

    // private method
    private void method3() {}
}