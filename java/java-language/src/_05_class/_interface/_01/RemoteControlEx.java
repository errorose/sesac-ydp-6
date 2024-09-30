package _05_class._interface._01;

public class RemoteControlEx {
    public static void main(String[] args) {
        // interface 도 하나의 타입이므로 변수 타입으로 사용 가능!!!
        // - interface 는 참조형이므로 null 값 대입 가능
        RemoteControl rc;

        // rc 변수에 Television 객체 대입
        rc = new Television();
        rc.turnOn();
        rc.setVolume(5);
        rc.turnOff();

        // rc 변수에 Audio 객체 대입 (교체 시킴)
        rc = new Television();
        rc.turnOn();
        rc.setVolume(15);
        rc.turnOff();
    }
}
