package _05_class._exam._abstract;

// 추상클래스 실습
public abstract class Student {
    // 필드 선언
    String name;
    String school;
    int age;
    int student_ID;

    // 생성자 선언
    public Student(String name, String school, int age, int student_ID) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.student_ID = student_ID;
    }

    // 추상 메소드 선언
    abstract void todo();
}
