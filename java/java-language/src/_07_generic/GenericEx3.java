package _07_generic;

// 사람 객체간 상속 관계
// Person
// ㄴ Teacher
// ㄴ Student
//      ㄴ WebStudent
//      ㄴ MobileStudent
class Person {}
class Teacher extends Person {}
class Student extends Person {}
class WebStudent extends Student {}
class MobileStudent extends Student {}

// 등록
// - 특정 종류(T) Applicant 를 나타내는 클래스
class Applicant<T> {
    public T kind;
    public Applicant(T kind) { this.kind = kind; }
}

// 과정
class Course {
    // 모든 사람이면 등록 가능
    public static void registerA(Applicant<?> applicant) {
        System.out.println(applicant.kind.getClass().getSimpleName() + " 이(가) Course A 를 등록함");
    }

    // Student 객체만 등록 가능
    public static void registerB(Applicant<? extends Student> applicant) {
        System.out.println(applicant.kind.getClass().getSimpleName() + " 이(가) Course B 를 등록함");
    }

    // Teacher 나 Student 가 아닌 Person 만 등록 가능 (Teacher 본인 이거나 Teacher 위에 부모만 가능)
    public static void registerC(Applicant<? super Teacher> applicant) {
        System.out.println(applicant.kind.getClass().getSimpleName() + " 이(가) Course C 를 등록함");
    }

    // 참고. getClass(), getSimpleName()
    // - Object 클래스에서 제공되는 메서드
    // - getClass(): 객체 클래스 정보 반환, 반환 값은 클래스 객체 (ex. class java.lang.String)
    // - getSimpleName(): Class 클래스의 메소드 클래스의 간결한 이름 반환, 패키지 정보를 제외한 클래스 이름만 가져오고 싶을 때
}

public class GenericEx3 {
    public static void main(String[] args) {
        // Course A 는 누구나 신청 가능!
        Course.registerA(new Applicant<Person>(new Person()));
        Course.registerA(new Applicant<Teacher>(new Teacher()));
        Course.registerA(new Applicant<Student>(new Student()));
        Course.registerA(new Applicant<WebStudent>(new WebStudent()));
        Course.registerA(new Applicant<MobileStudent>(new MobileStudent()));

        // Course B 는 Student(Web, Mobile) 만 등록 가능!
//        Course.registerB(new Applicant<Person>(new Person())); // x
//        Course.registerB(new Applicant<Teacher>(new Teacher())); // x
        Course.registerB(new Applicant<Student>(new Student()));
        Course.registerB(new Applicant<WebStudent>(new WebStudent()));
        Course.registerB(new Applicant<MobileStudent>(new MobileStudent()));

        // Course C 는 Teacher 거나 Student 가 아닌 Person 만 등록 가능!
        Course.registerC(new Applicant<Person>(new Person()));
        Course.registerC(new Applicant<Teacher>(new Teacher()));
//        Course.registerC(new Applicant<Student>(new Student())); // x
//        Course.registerC(new Applicant<WebStudent>(new WebStudent())); // x
//        Course.registerC(new Applicant<MobileStudent>(new MobileStudent())); // x

        // 와일드 카드 주의사항
        // 1. 복잡성: 와일드카드를 과도하게 사용하면 복잡성이 증가, 협업에 알맞지 않음
        // 2. 제한된 작업: `? extends T` 같은 코드의 경우에는 새로운 요소 추가 불가능
    }
}