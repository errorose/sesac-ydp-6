package codingon.exam_mybatis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 템플릿 엔진을 렌더링하는 코드들
@Controller
public class ViewController {

    // GET / 요청시 /users 경로로 리다이렉트
    @GetMapping("/")
    public String redirectToUsers() {
        return "redirect:/users";
    }

    // GET /users 요청시 userList.html 템플릿 뷰 반환
    @GetMapping("/users")
    public String listUsers() {
        return "userList";
    }
}
