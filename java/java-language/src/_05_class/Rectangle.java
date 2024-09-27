package _05_class;

public class Rectangle {
    // 필드
    public int width;
    public int height;

    // 생성자
    public Rectangle(int width, int height){
        this.width = width;
        this.height = height;
    }

    // 메소드
    public int rectangleArea(int width, int height){
        return this.width * this.height;
    }

    @Override
    public String toString() {
        return "Rectangle{" +
                "width=" + width +
                ", height=" + height +
                '}';
    }
}
