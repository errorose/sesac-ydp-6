package codingon.spring_boot_default.controller._02_restapi._exam;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GetController {
    @GetMapping("/introduce/{name}")
    public String getIntroduce(@PathVariable String name, Model model) {
        System.out.println("[GET] request path variable (name) = " + name);
        model.addAttribute("name", name);
        return "_02_restapi/_exam/res";
    }

    @GetMapping("/introduce2")
    public String getIntroduce2(@RequestParam(value = "name") String name,
                                @RequestParam(value = "age") int age, Model model) {
        System.out.println("[GET] request query string (name) = " + name);
        System.out.println("[GET] request query string (age) = " + age);

        model.addAttribute("name", name);
        model.addAttribute("age", age);

        return "_02_restapi/_exam/res2";
    }
}
