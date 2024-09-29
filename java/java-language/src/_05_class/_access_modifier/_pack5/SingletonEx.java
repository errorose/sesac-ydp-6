package _05_class._access_modifier._pack5;

public class SingletonEx {
    public static void main(String[] args) {
//        Singleton s1 = new Singleton();
        // Singleton 클래스의 생성자가 private 이므로 compile error

        // 정적 메소드 호출로 싱글톤 객체 얻음
        Singleton s2 = Singleton.getInstance();
        Singleton s3 = Singleton.getInstance();

        // 동일한 객체란? "참조"가 동일하다!
        if (s2 == s3) {
            System.out.println("같은 Singleton 객체");
            System.out.println(s2);
            System.out.println(s3);
        } else {
            System.out.println("다른 Singleton 객체");
        }

    }
}