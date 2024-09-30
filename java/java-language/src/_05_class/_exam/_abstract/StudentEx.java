package _05_class._exam._abstract;

public class StudentEx {
    public static void main(String[] args) {
        Kim kim = new Kim("김철수", "ABC", 17, 20220001);
        Baek baek = new Baek("박영희", "XYZ", 18, 20220002);

        info(kim);
        info(baek);
    }

    public static void info(Student student) {
        System.out.println("=== " + student.name + " 학생의 정보" + " ===");
        System.out.println("학교 : " + student.school + " 고등학교");
        System.out.println("나이 : " + student.age);
        System.out.println("학번 : " + student.student_ID);
        student.todo();
        System.out.println();
    }
}
