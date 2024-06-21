-- join: 여러 테이블을 합쳐서 정보 조회
select count(*) from customer; -- 15
select count(*) from orders; -- 21
select count(*) from customer, orders; -- 315 = 15 * 21

-- cross join 
select * from customer, orders; 

-- where 절을 이용해 조인 조건을 추가
select * from customer, orders 
	where customer.custid = orders.custid;
    
select * from customer inner join orders 
	on customer.custid = orders.custid;

-- "고객 이름"과 고객이 주문한 "상품명", "상품 가격" 조회
select custname, prodname, price from customer, orders 
	where customer.custid = orders.custid;
    
select custname, prodname, price from customer inner join orders 
	on customer.custid = orders.custid;
    
-- 고객 이름별로 //주문한 제품 총 구매액을 고객 별로 오름차순 정렬
select custname, sum(price * amount) as 'total_price' 
	from customer, orders
    where customer.custid = orders.custid
    group by custname
    order by total_price asc;


select custname, sum(price * amount) as 'total_price' 
	from customer inner join orders
    on customer.custid = orders.custid
    group by custname
    order by total_price asc;
    
-- natural join 
select * from customer natural join orders;


