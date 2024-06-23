use codingon;

-- 환자(Patient) 테이블
create table patient(
	patient_id int auto_increment primary key,
    name varchar(50) not null,
    birth_date date not null
);

-- 의사(Doctor) 테이블
create table doctor(
	doctor_id int auto_increment primary key,
    name varchar(50) not null,
    specialty varchar(100) not null
);

-- 진료(Appointment) 테이블
create table appointment(
	appointment_id int auto_increment primary key,
    patient_id int not null,
    doctor_id int not null,
    appointment_date date not null,
	foreign key (patient_id) references patient(patient_id) on update cascade on delete cascade,
    foreign key (doctor_id) references doctor(doctor_id) on update cascade on delete cascade
);

-- 진단(Diagnosis) 테이블
create table diagnosis(
	diagnosis_code int auto_increment primary key,
    diagnosis_name varchar(100) not null,
    description text 
);

-- 진단내역(Diagnosis_Record) 테이블
create table diagnosis_Record(
	appointment_id int,
    diagnosis_code int,
    foreign key (appointment_id) references appointment(appointment_id) on update cascade on delete cascade,
    foreign key (diagnosis_code) references diagnosis(diagnosis_code) on update cascade on delete cascade,
    primary key (appointment_id, diagnosis_code)
);

desc patient;
desc doctor;
desc appointment;
desc diagnosis;
desc diagnosis_Record;

insert into patient values
	(1, '김철수', '1990-05-15'),
    (2, '박영희', '1985-11-22'),
	(3, '이지원', '1998-03-08'),
    (4, '최민기', '1977-09-25'),
    (5, '한지영', '1992-07-01');
    
insert into doctor values
	(1, '김의사', '내과'),
    (2, '박의사', '외과'),
    (3, '이의사', '소아과'),
    (4, '최의사', '정형외과'),
    (5, '한의사', '피부과');

insert into appointment values
	(1, 1, 1, '2023-06-01'),
    (2, 2, 3, '2023-06-02'),
    (3, 3, 2, '2023-06-03'),
    (4, 4, 4, '2023-06-04'),
    (5, 5, 5, '2023-06-05');
    
insert into diagnosis values
	(1, '감기', '코감기 증상'),
    (2, '골절', '팔 골절'),
    (3, '알레르기', '꽃가루 알레르기'),
    (4, '피부염', '건선 증상'),
    (5, '귀염증', '중이염 증상');
    
insert into diagnosis_record values
	(1, 1),
    (3, 2),
    (4, 2),
    (5, 4),
    (2, 5);

select * from patient;
select * from doctor;
select * from appointment;
select * from diagnosis;
select * from diagnosis_record;

-- 1. 모든 환자의 이름과 생년월일을 조회하시오.
select name as 'patient_name', birth_date from patient;
-- 2. 전공이 '내과'인 의사의 이름을 조회하시오.
select name as 'doctor_name' from doctor where specialty = '내과';
-- 3. 2023년 6월 1일에 진료받은 환자의 이름과 의사 이름을 조회하시오.
select p.name as 'patient_name', d.name as 'doctor_name', a.appointment_date
from patient p join appointment a
on p.patient_id = a.patient_id join doctor d
on a.doctor_id = d.doctor_id
where a.appointment_date = '2023-06-01';
-- 4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자를 조회하시오.
select di.diagnosis_name, p.name as 'patient_name', a.appointment_date
from diagnosis_record dir join appointment a
on dir.appointment_id = a.appointment_id join patient p
on a.patient_id = p.patient_id join diagnosis di
on di.diagnosis_code = dir.diagnosis_code
where di.diagnosis_name = '골절';
-- 5. 각 의사가 진료한 환자 수를 조회하시오.
select d.name as 'doctor_name', count(a.patient_id) as 'total_patient'
from doctor d join appointment a
on d.doctor_id = a.doctor_id
group by d.name;
-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
select p.name as 'patient_name', a.appointment_date
from patient p join appointment a
on p.patient_id = a.patient_id
order by a.appointment_date desc limit 1;
