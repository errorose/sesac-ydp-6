package _02_control_statement;

import java.util.Scanner;

public class LoopControlExam {
    public static void main(String[] args) {
        // 반복문 실습
        Scanner scanner = new Scanner(System.in);
        System.out.println("숫자를 입력하세요.");
        int number = scanner.nextInt();
        for(int i = 0; i < number; i++){
            System.out.print(i + 1 + " ");
        }
    }
}
