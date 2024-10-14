package codingon.exam_mybatis.service;

import codingon.exam_mybatis.domain.Board;
import codingon.exam_mybatis.dto.BoardDTO;
import codingon.exam_mybatis.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service // 이 클래스가 서비스 계층의 컴포넌트임을 나타냄
public class BoardService {
    // BoardMapper 인터페이스의 구현체를 자동으로 주입받음
    @Autowired
    private BoardMapper boardMapper;

    // 모든 게시글의 정보를 BoardDTO 리스트로 반환
    public List<BoardDTO> getAllBoard() {
        // 1) 모든 domain.Board 객체 가져옴
        List<Board> boards = boardMapper.findAll(); // 서비스 계층 -> 매퍼 계층 으로 요청

        // 2) 새로운 DTO 객체 생성
        List<BoardDTO> boardDTOS = new ArrayList<>();

        // 3) 반복문을 이용해 각 Board 객체를 BoardDTO 로 변환하고 리스트에 추가
        for(Board board : boards) {
            BoardDTO boardDTO = convertToDto(board);
            boardDTOS.add(boardDTO);
        }

        // 4) BoardDTO 리스트를 반환
        return boardDTOS;
    }

    // 작성자로 게시글 조회
    public List<BoardDTO> getWriterBoard(String writer) {
        // 1) 작성자로 게시글 목록 가져오기
        List<Board> boards = boardMapper.findByWriter(writer);

        // 2) 새로운 DTO 객체 리스트 생성
        List<BoardDTO> boardDTOS = new ArrayList<>();

        // 3) 반복문을 이용해 각 Board 객체를 BoardDTO 로 변환하고 리스트에 추가
        for(Board board : boards) {
            BoardDTO boardDTO = convertToDto(board);
            boardDTOS.add(boardDTO);
        }

        // 4) 변환된 DTO 리스트 반환
        return boardDTOS;
    }

    // 특정 ID 의 게시글 정보를 BoardDTO 로 반환 (수정시 게시글 정보 조회)
    public BoardDTO getBoardById(int id) {
        Board board = boardMapper.findById(id);
        return convertToDto(board);
    }

    // 새 게시글 생성
    public void createBoard(BoardDTO boardDTO) {
        Board board = convertToEntity(boardDTO);
        boardMapper.insert(board);
    }

    // 게시글 정보 업데이트
    public void updateBoard(BoardDTO boardDTO) {
        Board board = convertToEntity(boardDTO);
        boardMapper.update(board);
    }

    // 특정 ID 의 게시글 삭제
    public void deleteBoard(int id) { boardMapper.delete(id); }

    // dto to domain
    private Board convertToEntity(BoardDTO dto) {
        Board board = new Board();
        board.setId(dto.getId());
        board.setWriter(dto.getWriter());
        board.setTitle(dto.getTitle());
        board.setContent(dto.getContent());

        return board;
    }

    // domain to dto
    private BoardDTO convertToDto(Board board) {
        BoardDTO dto = new BoardDTO();
        dto.setId(board.getId());
        dto.setTitle(board.getTitle());
        dto.setContent(board.getContent());
        dto.setWriter(board.getWriter());
        dto.setNo("board" + board.getId());

        return dto;
    }
}
