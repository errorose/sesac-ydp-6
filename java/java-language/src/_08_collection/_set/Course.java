package _08_collection._set;

import java.util.Objects;

public class Course {
    private int id;
    private String title;

    public Course(int id, String title) {
        this.id = id;
        this.title = title;
    }

    // 오버라이드한 hashCode() 메서드
    // - id, title 값이 같으면 동일한 hashCode 리턴됨
    // 참고. hashCode 란?
    // - 객체의 메모리 주소를 기반으로 한 정수 값의 해시 코드
    // - hashCode(): Object 클래스에 정의되어 있으며, 객체의 해시 코드를 반환하는 역할
    // => 해당 클래스에서 객체 내부 상태를 기반으로 한 고유의 해시 코드를 커스터마이징한 것임!!
    @Override
    public int hashCode() {
        // title 은 String 이므로 (reference type) hashCode() 사용
        // id 는 int 이므로 정수값의 해시 코드에 더하기 연산
        return title.hashCode() + id;
    }

    // id, title 값이 같으면 true 리턴
    @Override
    public boolean equals(Object o) {
        if (o instanceof Course target) {
            // instanceof 키워드
            // - 문법: object instanceof Type
            // - object 는 "검사할 객체", Type 은 "비교할 클래스/인터페이스"
            // - 객체의 타입을 확인하는데에 사용되는 키워드

            // `o instanceof Course target`
            // - o 변수를 Course 타입으로 캐스팅(형변환) 해서 target 변수 할당

            // id 는 int 이므로 == 으로 내용 비교
            // title 은 String 이므로 equals() 로 내용 비교
            return target.id == id && target.title.equals(title);
        } else {
            return false;
        }
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", title='" + title + '\'' +
                '}';
    }
}