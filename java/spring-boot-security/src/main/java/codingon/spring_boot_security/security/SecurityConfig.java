package codingon.spring_boot_security.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

// Password 객체를 bean 으로 생성
// 장점
// - 애플리케이션 전체에서 일관된 PasswordEncoder 사용 가능
// - "의존성 주입" 용이
// - 구현체 쉽게 변경 가능
// 따라서, Spring 의존성 주입을 통해 관리할 수 있고, 싱글톤 패턴을 따르므로 메모리 사용 최적화
