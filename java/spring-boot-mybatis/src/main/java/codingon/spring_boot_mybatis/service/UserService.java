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

    // 특정 ID 의 사용자 정보를 UserDTO 로 반환 (수정시 사용자 정보 조회)
    public UserDTO getUserById(Long id) {
        User user = userMapper.findById(id);
        return convertToDto(user);
    }

    // 새 사용자 생성
    public void createUser(UserDTO userDTO) {
        User user = convertToEntity(userDTO);
        userMapper.insert(user);
    }

    // 사용자 정보 업데이트
    public void updateUser(UserDTO userDTO) {
        User user = convertToEntity(userDTO);
        userMapper.update(user);
    }

    // 특정 ID 의 사용자 삭제
    public void deleteUser(Long id) {
        userMapper.delete(id);
    }

    // dto to domain (userDTO 를 User 객체로 변환)
    private User convertToEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());

        return user;
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

// 참고. domain.User 와 dto.UserDTO 를 서로 변환하는 이유
// - domain.User 는 데이터베이스 엔티티를 표현 (영속성 계층과 연관)
// - dto.UserDTO 는 클라이언트와 데이터 전송에 사용 (표현 계층과 연관)
//  DTO 를 사용 시 클라이언트의 요구사항에 맞춰서 데이터 구조를 쉽게 변경
//  필요한 데이터만 클라이언트에 전송하여 네트워크 부하를 줄일 수 있음
//  API 버전 관리 용이 (엔티티(도메인) 변경 시 DTO 를 통해 이전 버전과의 호환성 유지 가능)
