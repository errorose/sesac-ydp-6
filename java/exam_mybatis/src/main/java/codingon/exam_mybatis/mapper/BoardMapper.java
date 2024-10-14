package codingon.exam_mybatis.mapper;

import codingon.exam_mybatis.domain.Board;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {
    // case1. 어노테이션 기반 매퍼

    // case2. XML 기반 매퍼
    // - 복잡한 SQL 쿼리를 쉽게 관리
    // - 동적 SQL 작성 편리
    // - SQL 과 Java 코드를 분리하여 관리
    // - 대규모 프로젝트나 복잡한 데이터 조작 적합

    List<Board> findAll(); // 모든 게시글 조회
    List<Board> findByWriter(@Param("writer") String writer); // 작성자로 게시글 조회
    void insert(Board board); // 게시글 등록
    Board findById(Long id); // 수정시 게시글 정보 조회
    void update(Board board); // 게시글 수정
    void delete(Long id); // 게시글 삭제
}
