package _10_others_builder;


public class Computer {
    // 모든 필드를 private final 선언 (불변성 보장)
    private final String cpu;
    private final int ram;
    private final int storage;
    private final String gpu;

    // private 생성자: 외부에서 직접 호출 불가능
    private Computer(ComputerBuilder builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.gpu = builder.gpu;
    }

    // 내부 정적 클래스: public 선언 -> 외부에서 접근 가능
    public static class ComputerBuilder {
        private String cpu;
        private int ram;
        private int storage;
        private String gpu;

        // 객체 생성자 public
        // cpu 필드만 매개변수 받음 (cpu 필드 필수값)
        public ComputerBuilder(String cpu) {
            this.cpu = cpu;
        }

        // cpu 를 제외한 나머지 필드에 대한 setter
        // - this (자기자신, computer builder) 를 반환
        // -> 메서드 체이닝 가능
        public ComputerBuilder setRam(int ram) {
            this.ram = ram;
            return this;
        }

        public ComputerBuilder setStorage(int storage) {
            this.storage = storage;
            return this;
        }

        public ComputerBuilder setGpu(String gpu) {
            this.gpu = gpu;
            return this;
        }

        // 최종적으로 객체 생성
        public Computer build() {
            return new Computer(this);
        }
    }

    @Override
    public String toString() {
        return "Computer{" +
                "cpu='" + cpu + '\'' +
                ", ram=" + ram + "GB" +
                ", storage=" + storage + "GB" +
                ", gpu='" + gpu + '\'' +
                '}';
    }
}