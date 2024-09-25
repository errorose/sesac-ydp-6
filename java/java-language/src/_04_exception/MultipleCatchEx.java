package _04_exception;

import java.util.Arrays;
import java.util.Scanner;

// 다중 catch 블록: 여러 유형의 예외를 처리 가능!
public class MultipleCatchEx {
    public static void main(String[] args) {
        Scanner sc = null;

        try {
            sc = new Scanner(System.in);
            System.out.println("숫자를 입력하세요 >> ");
            String input = sc.nextLine();

            // 문자열을 정수로 변환
            int number = Integer.parseInt(input); // NumberFormatException 예외 발생 가능

            // 숫자를 0으로 나누기 시도
            int result = 100 / number;
            System.out.println("100 을 " + number + "로 나눈 결과 = " + result);

            // 배열 접근 시도
            int[] array = new int[5];
            array[number] = 10;
            System.out.println(number + " 인덱스의 값을 10으로 수정했습니다. " + Arrays.toString(array));

        }catch (NumberFormatException e){
            System.out.println("숫자 형식이 잘못되었습니다. " + e.getMessage());
        }catch (ArithmeticException e){
            System.out.println("0으로 나눌 수 없습니다. " + e.getMessage());
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("배열 인덱스가 범위를 벗어났습니다. " + e.getMessage());
        }catch(Exception e){
            // General exception handler:
            // 예상치 못한 예외나 명시적으로 처리하지 않은 예외를 잡는 "마지막 방어선"
            // - 일반적으로 마지막 catch 블록으로 사용되며,
            // - 더 구체적인 예외들은 해당 블록 앞에 위치해야 함
            System.out.println("알 수 없는 예외가 발생했습니다. " + e.getMessage());
        }finally {
            System.out.println("프로그램을 종료합니다.");
            if(sc != null){
                sc.close();
            }
        }
    }
}
