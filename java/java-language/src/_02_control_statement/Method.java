package _02_control_statement;

// 메서드
// - 객체가 갖는 기능(동작)

// 추후 배울 예정
// - static method: 클래스에 속하는 메서드, 객체 생성 없이 호출 가능
// - non-static method: 객체에 속하는 메서드, 객체 생성 후 호출 가능

public class Method {
    public static void main(String[] args) {
        hello();
        System.out.println(sum1(10, 20));
        System.out.println(sum2(11, 21));

        int[] numbers = {10, 20};
        int[] numbers2 = {10, 20, 30, 40};
        System.out.println("mul1 결과: " + mul1(10, 20));
        System.out.println("mul2 (numbers) 결과: " + mul2(numbers));
        System.out.println("mul2 (numbers2) 결과: " +mul2(numbers2));

        System.out.println(sum3(1, 2, 3));
        System.out.println(sum3(1, 2, 3, 4, 5, 6));
        System.out.println(sum3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

        System.out.println(factorial(5)); // 5! = 120
    }

    // 반환 값이 없는 메서드
    public static void hello() {
        System.out.println("안녕, 자바야!");
    }

    // 반환 값이 있는 메서드
    public static int sum1(int x, int y) {
        return x + y;
    }

    public static String sum2(int x, int y) {
        return "x + y = " + (x + y);
    }

    // call by value (값 전달)
    public static int mul1(int x, int y) {
        return x * y;
    }

    // call by reference (참조 전달)
    public static int mul2(int[] nums) {
        int sum = 1;
        for (int n : nums) {
            sum *= n;
        }

        return sum;
    }

    // 가변인자(Varargs) 사용: 메소드 호출 시 넘겨줄 인자의 개수를 동적으로 지정할 수 있게 해주는 기능
    // 문법) 타입... 변수명
    // - 메소드 내부에서 가변 인자는 배열로 처리
    // - 가변 인자는 메서드의 마지막 파라미터로만 사용 가능
    // - 하나의 메소드에는 하나의 가변인자만 사용 가능
    public static int sum3(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }

        return total;
    }

    // 재귀 메서드: 자기 자신을 호출하는 메서드
    public static int factorial(int n) { // n = 5 -> n = 4 -> n = 3 -> n = 2 -> n = 1
        if (n <= 1) return 1; // 5 * 4 * 3 * 2 * 1 => 120
        return n * factorial(n - 1); // 5 * fac(4) -> 5 * 4 * fac(3) ->  5 * 4 * 3 * fac(2)  -> 5 * 4 * 3 * 2 * fac(1)
    }


}

// 용어 정리
// - 메소드 선언: 이름 있는 중괄호 블록 만들기
// - 메소드 호출: 이름으로 중괄호 블록 실행하기