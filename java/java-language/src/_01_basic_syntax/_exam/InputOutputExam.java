package _01_basic_syntax._exam;

import java.util.Scanner;

public class InputOutputExam {
    public static void main(String[] args) {
        // 실습
        Scanner scanner = new Scanner(System.in);
        System.out.println("이름을 입력하세요.");
        String name = scanner.next();
        System.out.println("나이를 입력하세요.");
        int age = scanner.nextInt();

        System.out.printf("안녕하세요!\t %s 님(%d세)", name, age);
        scanner.close();
    }
}
