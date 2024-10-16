package codingon.exam_jpa.repository;

import codingon.exam_jpa.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository // 해당 인터페이스가 Repository 컴포넌트임을 명시
public interface BoardRepository extends JpaRepository<Board, Long> {
    // ㄴ JpaRepository<Board, Long> 을 상속받아 기본적인 CRUD 작업을 위한 메서드들을 제공 받음
    // ex. findAll(), findById(), save(), deleteById(), ... 등

    // JpaRepository<Board, Long> 의미
    // 제네릭 첫번째 타입: 관련 테이블
    // 제네릭 두번째 타입: 관련 테이블 PK 의 타입

    // 1. 작성자 이름으로 n 명 조회
    @Query("SELECT b FROM Board b WHERE b.writer = :writer")
    // - Board: entity 이름
    // - @Param: 해당 어노테이션을 이용해 파라미터 바인딩
    List<Board> findByWriter(@Param("writer") String writer);
}
