package codingon.exam_mybatis.service;

import codingon.exam_mybatis.domain.User;
import codingon.exam_mybatis.dto.UserDTO;
import codingon.exam_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public List<UserDTO> getAllUsers() {
        List<User> users = userMapper.findAll();
        List<UserDTO> userDTOs = new ArrayList<>();

        for(User user : users) {
            UserDTO userDTO = convertToDto(user);
            userDTOs.add(userDTO);
        }
        return userDTOs;
    }

    private UserDTO convertToDto(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setNo((int) (user.getId() + 100));
        return dto;
    }
}
