package _05_class._exam;

import java.util.Scanner;

public class CircleEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("원의 반지름을 입력하세요.");
        int radius = sc.nextInt();

        Circle c = new Circle(radius);
        System.out.println("원의 반지름 : " + radius);
        System.out.println("원의 넓이 : " + c.calculagteArea());

        sc.close();
    }
}
