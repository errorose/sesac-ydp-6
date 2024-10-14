package codingon.exam_mybatis.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoardDTO {
    private Long id;
    private String title;
    private String content;
    private String writer;
    private String no;
}

// dto.BoardDTO
// - 데이터 전송 객체(dto)로 클라이언트와 서버 간에 데이터 교환에 사용
// - 클라이언트한테 노출하고 싶지 않은 민감한 정보를 Board 객체에 포함시키고,
//      DTO 변환 과정에서 제외할 수도 있음

