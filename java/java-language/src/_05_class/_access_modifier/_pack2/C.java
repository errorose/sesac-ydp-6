package _05_class._access_modifier._pack2;

import _05_class._access_modifier._pack1.B;

public class C {
//    A a; // x
    B b;

    // C 클래스는 A, B 클래스와 패키지가 다르므로
    // default 제한자인 A 클래스는 에러 발생
    // public 제한자를 갖는 B 클래스는 가능 (단, import 해오면)
}
