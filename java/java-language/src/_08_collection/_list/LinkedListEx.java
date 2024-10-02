package _08_collection._list;

import java.util.LinkedList;

public class LinkedListEx {
    public static void main(String[] args) {
        // LinkedList 생성
        LinkedList<String> list = new LinkedList<>();
        
        // 요소 추가
        list.add("Apple");
        list.add("Banana");
        list.add("Kiwi");
        list.add("Orange");
        System.out.println("list = " + list);
        
        // 첫번째, 마지막 위치에 요소 추가
        // - addFirst, addLast 메서드는 LinkedList 에 특화된 메서드
        list.addFirst("Grape");
        list.addLast("Cherry");
        System.out.println("list = " + list);
        
        // 특정 위치에 요소 삽입
        list.add(2, "Blueberry");
        System.out.println("list = " + list);

        // 첫번째와 마지막 요소 가져오기
        // - getFirst, getLast 메서드는 LinkedList 에 특화된 메서드
        System.out.println("첫번째 요소 " + list.getFirst());
        System.out.println("마지막 요소 " + list.getLast());
        
        // 요소 삭제
        list.remove("Banana");
        System.out.println("list = " + list);

        // 첫번째와 마지막 요소 삭제
        // - removeFirst(), removeLast() 메서드는 LinkedList 에 특화된 메서드
        String first = list.removeFirst();
        String last = list.removeLast();
        System.out.println("list = " + list);
        System.out.println("삭제된 첫번째 요소: " + first);
        System.out.println("삭제된 마지막 요소: " + last);

        // 요소 검색
        boolean containsCherry = list.contains("Cherry");
        System.out.println("Cherry 포함 여부: " + containsCherry);

        // 요소 위치 찾기
        int indexOfApple = list.indexOf("Apple");
        System.out.println("Apple 의 인덱스: " + indexOfApple);

        // 순회
        for (String f: list) {
            System.out.println("f = " + f);
        }

        // 크기
        System.out.println("LinkedList 사이즈: " + list.size());

        // 비우기
        list.clear();
        System.out.println("LinkedList 사이즈: " + list.size());

    }
}
