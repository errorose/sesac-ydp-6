package _07_generic._exam;

class Calculator<T extends Number> {
    private T num1;
    private T num2;

    // 생성자
    public Calculator(T num1, T num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // add 메소드
    public double add() {
        return num1.doubleValue() + num2.doubleValue();
    }
}

public class CalculatorEx {
    public static void main(String[] args) {
        Calculator<Integer> integerCalculator = new Calculator<>(15, 0);
        System.out.println("Integer Sum : " + integerCalculator.add());

        Calculator<Double> doubleCalculator = new Calculator<>(3.14, 1.7);
        System.out.println("Double Sum : " + doubleCalculator.add());
    }
}
