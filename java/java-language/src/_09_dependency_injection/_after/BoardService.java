package _09_dependency_injection._after;

public class BoardService {
    // 1. 생성자를 이용한 의존성 주입
//    private final IBoardPersistence persistence; // 인터페이스 타입
//
//    public BoardService(IBoardPersistence persistence) {
//        this.persistence = persistence;
//    }

    // 2. setter 를 이용한 의존성 주입
    private IBoardPersistence persistence;

    public void setIBoardPersistence(IBoardPersistence persistence) {
        this.persistence = persistence;
    }

    public void save() {
        persistence.save();
    }

    public void delete() {
        persistence.delete();
    }
}
