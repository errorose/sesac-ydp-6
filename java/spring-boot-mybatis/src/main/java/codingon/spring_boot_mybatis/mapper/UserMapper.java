package codingon.spring_boot_mybatis.mapper;

import codingon.spring_boot_mybatis.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper // 해당 인터페이스가 Mybatis mapper 임을 나타냄
public interface UserMapper {
    // case1. 어노테이션 기반 매퍼

    // case2. XML 기반 매퍼
    // - 복잡한 SQL 쿼리를 쉽게 관리
    // - 동적 SQL 작성 편리
    // - SQL 과 Java 코드를 분리하여 관리
    // - 대규모 프로젝트나 복잡한 데이터 조작 적합
    List<User> findAll();
}
