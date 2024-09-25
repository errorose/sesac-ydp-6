package _04_exception;

import java.util.Arrays;
import java.util.Scanner;

public class ExceptionExam {
    public static void main(String[] args) {
        // 예외처리 실습 1번
        try {
            int[] arr = new int[4];
            for(int i = 1; i < 5; i++){
                System.out.println(i);
            }
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("인덱스가 범위를 벗어났습니다.");
        }

        // 예외처리 실습 2번
        try {
            Scanner sc = new Scanner(System.in);
            System.out.println("배열의 크기를 입력하세요.");
            int[] input = new int[4];
            for(int i = 0; i < input.length; i++){
                input[i] = sc.nextInt();
            }
            System.out.println("입력한 배열의 크기는: " + Arrays.toString(input));
            int sum = 0;
            int avg = 0;
            for(int i = 0; i < input.length; i++){
                sum += input[i];
            }
            avg = sum / input.length;
            System.out.println("평균은: " + avg);
            sc.close();

        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("인덱스가 범위를 벗어났습니다.");
        }

    }
}
