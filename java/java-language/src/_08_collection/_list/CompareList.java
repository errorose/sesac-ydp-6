package _08_collection._list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

// ArrayList vs. LinkedList
public class CompareList {
    public static void main(String[] args) {
        // ArrayList 컬렉션 객체 생성
        List<String> list1 = new ArrayList<>();

        // LinkedList 컬렉션 객체 생성
        List<String> list2 = new LinkedList<>();

        // 시작, 끝 변수 선언
        long startTime;
        long endTime;

        // ArrayList 의 0 번 인덱스에 데이터 추가 (10000회 반복)
        startTime = System.nanoTime();
        for (int i = 0; i <10000; i++) {
            list1.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime();
        System.out.println("ArrayList 소요 시간: " + (endTime - startTime));

        // LinkedList 의 0 번 인덱스에 데이터 추가 (10000회 반복)
        startTime = System.nanoTime();
        for (int i = 0; i <10000; i++) {
            list2.add(0, String.valueOf(i));
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList 소요 시간: " + (endTime - startTime));

        // 결과 해석
        // - LinkedList 가 요소 추가에 대해 더 빠른 성능을 냄
        // - 왜냐, ArrayList 는 0 번 인덱스에 새로운 요소를 추가하면서 기존 요소 인덱스를
        //      한 칸씩 뒤로 미루는 작업을 해야하기 떄문!!!

    }
}