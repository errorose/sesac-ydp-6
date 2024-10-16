package codingon.spring_boot_security.controller;

import codingon.spring_boot_security.dto.ResponseDTO;
import codingon.spring_boot_security.dto.TodoDTO;
import codingon.spring_boot_security.entity.TodoEntity;
import codingon.spring_boot_security.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private TodoService service;

    // ResponseEntity 란?
    // - 해당 객체를 이용해서 상태코드, 응답 본문등을 설정해 클라이언트 "응답"
    // 메서드
    // - ok(): 성공
    // - headers(): 응답 헤더 설정
    // - body(): 응답 본문 설정

    @PostMapping
    public ResponseEntity<?> createTodo(@RequestBody TodoDTO dto) {
        try {
            // 임시 유저 하드코딩
            String temporaryUserId = "temporary-user";

            // (1) dto to entity
            TodoEntity entity = TodoDTO.toEntity(dto);

            // (2) 생성 당시에는 id null 로 초기화
            entity.setId(null);

            // (3) 임시 유저 아이디 설정
            entity.setUserId(temporaryUserId);

            // (4) 서비스 계층을 이용해 todo 엔티티 생성
            List<TodoEntity> entities = service.create(entity);

            // (5) 리턴된 엔티티 리스트(추가된 행 하나)를 TodoDTO 변환
            List<TodoDTO> dtos = new ArrayList<>();
            for (TodoEntity tEntity: entities) {
                TodoDTO tDTO = new TodoDTO(tEntity);
                dtos.add(tDTO);
            }

            // (6) 변환된 todoDTO 리스트를 이용해 ResponseDTO 초기화
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().data(dtos).build();

            // (7) ResponseDTO 를 클라이언트 응답
            return ResponseEntity.ok().body(response);
        } catch (Exception e ) {
            // (8) 예외가 발생한 경우, ResponseDTO 의 data 필드 대신, error 필드에 메세지 넣어서 리턴
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();

            return ResponseEntity.badRequest().body(response);
        }
    }

}