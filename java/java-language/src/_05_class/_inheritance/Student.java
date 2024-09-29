package _05_class._inheritance;

public class Student extends Person {
    // case1. public 필드
    /*
    public String campus;

    // 생성자
    public Student(String name, int age) {
        // 1-1. 기본 생성자
//        //        super(); // 생략 가능 (컴파일 시 자동 추가) -> 부모 생성자 호출
//        System.out.println("자식 클래스 Student(String name, int age) 생성자 호출");
//
//        // 부모로부터 상속받은 필드 값 할당
//        this.name = name;
//        this.age = age;

        // 1-2. "매개변수를 갖는" 생성자
        super(name, age);
        System.out.println("자식 클래스 Student(String name, int age) 생성자 호출");
    }

    // 메서드
    public void setCampus(String campus) {
        this.campus = campus;
        System.out.println(campus + "캠퍼스에서 공부중!");
    }
     */

    // case2. private 필드
    private String campus;

    public Student(String name, int age) {
        // 부모로부터 상속받은 필드에 값 할당
        // : private 필드니까 직접 할당이 아닌 setter 이용
        setName(name);
        setAge(age);
    }

    public String getCampus() {
        return campus;
    }

    public void setCampus(String campus) {
        this.campus = campus;
        System.out.println(campus + "캠퍼스에서 공부 중");
    }
}