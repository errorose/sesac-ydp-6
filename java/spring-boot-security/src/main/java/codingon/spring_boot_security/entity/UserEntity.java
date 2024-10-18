package codingon.spring_boot_security.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="User", uniqueConstraints = {@UniqueConstraint(columnNames="email")})
// uniqueConstraints = {@UniqueConstraint(columnNames="email")})
// - email 필드에 unique 제약조건
// - unique 제약조건? 해당 테이블의 컬럼이 중복된 값을 허용하지 않음, pk 와 다른 점은 null 들어갈 수 있음
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", updatable = false)
    private Long id;

    @Column(name="username", updatable = false)
    private String username;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="password", nullable = false)
    private String password;
}