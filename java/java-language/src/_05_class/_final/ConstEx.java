package _05_class._final;

public class ConstEx {
    public static void main(String[] args) {

        // 상수 읽기
        System.out.println(Const.GREETING);
        System.out.println(Const.MAX_VALUE);

        // 상수는 값을 변경할 수 없어야 함 (에러 발생)
//        Const.MAX_VALUE = 10;
//        Const.GREETING = "Hi";

    }
}