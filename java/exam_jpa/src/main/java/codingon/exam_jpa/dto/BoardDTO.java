package codingon.exam_jpa.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private int no;
}
