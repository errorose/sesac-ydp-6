package _05_class._interface._02;

interface Move {
    void moveForward();
    void moveBackward();
}

interface Power {
    void powerOn();
    void powerOff();
}

// 인터페이스는 인터페이스를 상속받을 수 있으며, "다중 상속" 가능
interface Car extends Move, Power {
    void changeGear(int gear);
}

class Suv implements Car {
    @Override
    public void changeGear(int gear) { System.out.println("기어 변경: " + gear); }

    @Override
    public void moveForward() { System.out.println("전진"); }

    @Override
    public void moveBackward() { System.out.println("후진"); }

    @Override
    public void powerOn() { System.out.println("시동 ON"); }

    @Override
    public void powerOff() { System.out.println("시동 OFF"); }
}

public class InterfaceEx01 {
    public static void main(String[] args) {
        Suv mySuv = new Suv();
        mySuv.powerOn();
        mySuv.changeGear(5);
        mySuv.moveForward();
    }
}