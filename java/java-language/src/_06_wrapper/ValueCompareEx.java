package _06_wrapper;

// 포장 클래스의 값 비교
public class ValueCompareEx {
    public static void main(String[] args) {
        // -128 ~ 127 이내의 값을 갖는 경우
        Integer obj1 = 10;
        Integer obj2 = 10;
        System.out.printf("%d == %d : %b %n", obj1, obj2, obj1 == obj2); // t
        System.out.printf("%d equals %d : %b %n", obj1, obj2, obj1.equals(obj2)); // t

        // -128 ~ 127 초과 값을 갖는 경우
        Integer obj3 = 1000;
        Integer obj4 = 1000;
        System.out.printf("%d == %d : %b %n", obj3, obj4, obj3 == obj4); // f
        System.out.printf("%d equals %d : %b %n", obj3, obj4, obj3.equals(obj4)); // t

        // boolean
        Boolean bool1 = true;
        Boolean bool2 = true;
        System.out.printf("%b == %b : %b %n", bool1, bool2, bool1 == bool2); // t
        System.out.printf("%b equals %b : %b %n", bool1, bool2, bool1.equals(bool2)); // t

        // char: \u0000 ~ \u007f
        Character char1 = 'A'; // 유니코드 (\u0041)
        Character char2 = 'A';
        System.out.printf("%c == %c : %b %n", char1, char2, char1 == char2); // t
        System.out.printf("%c equals %c : %b %n", char1, char2, char1.equals(char2)); // t

        Character char3 = '\u0101'; // 유니코드 0101에 해당하는 문자 (ā)
        Character char4 = '\u0101';
        System.out.printf("%c == %c : %b %n", char3, char4, char3 == char4); // f
        System.out.printf("%c equals %c : %b %n", char3, char4, char3.equals(char4)); // t

    }
}