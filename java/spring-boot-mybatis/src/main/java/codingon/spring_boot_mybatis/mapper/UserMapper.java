package codingon.spring_boot_mybatis.mapper;

import codingon.spring_boot_mybatis.domain.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper // 해당 인터페이스가 Mybatis mapper 임을 나타냄
public interface UserMapper {
    // case1. 어노테이션 기반 매퍼
    // - 간단한 쿼리의 경우 간결하게 표현 가능
    // - Java 코드 내에서 SQL 을 직접 볼 수 있어 즉각적인 이해 가능
    // - @Select, @Insert, @Update, @Delete 어노테이션 사용

    @Select("SELECT * FROM users")
    List<User> findAll();

    @Select("SELECT * FROM users WHERE id = #{id}")
    User findById(Long id);

    @Insert("INSERT INTO users (username, email) VALUES (#{username}, #{email})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
        // Insert 작업에 대한 추가 옵션 설정
        // - useGeneratedKeys = true; 데이터베이스에서 자동 생성되는 키 (auto-increment pk) 를 사용하겠다는 의미
        // - keyProperty = "id"; 생성된 키 값을 User 객체의 id 필드에 저장하겠다는 의미
        // -> insert 메서드 호출 후 전달된 User 객체의 id 필드는 데이터베이스에서 생성된 실제 id 값으로 업데이트
        //      이를 통해서 새로 삽입된 레코드(행) 의 ID를 즉시 알 수 있음, 이후 작업에 해당 id 를 사용 가능
        //      (새 레코드(행)에 삽입한 직후에 바로 그 id 가 필요한 경우가 있을수도 있음)
        // 만약, id(pk) 를 수동으로 설정한다면 Options 어노테이션은 필요 x
    void insert(User user);

    @Update("UPDATE users SET username = #{username}, email = #{email} WHERE id = #{id}")
    void update(User user);

    @Delete("DELETE FROM users WHERE id = #{id}")
    void delete(Long id);

    // case2. XML 기반 매퍼
    // - 복잡한 SQL 쿼리를 쉽게 관리
    // - 동적 SQL 작성 편리
    // - SQL 과 Java 코드를 분리하여 관리
    // - 대규모 프로젝트나 복잡한 데이터 조작 적합
//    List<User> findAll(); // 유저 리스트 전체 조회
//    User findById(Long id); // 수정시 유저 정보 조회
//    void insert(User user); // 유저 생성
//    void update(User user); // 유저 수정
//    void delete(Long id); // 유저 삭제
}
