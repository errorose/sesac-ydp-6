package codingon.exam_mybatis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 템플릿 엔진을 렌더링하는 코드들
@Controller
public class ViewController {

    // GET / 요청시 /boards 경로로 리다이렉트
    @GetMapping("/")
    public String redirectBoards() {
        return "redirect:/boards";
    }

    // GET /boards 요청시 boardList.html 템플릿 뷰 반환
    @GetMapping("/boards")
    public String listBoards() {
        return "boardList";
    }

    // GET /boards/new 요청시 boardForm.html 템플릿 뷰 반환 ("새 유저 생성")
    @GetMapping("/boards/new")
    public String newBoardForm() {
        return "boardForm";
    }

    // GET /boards/{id}/edit 요청시 boardForm.html 템플릿 뷰 반환 ("기존 게시글 정보 수정")
    @GetMapping("/boards/{id}/edit")
    public String editBoardForm() {
        return "boardForm";
    }
}
