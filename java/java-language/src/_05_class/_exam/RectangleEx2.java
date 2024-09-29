package _05_class._exam;

import java.util.ArrayList;
import java.util.Scanner;

public class RectangleEx2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Rectangle2> rect = new ArrayList<>();

        while (true){
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
            int width = sc.nextInt();
            int height = sc.nextInt();
            if(width == 0 && height == 0){
                break;
            }
            Rectangle2 r2 = new Rectangle2(width);
            r2.setHeight(height);
            rect.add(r2);
        }

        for(Rectangle2 r : rect){
            System.out.println("가로 길이는 : " + r.getWidth());
            System.out.println("세로 길이는 : " + r.getHeight());
            System.out.println("넓이는 : " + r.getArea());
            System.out.println("----------------------");
        }

        System.out.println("Rectangle 인스턴스의 개수는 : " + Rectangle2.getCount());
    }
}
