package _02_control_statement;

public class MethodOverloadingExam {
    public static void main(String[] args) {
        // 메소드 오버로딩 실습
        MethodOverloadingExam ol = new MethodOverloadingExam(); // 객체 생성

        int radius = 5;
        int rectangleX = 4;
        int rectangleY = 7;
        int triangleX = 6;
        int triangleY = 3;
        int triangleZ = 2;

        System.out.printf("반지름이 %d인 원의 넓이 : %f\n", radius, ol.result(radius));
        System.out.printf("가로 %d, 세로 %d인 직사각형의 넓이 : %.1f\n", rectangleX, rectangleY, ol.result(rectangleX, rectangleY));
        System.out.printf("밑변 %d, 높이 %d인 삼각형의 넓이 : %.1f\n", triangleX, triangleY, ol.result(triangleX, triangleY, triangleZ));
    }
    // 메소드
    public double result(double x){
        return Math.PI * (x * x);
    }
    public double result(double x, double y){
        return x * y;
    }
    public double result(double x, double y, double z){
        return (x * y) / z;
    }
}
