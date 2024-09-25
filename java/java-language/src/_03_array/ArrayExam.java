package _03_array;

import java.util.Scanner;

public class ArrayExam {
    public static void main(String[] args) {
        // 배열 실습
        Scanner scanner = new Scanner(System.in);
        System.out.println("3개의 정수를 입력하세요");
        int[] arr = {scanner.nextInt(), scanner.nextInt(), scanner.nextInt()};
        int sum = 0;
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        System.out.println("sum = " + sum);
        double avg = sum / 2;
        System.out.println("평균은 = " + (double)avg);

        scanner.close();
    }
}
