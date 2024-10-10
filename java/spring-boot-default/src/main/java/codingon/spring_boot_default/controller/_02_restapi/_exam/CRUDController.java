package codingon.spring_boot_default.controller._02_restapi._exam;

import codingon.spring_boot_default.dto._exam.UserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CRUDController {
    // 회원가입
    @GetMapping("/register")
    public String getRegister() { return "_02_restapi/_exam/crud_req"; }

    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody UserDTO userDTO, Model model) {
        System.out.println("[회원가입] userId = " + userDTO.getUserId());
        System.out.println("[회원가입] userPw = " + userDTO.getUserPw());
        System.out.println("[회원가입] userName = " + userDTO.getUserName());

        return userDTO.getUserName() + " 님 회원가입 성공!";
    }

    // 로그인
    @GetMapping("/login")
    public String getLogin() {  return "_02_restapi/_exam/crud_req"; }

    @PostMapping("/login")
    @ResponseBody
    public String postLogin(@RequestBody UserDTO userDTO) {
        String id = "kuromi";
        String pw = "1234";
        String name = "쿠로미";

        if(id.equals(userDTO.getUserId()) && pw.equals(userDTO.getUserPw())) {
            return name + " 님 로그인 성공!";
        } else {
            return "로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.";
        }
    }

    // 회원정보 수정
    @GetMapping("/patch")
    public String userPatchPage() { return "_02_restapi/_exam/crud_req"; }

    @PatchMapping("/patch")
    @ResponseBody
    public String userPatch(@RequestBody UserDTO userDTO) {
        String id = "kuromi";
        String name = "쿠로미";

        if(id.equals(userDTO.getUserId())) {
            return name + " 님의 정보가 수정되었습니다!";
        } else {
            return "회원정보 수정 실패: 아이디를 찾을 수 없습니다.";
        }
    }

    // 회원정보 삭제
    @GetMapping("/delete")
    public String getUserDelete(){ return "_02_restapi/_exam/crud_req"; }

    @DeleteMapping("/delete")
    @ResponseBody
    public String userDelete(@RequestBody UserDTO userDTO) {
        String id = "kuromi";

        if(id.equals(userDTO.getUserId())) {
            return userDTO.getUserId() + " 님의 정보가 삭제되었습니다!";
        } else {
            return "회원 정보 삭제 실패: 해당 아이디를 찾을 수 없습니다.";
        }
    }
}
