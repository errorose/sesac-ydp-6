package codingon.exam_jpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    // GET / 요청시 /boards 경로로 리다이렉트
    @GetMapping("/")
    public String redirectToBoards() {
        return "redirect:/boards";
    }

    // GET /boards 요청시 boardList.html 템플릿 뷰 반환
    @GetMapping("/boards")
    public String listBoards() {
        return "boardList";
    }

    // GET /boards/new 요청시 boardForm.html 템플릿 뷰 반환 ("새 게시글 생성")
    @GetMapping("/boards/new")
    public String newBoardForm() {
        return "boardForm";
    }

    // GET /boards/{id}/edit 요청시 boardForm.html 템플릿 뷰 반환 ("기존 게시글 수정")
    @GetMapping("/boards/{id}/edit")
    public String editBoardForm() {
        return "boardForm";
    }
}

