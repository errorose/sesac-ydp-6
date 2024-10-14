package codingon.exam_jpa.controller;

import codingon.exam_jpa.dto.BoardDTO;
import codingon.exam_jpa.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
