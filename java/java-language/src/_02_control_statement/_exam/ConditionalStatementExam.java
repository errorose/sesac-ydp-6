package _02_control_statement._exam;

import java.util.Scanner;

public class ConditionalStatementExam {
    public static void main(String[] args) {
        // 조건문 실습
        Scanner scanner = new Scanner(System.in);
        System.out.println("나이를 입력하세요.");
        int age = scanner.nextInt();
        String result;

        switch (age){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                result = "유아";
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
                result = "초등학생";
                break;
            case 14:
            case 15:
            case 16:
                result = "중학생";
                break;
            case 17:
            case 18:
            case 19:
                result = "고등학생";
                break;
            default:
                result = "성인";
                break;
        }
        System.out.print(result);
        System.out.println();

        // 실습2
        System.out.println("이름을 입력하세요.");
        String name = scanner.next();

        if(name.equals("홍길동")){
            System.out.println("남자");
        }else if(name.equals("성춘향")){
            System.out.println("여자");
        }else{
            System.out.println("모르겠어요.");
        }
        System.out.println();

        // 실습3
        System.out.println("세개의 정수를 공백으로 구분하여 입력해주세요.");

        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        int num3 = scanner.nextInt();
        int maxNum = num1;
        int minNum = num1;

        if(num2 > maxNum){
            maxNum = num2;
        }
        if(num3 > maxNum){
            maxNum = num3;
        }
        if(num2 < minNum){
            minNum = num2;
        }
        if(num3 < minNum){
            minNum = num3;
        }

        int sumNum = num1 + num2 + num3;
        int avgNum = (num1 + num2 + num3) / 3;

        System.out.printf("최댓값: %d, 최솟값: %d, 합계: %d, 평균: %d", maxNum, minNum, sumNum, avgNum);
    }
}
