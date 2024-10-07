package codingon.spring_boot_default.controller._02_restapi._exam;

import codingon.spring_boot_default.vo._exam.IntroduceVO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AxiosController {
    @GetMapping("/axios/vo")
    public String getIntroducePage() {
        return "_02_restapi/_exam/req2";
    }

    @PostMapping("/axios/vo/res")
    @ResponseBody
    public String postIntroduce(@RequestBody IntroduceVO introduceVO) {
        System.out.println("[POST] axios and vo (name) = " + introduceVO.getName());
        System.out.println("[POST] axios and vo (gender) = " + introduceVO.getGender());
        System.out.println("[POST] axios and vo (birth) = " + introduceVO.getBirth());
        System.out.println("[POST] axios and vo (like) = " + introduceVO.getLike());

        return introduceVO.getName() + " 회원가입 성공!";
    }
}
