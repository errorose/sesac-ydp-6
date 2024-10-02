package _08_collection._exam;

import java.util.*;
import java.util.Map.Entry;

public class CollectionEx2 {
    public static void main(String[] args) {
        Map<String, Integer> mapList = new HashMap<>();

        Scanner sc = new Scanner(System.in);
        System.out.println("이름과 나이를 입력하세요. '종료'를 입력하면 종료됩니다.");

        while (true) {
            System.out.println("이름 입력: ");
            String name = sc.nextLine();

            if(name.equals("종료")) {
                break;
            }

            System.out.println("나이 입력: ");
            int age = sc.nextInt();
            sc.nextLine();

            mapList.put(name, age);
        }
        System.out.println("== 입력 받은 이름과 나이 목록 ==");

        Set<Entry<String, Integer>> entrySet = mapList.entrySet();

        Iterator<Entry<String, Integer>> entryIterator = entrySet.iterator();
        while (entryIterator.hasNext()) {
            Entry<String, Integer> entry = entryIterator.next();
            String k = entry.getKey();
            Integer v = entry.getValue();
            System.out.printf("이름: %s, 나이: %d %n", k, v);
        }

        sc.close();
    }
}
