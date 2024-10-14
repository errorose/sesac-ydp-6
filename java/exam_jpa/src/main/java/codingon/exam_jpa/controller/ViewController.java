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
}
