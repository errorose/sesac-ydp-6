package _07_generic;

// 참고. Number 클래스
// - Java 에서 모든 숫자 자료형의 부모 클래스
// - 정수형, 실수형 모두 포함
// ex. Byte, Short, Integer, Long, Float, Double, Number 를 상속한 클래스만 허용

import _05_class._access_modifier._pack1.B;

// 제네릭 제한 case1
// - Box 클래스는 제네릭 타입 T를 받지만, 제한을 두어 Number 를 상속한 클래스만 허용
class Box<T extends Number> {
    private T item;
    public void setItem(T item) { this.item = item; }
    public T getItem() { return item; }
}

interface Movable {
    void move();
}

class Car implements Movable {
    @Override
    public void move() { System.out.println("자동차 출발"); }
}

class Bicycle implements Movable {
    @Override
    public void move() { System.out.println("자전거 출발"); }
}

// 제네릭 제한 case2
// - Container 클래스는 제네릭 타입 T 를 받지만, 제한을 두어 Movable 인터페이스를 구현한 클래스만 허용
// - makeItMove 메서드는 해당 객체의 move 메서드를 호출
class Container<T extends Movable> {
    private T item;
    public Container(T item) { this.item = item; }
    public void makeItMove() { item.move(); }
}

public class GenericEx2 {
    public static void main(String[] args) {
        // x: Box 클래스의 제한에 어긋남 (제네릭 타입에 Number 를 상속받지 않는 타입을 사용 중)
        //        Box<String> strBox = new Box<>();

        Box<Double> doubleBox = new Box<>();
        doubleBox.setItem(3.141592);
        Double doubleValue = doubleBox.getItem();
        System.out.println("doubleValue = " + doubleValue);

        Box<Integer> integerBox = new Box<>();
        integerBox.setItem(1000);
        Integer integerValue = integerBox.getItem();
        System.out.println("integerValue = " + integerValue);

        Box<Short> shortBox = new Box<>();
        // Java 에서 정수 리터럴 기본적으로 int 로 간주됨.
        // 만약, 100이라는 short 형 정수를 인자로 넘기고 싶다면, 명시적으로 short 형으로 변환해야 함.
        shortBox.setItem((short) 100);
        Short shortValue = shortBox.getItem();
        System.out.println("shortValue = " + shortValue);

        // 퀴즈. 이 코드에서 빨간 밑줄 왜 뜰까?
        // Container 클래스의 생성자에서 item 이라는 인수를 받는거로 정의 되어 있는데, 인스턴스 생성 시 인수 전달이 안되었음
        Container<Car> carContainer = new Container<>(new Car());
        carContainer.makeItMove();

        Container<Bicycle> bicycleContainer = new Container<>(new Bicycle());
        bicycleContainer.makeItMove();

    }
}