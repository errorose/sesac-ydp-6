package _05_class;

public class StudentEx {
    public static void main(String[] args) {
        // new 키워드를 이용해 s1 객체를 생성
        Student s1 = new Student("쿠로미", 1); // s1 변수가 Student 객체 참조

        // Student 클래스에 toString() 메서드가 오버라이드 x; 참조값 출력
        // Student 클래스에 toString() 메서드가 오버라이드 o; 해당 메서드의 return 값 출력
        System.out.println("s1= " + s1);

        // 메서드 사용
        s1.goToSchool();
        s1.study("Java 프로그래밍");
        System.out.println(s1.getGrade() + "학년");
        System.out.println(s1.getTestResult(90));

        Student s2 = new Student("시나모롤2", 2);
        System.out.println("s2= " + s2); // s2 변수가 Student 객체 참조
    }
}
