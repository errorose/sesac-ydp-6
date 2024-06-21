create table instructor (
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salary int
);

create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);

insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

-- SQL에서 기본적으로 join 키워드를 사용하거나 ,를 통해 연결하면 inner join 연산을 수행
-- 이 때, 조건을 설정되지 않은 inner join 은 cross join 연산
select * from instructor join teaches;
select * from instructor, teaches;

-- 
select * from instructor I join teaches T on I.id = T.id;

delete from teaches where id <= 2; 
insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');
insert into teaches values (6, '알고리즘', '가을', '2023');

select * from instructor;
select * from teaches;

-- left outer join
select * from instructor I left outer join teaches T on I.id = T.id;

-- right outer join 
select * from instructor I right outer join teaches T on I.id = T.id;

-- full outer join 
-- mysql 에서는 full outer join을 지원하지 않음
-- union이라는 키워드를 통해서 full outer join을 구현할 수는 있음

select * from instructor I left outer join teaches T on I.id = T.id
union
select * from instructor I right outer join teaches T on I.id = T.id;






















