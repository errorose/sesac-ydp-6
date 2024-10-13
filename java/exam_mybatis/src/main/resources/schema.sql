create database exam default character set utf8 default collate utf8_general_ci;
 use exam;

 -- board 테이블 생성
 CREATE TABLE board (
 	id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(20) NOT NULL,
     content VARCHAR(100) NOT NULL,
     writer VARCHAR(10) NOT NULL,
     registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

 desc board;

 -- 더미 데이터 삽입
 insert into board (title, content, writer)
 values 	('오늘의 일기', '마이멜로디가 내 양말을 뺏어갔다. 복수할거다.', '쿠로미'),
 		    ('마이멜로디 과연 착한가?', '나는 마멜이 쿠로미 양말을 뺏어가는걸 목격했다.', '포차코'),
 		    ('난 착한 토끼', '나는 쿠로미의 양말을 뺏어가지 않았다.', '마이멜로디');

select * from board;