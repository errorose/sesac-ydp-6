package codingon.spring_boot_default.controller._01_thymeleaf._exam;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.Arrays;

@Controller
public class ThymeleafController2 {
    @GetMapping("/people")
    public String getPeople(Model model) {
        ArrayList<Person> persons = new ArrayList<>();
        persons.add(new Person("kim", 10));
        persons.add(new Person("lee", 20));
        persons.add(new Person("hong", 30));
        persons.add(new Person("park", 40));
        persons.add(new Person("shin", 50));
        model.addAttribute("persons", persons);

        return "_01_thymeleaf/_exam/thymeleaf2";
    }

    class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }
        public int getAge() {
            return age;
        }
    }
}
