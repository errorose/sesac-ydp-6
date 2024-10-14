package codingon.exam_mybatis.controller;

import codingon.exam_mybatis.dto.BoardDTO;
import codingon.exam_mybatis.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // RESTful 웹 서비스의 컨트롤러
// - 해당 클래스의 모든 메서드의 반환 값이 자동으로 JSON 형식으로 변환되어 HTTP 응답 본문에 포함
@RequestMapping("/api/boards") // 기본 경로 지정
public class BoardController {

    // BoardService 의존성을 자동 주입
    @Autowired
    private BoardService boardService;

    // 작성자로 조회한 게시글 정보를 리스트로 반환 (쿼리 파라미터로 받음)
    @GetMapping
    public List<BoardDTO> listBoards(@RequestParam(value = "writer", required = false) String writer) {
        if (writer != null && !writer.isEmpty()) {
            // 작성자가 있으면 해당 작성자의 게시글 조회
            return boardService.getWriterBoard(writer);
        } else {
            // 작성자가 없으면 모든 게시글 조회
            return boardService.getAllBoard();
        }
    }

    // 특정 ID 의 게시글 정보 반환
    @GetMapping("/{id}")
    public BoardDTO getBoard(@PathVariable int id) { return boardService.getBoardById(id); }

    // 새 게시글 생성하고 생성된 게시글 정보 반환
    @PostMapping
    public BoardDTO createBoard(@RequestBody BoardDTO boardDTO) {
        boardService.createBoard(boardDTO);
        return boardDTO;
    }

    // 특정 ID 의 게시글 정보를 업데이트하고 업데이트된 정보를 반환
    @PutMapping("/{id}")
    public BoardDTO updateBoard(@PathVariable int id, @RequestBody BoardDTO boardDTO) {
        boardDTO.setId(id);
        boardService.updateBoard(boardDTO);
        return boardDTO;
    }

    // 특정 ID 의 게시글 삭제
    @DeleteMapping("/{id}")
    public void deleteBoard(@PathVariable int id) { boardService.deleteBoard(id); }
}
