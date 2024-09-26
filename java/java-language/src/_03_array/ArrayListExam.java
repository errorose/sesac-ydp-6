package _03_array;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ArrayListExam {
    public static void main(String[] args) {
        // ArrayList 실습
        List<String> arrayList = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true){
            System.out.println("문자를 입력해주세요. : ");
            String inputText = scanner.nextLine();

            if(inputText.equals("exit")){
                break;
            }

            arrayList.add(inputText);
        }

        for(String lists : arrayList){
            System.out.println(lists);
        }
        scanner.close();
    }
}
