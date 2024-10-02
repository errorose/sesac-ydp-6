package _08_collection._list;

import java.util.ArrayList;
import java.util.List;

public class ArrayListEx {
    public static void main(String[] args) {
        // ArrayList 컬렉션 생성
        List<Book> list = new ArrayList<>();

        // 객체 추가
        list.add(new Book("제목1", "지은이1"));
        list.add(new Book("제목2", "지은이2"));
        list.add(new Book("제목3", "지은이3"));
        list.add(new Book("제목4", "지은이4"));
        list.add(new Book("제목5", "지은이5"));
        System.out.println(list);

        // 리스트 개수 얻기
        System.out.printf("총 %d 권의 책이 존재합니다. %n%n", list.size()); // list.size() 반환값은 int 형

        // 특정 인덱스 객체 가져오기
        Book thirdBook = list.get(2);
        System.out.println("thirdBook = " + thirdBook);
        System.out.println();

        // 특정 객체 삭제
        list.remove(2);
        list.remove(2);

        // 반복문으로 ArrayList 순회
        for(Book b : list) {
            System.out.println("b = " + b);
        }
        System.out.println();

        // 모든 객체 삭제
        System.out.println("list 비어잇냥? " + list.isEmpty()); // f
        checkIfEmpty(list); // f
        list.clear();
        checkIfEmpty(list); // t
        System.out.println("list = " + list);
    }

    private static void checkIfEmpty(List<?> lists) {
        System.out.println("list 가 비어있나요? " + lists.isEmpty());
    }
}
