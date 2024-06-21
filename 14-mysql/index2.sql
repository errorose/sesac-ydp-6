-- DML (Data Definition Lanaguage)
drop table orders;
drop table customer;

create table customer (
	custid char(10) primary key, -- pk
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
);

create table orders (
	orderid int primary key auto_increment, -- pk
    custid char(10) not null, -- fk
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade -- fk 설정
);

-- 외래키 제약조건
-- 두 테이블 사이에 관계를 맺음 -> 데이터의 무결성 (데이터가 이상하지 않고 올바름을 확정)
-- 다른 테이블의 기본키를 이 테이블의 외래키로 연결

-- 용어
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 외래키 연결: foreign key (참조테이블_열이름) references 기준테이블(열이름)

-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제

-- 테이블끼리 관계를 맺고 나면 테이블 삭제할 때 주의
-- customer.custid, orders.custid "관계"를 맺음
-- customer에 존재하는 회원만 orders 테이블에 데이터를 추가 
-- orders테이블이 존재하고 있는 상황에서 customer 테이블을 삭제(drop)하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음.
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 (참조테이블)이 먼저 삭제 
-- (1) orders 테이블 삭제 -> (2) customer 테이블 삭제

-- [insert] 
insert into customer (custid, custname, addr, phone, birth)
	values ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');

insert into customer (addr, phone, birth, custid, custname)
	values ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');

-- 필드명을 명시하지 않는경우 컬럼이 정의된 순서대로 값을 넣기
insert into customer
	values ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 튜플을 동시에 추가
insert into customer values 
	('asdf', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
    ('sdfg', '윤지성', '일본 도쿄', '01033331236', '1950-02-15'),
    ('dfgh', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');

insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');

-- pk가 auto_increment라면 null을 보내도 알아서 값을 채워줌
insert into orders values (null, 'kiwi', '프링글스', 3000, 5);
insert into orders values (null, 'apple', '프링글스', 3000, 1);
insert into orders values (null, 'kiwi', '홈런볼', 2000, 3);

-- orders 테이블이 참조하는 customer 테이블에는 banana 라는 고객이 없으므로 에러!!
-- insert into orders values (null, 'banana', '홈런볼', 2000, 3);

-- [update]
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
update customer set addr = '대한민국 서울' where custid = 'happy';
 
-- [delete]
-- custid가 happy인 사람의 정보를 테이블에서 삭제
delete from customer where custid = 'happy';

-- 고객 테이블에서 apple이 삭제 => 주문 테이블은 어떻게 달라지는지? (apple 고객의 주문 정보가 함께 삭제!)
delete from customer where custid = 'apple'; -- on delete cascade


INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('orange', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- [select]
select * from customer;
select * from orders;

-- 모든 고객의 아이디를 검색
select custid from customer;

-- 모든 고객의 아이디, 생년월일 검색
select custid, birth from customer;

-- 컬럼 순서 지정해서 출력
select birth, custid from customer;

-- 모든 고객의 아이디, 이름, 주소, 전화번호, 생년월일 검색
select custid, custname, addr, phone, birth from customer;
select * from customer;

-- 고객 테이블의 주소 검색
select addr from customer;
select distinct addr from customer; -- 중복 값 제외

-- [where 절] 디테일한 조회 조건 추가
-- 1. 비교
-- 강해린 고객의 생일 조회 
select birth from customer where custname = '강해린';

-- 강해린 고객을 제외한 나머지 고객의 생일 조회
select birth from customer where custname != '강해린';

-- 사전 순으로 박민지 고객보다 뒤에 위치한 고객 조회 
select * from customer where custname > '박민지';

-- 2. 범위
-- 1995~2000년 출생한 고객 조회
select * from customer where birth between '1995-01-01' and '2000-12-31';
select * from customer where birth >= '1995-01-01' and  birth <= '2000-12-31';

-- 3. 집합
-- 주소가 서울 혹은 런던인 고객 조회
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울 혹은 런던이 아닌 고객 조회
select * from customer where addr not in ('대한민국 서울', '영국 런던');

-- 4. 패턴
-- %: 0개 이상의 문자열
-- _: 1개의 단일문자
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색 (미국에 사는 사람)
select * from customer where addr like '미국%';

-- 고객 이름 두번째 글자가 '지'인 고객 검색
select * from customer where custname like '_지%';
select * from customer where custname like '_지'; -- 검색 결과: 0

-- 고객 이름 세번째 글자가 '수'인 고객
select * from customer where custname like '__수%';
select * from customer where custname like '%수'; -- x => 예외. 지수, 가나다수

-- 5. 복합 조건
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색 (and)
select * from customer where addr like '대한민국%' and birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색 (or)
select * from customer where addr like '미국%' or addr like '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색 (not)
select * from customer where phone not like '%_4'; 	-- '%_4'와 '%4'의 결과값은 다름!

-- 6. order by: 정렬
select * from customer order by custname; -- default asc
select * from customer order by custname desc;

-- 주의) order by 절은 where 절 보다 뒤에 위치해야함
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc;
-- select * from customer order by addr desc where birth >= '2000-01-01'; -- 구문 순서 오류

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 그리고 아이디를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc, custid desc;

-- 7. limit : 개수 제한
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 그리고 아이디를 기준으로 내림차순 검색하는데 최초의 4개
select * from customer where birth >= '2000-01-01' order by addr desc, custid desc limit 4;

select * from customer where birth >= '2000-01-01' limit 2;

select * from customer limit 1;

select * from customer where addr like '대한민국%' limit 2;

-- 8. 집계 함수
-- : 계산하여 어떤 값을 "리턴"하는 "함수"
-- group by 함께 많이 씀
select * from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경 
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
select sum(amount) as 'total_amount', 
	avg(amount) as 'avg_amount',
    min(price) as 'min_price',
    max(price) as 'max_price'
		from orders;

-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
select * from orders;
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이)
select count(*) from customer; -- 전체 고객 수
select count(distinct custid) from orders; -- 우리 회원 중 구매전환이 이루어진 고객 수

-- 9. group by: "~별로"
-- 고객별로 주문한 주문 건수 구하기
-- select 절에서, group by 에서 사용한 속성 과 집계함수만 사용 가능
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 orders구하기
select custid, sum(price * amount) from orders group by custid;

-- 응용 버전. 주문총액이 가장 큰 top 3
select custid, sum(price * amount) as 'total_pay' 
	from orders group by custid order by total_pay desc limit 3;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- 10. having : group by 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서 // 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount), sum(price * amount) 
	from orders group by custid having sum(price * amount) >= 10000;

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기 
-- (단, custid가 'bunny'인 고객은 제외하고 출력할 것)
select custid, sum(amount), sum(price * amount) 
	from orders 
		where custid != 'bunny'
		group by custid having sum(price * amount) >= 10000;

/*
where vs. having

having
- 그룹에 대해서 필터링 (그래서 group by 와 함께 쓰임)
- group by 보다 뒤에 위치해야 함
- 집계 함수랑 함께 사용 가능

where 
- 각각의 행을 필터링
- group by 보다 앞에 위치
- 집계함수를 쓸 수는 있으나 having 절 보다는 자유롭지 못함

*/
























