package _09_dependency_injection._after;

public class Main {
    public static void main(String[] args) {
//        IBoardPersistence persistence = new FileBoardPersistence();
        IBoardPersistence persistence = new DbBoardPersistence();
        // => 파일에서 데이터베이스로 기획이 변경되었는데, (즉, persistence 타입이 바뀜)
        // 서비스(BoardService) 코드를 변경하지 않아도 됨!!

        // 1. 생성자를 이용한 주입
//        BoardService service = new BoardService(persistence);

        // 2. setter 를 이용한 주입
        BoardService service = new BoardService();
        service.setIBoardPersistence(persistence);

        service.save();
        service.delete();
    }
}
