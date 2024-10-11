package _09_dependency_injection._before;

public class Main {
    public static void main(String[] args) {
        BoardService service = new BoardService();
        service.save();
        service.delete();
    }
}
