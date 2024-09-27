package _05_class._access_modifier._pack3;

public class B {
    public void method(){
        A a = new A();

        // 필드 변경
        a.field1 = 11;
        a.field2 = 22;
//        a.field3 = 33; // private field 이므로 compile error

        // 메소드 호출
        a.method1();
        a.method2();
//        a.method3(); // private method 이므로 compile error
    }
}
