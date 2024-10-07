package codingon.spring_boot_default.controller._02_restapi._exam;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PostController {
    @GetMapping("/post")
    public String getIntroducePage() {
        return "_02_restapi/_exam/req";
    }

    @PostMapping("/post/introduce")
    public String postIntroduce(@RequestParam String name,
                                @RequestParam String gender,
                                @RequestParam String birth,
                                @RequestParam String like, Model model) {
        System.out.println("[POST] request param (name) = " + name );
        System.out.println("[POST] request param (gender) = " + gender );
        System.out.println("[POST] request param (birth) = " + birth );
        System.out.println("[POST] request param (like) = " + like );
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("birth", birth);
        model.addAttribute("like", like);
        return "_02_restapi/_exam/res3";
    }
}
