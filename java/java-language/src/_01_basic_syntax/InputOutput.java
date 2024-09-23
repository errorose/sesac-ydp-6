package _01_basic_syntax;

import java.util.Scanner;

public class InputOutput {
    public static void main(String[] args) {
        int amount = 3;
        String product = "코카콜라 제로";

        // printf 메서드
        // : printf("출력 서식", 출력 내용)
        // *출력서식
        // %s(문자열), %d(정수형), %f(실수형), %c(문자형), %b(불리언형), %n(개행)

        int price = 3000;
        String coffee = "아이스 아메이카노";
        boolean shot = true;

        // 출력
        System.out.print("안녕하세요");
        System.out.println("내이름은 쿠로미!");
        System.out.print("잘부탁해^^");
        System.out.println();
        System.out.printf("편의점에서 %s 제품을 %d 개 구매했습니다. (10%% 할인중!) %n", product, amount);
        System.out.printf("카페에서 %s 커피를 %d 원에 구매했습니다. 샷 추가 여부는 %b 입니다. %n%n", coffee, price, shot);

        // 입력
        // - Scanner 클래스
        System.out.println("공백으로 구분하여 이름/나이/키/결혼여부를 입력해주세요 >> ");

        Scanner scanner = new Scanner(System.in);

        String name = scanner.next(); // 공백 이전까지의 문자열을 읽음
        int age = scanner.nextInt(); // 공백 이전까지의 정수를 읽음
        double height = scanner.nextDouble(); // 공백 이전까지의 실수를 읽음
        boolean single = scanner.nextBoolean(); // 공백 이전까지의 불리언을 읽음

        System.out.println("=== 입력 결과 출력 ===");
        System.out.printf("이름\t\t\t: %s (님)\n", name);
        System.out.printf("나이\t\t\t: %d (세)\n", age);
        System.out.printf("키\t\t\t: %.1f (cm)\n", height);
        System.out.printf("결혼여부\t: %b\n", single);

        scanner.close(); // scanner 닫기
    }
}
