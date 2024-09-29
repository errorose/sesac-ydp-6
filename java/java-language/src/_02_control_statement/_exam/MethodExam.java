package _02_control_statement._exam;

import java.util.Scanner;

public class MethodExam {
    public static void main(String[] args) {
        // 메소드 실습
        Scanner scanner = new Scanner(System.in);
        System.out.println("숫자 두 개를 입력하세요.");
        double num1 = scanner.nextDouble();
        double num2 = scanner.nextDouble();

        System.out.printf("덧셈\t결과 : %.1f \n", add(num1, num2));
        System.out.printf("뺄셈\t결과 : %.1f \n", minus(num1, num2));
        System.out.printf("나눗셈 결과 : %.1f \n", divide(num1, num2));
        System.out.printf("곱셈\t결과 : %.1f \n", multiply(num1, num2));
    }
    // 메소드
    public static double add(double x, double y){
        return x + y;
    }
    public static double minus(double x, double y){
        return x - y;
    }
    public static double divide(double x, double y){
        return x / y;
    }
    public static double multiply(double x, double y){
        return x * y;
    }
}
