package _10_others_builder;

public class Main {
    public static void main(String[] args) {
        // 빌더 패턴을 안쓰고 생성자를 통해 객체 생성시 예시
        // Student std = new Student("John", 10, 1, "LA");

        Computer basicComputer = new Computer.ComputerBuilder("Intel i5")
                .setRam(8)
                .setStorage(256)
                .build();
        System.out.println("basicComputer = " + basicComputer);

        Computer gamingComputer = new Computer.ComputerBuilder("AMD Ryzen 7")
                .setStorage(1000)
                .setRam(32)
                .setGpu("NVIDIA RTX 3080")
                .build();
        System.out.println("gamingComputer = " + gamingComputer);
    }
}

// Builder 패턴
// - 객체 생성을 직관적이고 안전하게 만들얼주는 디자인 패턴
// - Lombok 라이브러리의 @Builder 어노테이션을 이용하면 자동으로 Builder 클래스를 생성해줌

// 장점
// 1. 가독성 향상
// 2. 유연성: 필요한 데이터만 선택적으로 설정
// 3. 불변성: 객체 생성 후에 변경할 수 없게 만듬
// 4. 매개변수 순서 문제 해결: 생성자의 매개변수 순서를 기억할 필요가 없다!
