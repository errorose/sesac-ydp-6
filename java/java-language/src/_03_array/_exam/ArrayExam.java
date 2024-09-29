package _03_array._exam;

import java.util.Scanner;

public class ArrayExam {
    public static void main(String[] args) {
        // 배열 실습
        Scanner scanner = new Scanner(System.in);

        System.out.println("5개의 정수를 입력하세요");

        int[] nums = new int[5];
        for(int i = 0; i < nums.length; i++){
            nums[i] = scanner.nextInt();
        }

        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
        }

        double avg = (double)sum / nums.length;
        System.out.println("평균은 = " + avg);

        scanner.close();
    }
}
