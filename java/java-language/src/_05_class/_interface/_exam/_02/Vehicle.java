package _05_class._interface._exam._02;

public abstract class Vehicle {
    // 필드
    String name;
    int maxSpeed;

    // getter & setter
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getMaxSpeed() {
        return maxSpeed;
    }
    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    // 추상 메서드
    abstract void move();
}
