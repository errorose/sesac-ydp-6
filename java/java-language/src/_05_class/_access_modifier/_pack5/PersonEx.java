package _05_class._access_modifier._pack5;

public class PersonEx {
    public static void main(String[] args) {
        // 객체 생성
        Person p1 = new Person("Minion");
        Person p2 = new Person("Pooh");

//        p1.age = 4; // x: private field 는 직접 변겨ㅕㅇ 불가능
        p1.setAge(4); // o: setter 를 이용해 간접적으로 변경
        System.out.println(p1.getName() + " 의 나이 : " + p1.getAge());

        p2.setAge(-10); // age 필드는 음수인 경우, setAge 메소드 내부 로직에 의해 0으로 변경
        System.out.println(p2.getName() + " 의 나이 : " + p2.getAge());

    }
}
