package _05_class._access_modifier._pack5;

public class Person {
    private int age;
    private String name;

    public Person(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        // age 필드는 음수가 될 수 없도록 설정
        if(age < 0){
            this.age = 0;
            return; // 함수 끝냄.
        }else{
            this.age = age;
        }
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }
}
