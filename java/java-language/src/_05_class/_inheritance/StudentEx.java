package _05_class._inheritance;

public class StudentEx {
    public static void main(String[] args) {
        Student std1 = new Student("김새싹", 20);

        // case1. 부모/자식 클래스의 필드가 public
//        System.out.println(std1.name);
//        System.out.println(std1.age);
//        System.out.println(std1.campus); // campus 필드는 setter 를 이용해야만 추가되게끔 코드가 작성됨
//
//        // Person 으로부터 상속받은 메소드 호출
//        std1.say();
//        std1.eat("바나나");
//
//        // Student 메소드 호출
//        std1.setCampus("새싹 영등포");
//        System.out.println(std1.campus);

        // case2. 부모/자식 클래스의 필드가 private
        System.out.println(std1.getName());
        System.out.println(std1.getAge());
        System.out.println(std1.getCampus());

        // Person 으로부터 상속받은 메소드 호출
        std1.say();
        std1.eat("바나나");

        // Student 메소드 호출
        std1.setCampus("새싹 영등포");
        System.out.println(std1.getCampus());

    }
}