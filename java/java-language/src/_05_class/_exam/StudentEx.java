package _05_class._exam;

import java.util.ArrayList;

// static 실습
public class StudentEx {
    public static void main(String[] args) {
        ArrayList<Student> std = new ArrayList<>();

        Student s1 = new Student("쿠로미", 20231001, 1);
        Student s2 = new Student("시나모롤", 20231002, 2);
        Student s3 = new Student("포차코", 20231003, 3);

        std.add(s1);
        std.add(s2);
        std.add(s3);

        for(Student s : std){
            s.displayInfo();
            System.out.println();
        }

        System.out.println("총 학생 수는 " + Student.getTotalStudents() + "명 입니다.");
    }
}
