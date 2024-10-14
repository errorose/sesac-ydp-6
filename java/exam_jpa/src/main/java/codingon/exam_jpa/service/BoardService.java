package codingon.exam_jpa.service;

import codingon.exam_jpa.dto.BoardDTO;
import codingon.exam_jpa.entity.Board;
import codingon.exam_jpa.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    // 모든 게시글 정보를 BoardDTO 리스트로 반환
    public List<BoardDTO> getAllBoards() {
        // 1. Repository 계층에서 모든 Board 리스트 가져옴.
        List<Board> boards = boardRepository.findAll();

        // 2. 새로운 DTO 객체 리스트 생성
        List<BoardDTO> boardDTOS = new ArrayList<>();

        // 3. 반복문을 이용해 Board 객체를 BoardDTO 객체로 변환하고 리스트에 추가
        for (Board board : boards) {
            BoardDTO boardDTO = convertToDTO(board);
            boardDTOS.add(boardDTO);
        }
        return boardDTOS;
    }

    // 특정 ID 의 게시글 정보를 BoardDTO 로 반환
    public BoardDTO getBoardById(Long id) {
        // JPA 가 기본 제공하는 findById 메서드로 특정 게시글을 찾으면
        // 그 Board 객체를 반환함
        // 만약, 게시글을 찾지 못하면 null 반환
        Board board = boardRepository.findById(id).orElse(null);
        if (board == null) {
            throw new RuntimeException("Board not found");
        }
        return convertToDTO(board);
    }

    // entity(domain) to dto
    private BoardDTO convertToDTO(Board board) {
        // builder 패턴을 이용해 dto 객체 생성
        return BoardDTO.builder()
                .no((int) (board.getId() + 100))
                .id(board.getId())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .build();
    }
}
