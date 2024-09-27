package _05_class._access_modifier._pack4;

import _05_class._access_modifier._pack3.A;

public class C {
    public void method(){
        A a = new A();

        // 필드 변경
        a.field1 = 11;
//        a.field2 = 22; // default field 이므로 compile error
//        a.field3 = 33; // private field 이므로 compile error

        // 메소드 호출
        a.method1();
//        a.method2(); // default method 이므로 compile error
//        a.method3(); // private method 이므로 compile error
    }
}
