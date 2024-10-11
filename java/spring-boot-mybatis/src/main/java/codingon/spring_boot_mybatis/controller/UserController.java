package codingon.spring_boot_mybatis.controller;

import codingon.spring_boot_mybatis.dto.UserDTO;
import codingon.spring_boot_mybatis.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // RESTful 웹 서비스의 컨트롤러
// - 해당 클래스의 모든 메서드의 반환 값이 자동으로 JSON 형식으로 변환되어 HTTP 응답 본문에 포함
@RequestMapping("/api/users") // 기본 경로 지정
public class UserController {

    // UserService 의존성을 자동 주입
    @Autowired
    private UserService userService;

    // 모든 사용자 정보를 리스트로 반환
    @GetMapping
    public List<UserDTO> listUsers() {
        return userService.getAllUsers();
    }
}