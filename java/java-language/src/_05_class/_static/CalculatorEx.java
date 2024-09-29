package _05_class._static;

public class CalculatorEx {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;
        double circleArea = 10 * 10 * Calculator.pi;
        int plusResult = Calculator.plus(num1, num2);
        int minusResult = Calculator.minus(num1, num2);

        System.out.println(circleArea);
        System.out.println(plusResult);
        System.out.println(minusResult);
    }
}