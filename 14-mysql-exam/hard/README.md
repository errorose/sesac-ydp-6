# SQL 미션

> 아래 조건을 만족하는 SQL문을 작성하세요.

## 테이블 조건

다음은 각 테이블별 조건입니다.

- `환자(Patient)` 테이블

  - 환자번호(patient_id): PRIMARY KEY, INT 타입, AUTO_INCREMENT
  - 이름(name): VARCHAR(50), NOT NULL
  - 생년월일(birth_date): DATE, NOT NULL

- `의사(Doctor)` 테이블

  - 의사번호(doctor_id): PRIMARY KEY, INT 타입, AUTO_INCREMENT
  - 이름(name): VARCHAR(50), NOT NULL
  - 전공(specialty): VARCHAR(100), NOT NULL

- `진료(Appointment)` 테이블

  - 진료번호(appointment_id): PRIMARY KEY, INT 타입, AUTO_INCREMENT
  - 환자번호(patient_id): FOREIGN KEY, INT 타입, NOT NULL
  - 의사번호(doctor_id): FOREIGN KEY, INT 타입, NOT NULL
  - 진료일자(appointment_date): DATE, NOT NULL

- `진단(Diagnosis)` 테이블

  - 진단코드(diagnosis_code): PRIMARY KEY, INT 타입, AUTO_INCREMENT
  - 진단명(diagnosis_name): VARCHAR(100), NOT NULL
  - 설명(description): TEXT

- `진단내역(Diagnosis_Record)` 테이블

  - 진료번호(appointment_id): FOREIGN KEY, INT 타입, NOT NULL
  - 진단코드(diagnosis_code): FOREIGN KEY, INT 타입, NOT NULL
  - PRIMARY KEY는 (appointment_id, diagnosis_code) 조합

    - 힌트. `PRIMARY KEY (appointment_id, diagnosis_code)` 구문 사용시 복합키(여러 개의 키 조합)로 지정 가능

> (참고) `mission-erd.png` 이미지로 테이블 구조 확인 가능

# 데이터 삽입 조건

이미지를 참고하여 동일하게 데이터를 삽입해주세요.

> (참고) `insert-result-ex.png` 이미지로 데이터 삽입 예시 확인 가능

# 데이터 조회 조건

아래 조건을 만족하는 DML을 작성하세요.

1. 모든 환자의 이름과 생년월일을 조회하시오.

2. 전공이 '내과'인 의사의 이름을 조회하시오.

3. 2023년 6월 1일에 진료받은 환자의 이름과 의사 이름을 조회하시오.

4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자를 조회하시오.

5. 각 의사가 진료한 환자 수를 조회하시오.

6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
