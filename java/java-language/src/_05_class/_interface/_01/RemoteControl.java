package _05_class._interface._01;

// interface 선언
public interface RemoteControl {
    // 추상 메서드 선언
    // - 실행부({})가 없는 메서드
    public void turnOn();
    public void turnOff();
    public void setVolume(int volume);

    // 상수 필드
    // - 인터페이스에 선언된 필드는 모두 "public static final" 특성을 갖기 때문에 생략하더라도 컴파일 과정에서 자동으롭 붙음
    // - 상수명은 대문자로 작성하되, 여러 단어로 연결되어 있다면 언더스코어(_)로 연결
    int MAX_VOLUME = 10;
    int MIN_VOLUME = 0;
}