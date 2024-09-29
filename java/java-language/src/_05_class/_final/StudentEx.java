package _05_class._final;

public class StudentEx {
    public static void main(String[] args) {
        Student std1 = new Student("s001", "쿠로미");
        System.out.println(std1.campus);
        System.out.println(std1.sid);
        System.out.println(std1.name);

        // 필드값 수정 시도
        // final 필드는 값 변경 불가능 (읽기 전용)
//        std1.campus = "마포";
//        std1.sid = "s002";

        // 인스턴스 필드는 변경 가능
        std1.name = "시나모롤";

    }
}
