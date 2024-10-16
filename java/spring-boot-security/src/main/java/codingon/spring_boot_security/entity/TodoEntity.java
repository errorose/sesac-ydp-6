package codingon.spring_boot_security.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Todo")
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 1씩 자동 증가
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name="userId", nullable = false)
    private String userId;

    @Column(name="title", nullable = false)
    private String title;

    @Column(name="done", nullable = false)
    private boolean done;
}
