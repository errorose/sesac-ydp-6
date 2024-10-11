package codingon.spring_boot_mybatis.service;

import codingon.spring_boot_mybatis.domain.User;
import codingon.spring_boot_mybatis.dto.UserDTO;
import codingon.spring_boot_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service // 이 클래스가 서비스 계층의 컴포넌트임을 나타냄
public class UserService {
    // UserMapper 인터페이스의 구현체를 자동으로 주입받음
    @Autowired
    private UserMapper userMapper;

    // 모든 사용자의 정보를 UserDTO 리스트로 반환
    public List<UserDTO> getAllUsers() {
        // 1) 모든 domain.User 객체 가져옴
        List<User> users = userMapper.findAll(); // 서비스 계층 -> 매퍼 계층 으로 요청 날라감

        // 2) 새로운 DTO 객체 생성
        List<UserDTO> userDTOs = new ArrayList<>();

        // 3) 반복문을 이용해 각 User 객체를 UserDTO 로 변환하고 리스트에 추가
        for(User user : users) {
            UserDTO userDTO = convertToDto(user);
            userDTOs.add(userDTO);
        }

        // 4) UserDTO 리스트 반환
        return userDTOs;
    }

    // domain to dto
    private UserDTO convertToDto(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setNo((int) (user.getId() + 100));

        return dto;
    }
}
