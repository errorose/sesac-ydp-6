package _05_class._abstract;

// 추상 클래스
// - 공통된 필드와 메소드 이름 통일
// - 실체 클래스 작성 시간 절약
public abstract class Shape {
    // 필드 선언
    String color;

    // 생성자 선언
    public Shape(String color) { this.color = color; }

    // 추상 메소드 선언 (abstract 키워드)
    // - 메소드의 선언부만 있는 메소드
    // - 자식 클래스에서 재정의되어 실행 내용 결정
    // - 모든 실체들이 갖는 메소드 실행 내용이 동일하다면, 추상 클래스의 메소드를 작성하는 것이 좋음 (해당 코드에서 start() 메서드)
    // - 메서드의 선언만 동일하고 실행 내용을 실체 클래스마다 달라야하는 경우가 있을 때,
    //      자식 클래스는 추상 메소드를 재정의해서 실행 내용을 작성해야하고, 그렇지 않으면 컴파일 에러!
    abstract void draw();

    // 일반 메소드
    void start() { System.out.println("도형을 그려보자~"); }

}