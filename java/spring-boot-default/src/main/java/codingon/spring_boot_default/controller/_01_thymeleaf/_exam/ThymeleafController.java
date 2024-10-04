package codingon.spring_boot_default.controller._01_thymeleaf._exam;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ThymeleafController {
    @GetMapping("/exam")
    public String getAge(Model model) {
        model.addAttribute("age", 22);

        return "_01_thymeleaf/_exam/thymeleaf";
    }
}
