package codingon.exam_jpa.controller;

import codingon.exam_jpa.dto.BoardDTO;
import codingon.exam_jpa.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boards")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping
    public List<BoardDTO> listBoards() {
        return boardService.getAllBoards();
    }

    @GetMapping("/{id}")
    public BoardDTO getBoard(@PathVariable Long id) {
        return boardService.getBoardById(id);
    }

    @PostMapping()
    public BoardDTO createBoard(@RequestBody BoardDTO boardDTO) {
        boardService.createBoard(boardDTO);
        return boardDTO;
    }

    @PutMapping("/{id}")
    public BoardDTO updateBoard(@PathVariable Long id, @RequestBody BoardDTO boardDTO) {
        boardService.updateBoard(id, boardDTO);
        return boardDTO;
    }

    @DeleteMapping("/{id}")
    public void deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
    }

    /////////////////////////////////////////////////////////////////////
    // 1. 작성자 이름으로 n 명 조회
    @GetMapping("/byWriter")
    public List<BoardDTO> getBoardByWriter(@RequestParam String writer) {
        return boardService.getBoardByWriter(writer);
    }
}
