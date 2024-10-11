package _09_dependency_injection._before;

// 게시판 목록을 관리하는 기능 제공
public class BoardService {
//    private final FileBoardPersistence persistence;
    private final DbBoardPersistence persistence;

    public BoardService() {
//        this.persistence = new FileBoardPersistence();
        this.persistence = new DbBoardPersistence();
    }

    public void save() {
        persistence.save();
    }

    public void delete() {
        persistence.delete();
    }
}
