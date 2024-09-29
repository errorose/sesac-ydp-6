package _05_class._final;

public class Student {
    // final 필드
    final String campus = "영등포"; // 1. 필드 선언 시 초기화
    final String sid; // 2. 생성자에서 초기화

    // instance 필드
    String name;

    public Student(String sid, String name) {
        this.sid = sid;
        this.name = name;
    }
}