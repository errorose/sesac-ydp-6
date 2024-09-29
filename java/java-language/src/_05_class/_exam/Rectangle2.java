package _05_class._exam;

public class Rectangle2 {
    // 필드
    private int width;
    private int height;
    private static int count = 0;

    // 생성자
    public Rectangle2(int width){
        this.width = width;
        count++;
    }

    // getter / setter
    public int getWidth(){
        return width;
    }

    public void setWidth(int width){
        this.width = width;
    }

    public int getHeight(){
        return height;
    }

    public void setHeight(int height){
        this.height = height;
    }

    public int getArea(){
        return width * height;
    }

    public static int getCount(){
        return count;
    }
}
