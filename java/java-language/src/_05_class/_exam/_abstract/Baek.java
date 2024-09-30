package _05_class._exam._abstract;

public class Baek extends Student {
    public Baek(String name, String school, int age, int student_ID) {
        super(name, school, age, student_ID);
    }
    // 추상 메소드
    @Override
    void todo() {
        System.out.println("점심은 백종원 피자");
    }
}
