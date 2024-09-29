package _04_exception._exam;

import java.util.Arrays;
import java.util.Scanner;

public class ExceptionExam {
    public static void main(String[] args) {
        // 예외처리 실습 1번
        int[] numArr = {1, 2, 3, 4};
        try {
            for(int i = 0; i <=5 ; i++){
                System.out.println(numArr[i]);
            }
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("인덱스가 범위를 벗어났습니다." + e.getMessage());
        }

        // 예외처리 실습 2번

    }
}
