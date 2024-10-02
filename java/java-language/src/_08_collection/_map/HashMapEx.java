package _08_collection._map;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class HashMapEx {
    public static void main(String[] args) {
        // key (id, 정수형), value (name, 문자형) 인 HashMap 예제

        // Map 컬렉션 생성
        Map<Integer, String> map = new HashMap<>();

        // 객체 저장
        map.put(1001, "쿠로미");
        map.put(1002, "시나모롤");
        map.put(1003, "포차코");
        map.put(1004, "헬로키티");
        System.out.println("map = " + map);

        // 전체 객체 수
        System.out.printf("총 %d 명의 학생이 있습니다. %n%n", map.size());

        // key 로부터 value 얻기
        int key = 1003;
        String value = map.get(key);
        System.out.printf("%d 번에 해당하는 학생은 %s 입니다. %n%n", key, value);

        // entry: key 와 value 의 쌍
        // key 와 value 로 구성된 모든 Map.Entry 객체를 Set 에 담아서 리턴
        Set<Entry<Integer, String>> entrySet = map.entrySet();
        System.out.println("entrySet = " + entrySet);
        System.out.println();

        // Map 컬렉션 순회
        // - Map 에서는 직접 iterator 를 사용할 수 없지만, 다음과 같이 간접적으로 사용은 가능!
        Iterator<Entry<Integer, String>> entryIterator = entrySet.iterator();
        while(entryIterator.hasNext()) {
            Entry<Integer, String> entry = entryIterator.next();
            Integer k = entry.getKey();
            String v = entry.getValue();
            System.out.printf("%s 학생은 %d 번입니다. %n", v, k);
        }
        System.out.println();

        // key 만 Set 컬렉션으로 얻기
        Set<Integer>  keySet = map.keySet();
        System.out.println("keySet = " + keySet);

        // 주어진 키와 일치하는 entry 삭제
        String deletedValue = map.remove(key);
        System.out.printf("%s 학생이 삭제되었습니다. %n", deletedValue);
        System.out.printf("총 %d 명의 학생이 있습니다. %n%n", map.size());

    }
}