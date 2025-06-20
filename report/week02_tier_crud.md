# 🌐 3계층 구조 (3-Tier Architecture)

> 어떠한 플랫폼을 **3계층으로 나누어** 별도의 논리적/물리적인 장치에 구축 및 운영하는 형태입니다.  
> 대표적인 예는 **웹 서버**이며, 이를 데이터 계층 / 어플리케이션 계층 / 프레젠테이션 계층으로 나누어 구성합니다.

![3-Tier Architecture](https://github.com/user-attachments/assets/574b7a4c-6445-4a26-ba44-0553bb96bfa4)

## 🏗️ 구성 계층 설명

---

### 1. 📱 프레젠테이션 계층 (Presentation Tier)

- **사용자 인터페이스(UI)**를 담당하는 계층입니다.
- 사용자가 직접 마주하는 영역으로, 주로 브라우저 기반의 화면을 의미합니다.
- 이 계층에서는 **데이터 처리 로직 없이** 화면에 출력할 데이터만 보여줍니다.
- 주로 사용하는 기술:  
  `HTML`, `CSS`, `JavaScript`, `React`, `Vue`, 등

> ✅ 다른 이름: **클라이언트 계층**, **프론트엔드(Front-end)**

---

### 2. ⚙️ 어플리케이션 계층 (Application Tier)

- 비즈니스 로직(업무 처리 규칙)을 담당하는 **서버 측 로직 계층**입니다.
- 프레젠테이션 계층의 요청을 받아 데이터를 가공하고, DB에 데이터를 요청합니다.
- 이 계층은 **프레젠테이션에 대해선 서버**, **데이터 계층에 대해선 클라이언트**처럼 작동합니다.
- 주로 사용하는 기술:  
  `Java`, `Python`, `Node.js`, `PHP`, `Spring`, `Express`, 등

> ✅ 다른 이름: **비즈니스 계층**, **트랜잭션 계층**, **백엔드(Back-end)**

---

### 3. 🗃️ 데이터 계층 (Data Tier)

- 실제 데이터를 저장하고 관리하는 계층입니다.
- 어플리케이션 계층에서 요청한 데이터를 DBMS를 통해 **읽기/쓰기** 처리합니다.
- 데이터의 무결성, 보안, 저장 구조를 담당합니다.
- 주로 사용하는 기술:  
  `MySQL`, `PostgreSQL`, `Oracle`, `MongoDB`, 등

> ✅ 다른 이름: **DB 계층**, **백엔드(Back-end)**

---

## 🔄 다층 구조 (Multi-tier Architecture)

- **3계층 외에도** 필요에 따라 2계층 또는 4계층 이상으로 확장 가능
- 이런 구조는 **n-Tier Architecture** 또는 **Multi-tier Architecture**라고 부릅니다

---

## ✅ 3계층 구조의 장점

- **계층 분리로 업무 분담 용이** → 협업 효율성 상승
- **서버 부하 분산** 가능 → 성능 향상
- **유지보수 용이** → 한 계층의 변경이 다른 계층에 영향을 미치지 않음
- **스케일업/스케일아웃**에 유리함

---

## ⚠️ 3계층 구조의 단점

- 구조가 복잡해지므로 **관리 포인트 증가**
- 계층마다 장애가 발생할 수 있어 **복잡도 증가**
- **초기 구축 비용 상승** (서버 분리, 운영 등)
- 작은 서비스에는 **과한 설계**가 될 수도 있음

---

## 🧩 정리

| 계층 | 주요 역할 | 주요 기술 | 별칭 |
|------|-----------|------------|------|
| 프레젠테이션 | 사용자와 직접 상호작용 | HTML, CSS, JS | 프론트엔드 |
| 어플리케이션 | 로직 처리, 데이터 가공 | Java, Python, PHP | 미들웨어, 백엔드 |
| 데이터 | DB 연결, 데이터 저장/조회 | MySQL, MongoDB | DB 계층, 백엔드 |

---

> 💡 **계층을 나누는 이유?**  
> 기능을 분리하여 개발과 유지보수가 쉽고, 성능 최적화 및 보안 대응에 유리하기 때문입니다.

---




# 📌 CRUD 개념과 웹 흐름

## ✅ CRUD란?
**CRUD**는 “Create, Read, Update, Delete”의 약어로, 데이터베이스나 시스템에서 가장 기본적인 데이터 관리 기능을 의미합니다.

- 거의 모든 시스템에서 사용되며, 프로젝트나 회의 시 자주 언급됩니다.
- CRUD는 **데이터베이스 작업**과 **RESTful API 설계** 양쪽에서 중요하게 사용됩니다.

---

## ✅ 1. DB에서의 CRUD

| 기능 | 설명 |
|------|------|
| **Create (생성)** | 새로운 데이터를 생성 (DB에 새로운 레코드 추가 등) |
| **Read (읽기)** | 저장된 데이터를 조회 (검색, 조회 등) |
| **Update (갱신)** | 기존 데이터를 수정 (내용 변경 등) |
| **Delete (삭제)** | 데이터를 삭제 (레코드 제거 등) |

---

## ✅ 2. REST API에서의 CRUD

RESTful 설계에서는 CRUD에 따라 적절한 **HTTP 메서드**와 **URL 패턴**을 사용합니다.

| 기능 | HTTP 메서드 | 요청 예시 | 응답 예시 |
|------|--------------|------------|------------|
| **Create** | `POST` | `POST /users`<br>본문: 사용자 정보(JSON) | `201 Created` + 생성된 ID |
| **Read** | `GET` | `GET /users` 또는 `GET /users/{id}` | `200 OK` + 사용자 목록 또는 상세 |
| **Update** | `PUT` / `PATCH` | `PUT /users/{id}`<br>본문: 수정할 데이터 | `200 OK` 또는 수정된 데이터 |
| **Delete** | `DELETE` | `DELETE /users/{id}` | `200 OK` 또는 삭제 성공 메시지 |

---

## 🌐 웹 흐름 (웹페이지가 동작하는 방식)

![웹 흐름 이미지](https://github.com/user-attachments/assets/1c7d072d-054f-4e9b-8e53-6156285a213d)

### 1. URL 입력
- 사용자가 브라우저에 URL을 입력하거나 링크 클릭  
  예: `www.example.com`

### 2. DNS 조회
- 브라우저가 DNS 서버에 도메인 이름 질의  
- DNS 서버가 해당 IP 주소를 반환  
  예: `www.example.com` → `93.184.216.34`

### 3. HTTP 요청
- 브라우저가 해당 IP의 웹 서버로 HTTP 요청 전송  
- 메서드: `GET`, `POST`, `PUT`, `DELETE` 등

### 4. 서버 처리
- 웹 서버가 요청을 수신하고 필요한 처리를 수행  
- 필요시 데이터베이스 조회 및 HTML 동적 생성

### 5. HTTP 응답
- 서버가 처리된 결과를 브라우저에 응답  
- HTML, CSS, JS 리소스 포함

### 6. 렌더링 과정
- HTML → DOM 트리 생성  
- CSS → CSSOM 생성  
- DOM + CSSOM → 렌더 트리  
- 레이아웃 계산 → Paint → 화면 출력

### 7. 최종 표시
- 완성된 웹 페이지가 화면에 표시  
- JavaScript 실행 → 동적 기능 활성화

---

## 🧾 한 문장 요약

> 사용자가 브라우저에 URL을 입력하면, 브라우저는 DNS 서버에 도메인 이름을 질의하여 IP 주소를 얻고, 해당 서버로 HTTP 요청을 보낸 후, 서버가 요청을 처리하여 HTML, CSS, JavaScript 등의 리소스를 포함한 HTTP 응답을 전송합니다. 브라우저는 받은 데이터를 파싱해 DOM, CSSOM을 생성하고, 이를 결합하여 렌더링 후 최종 웹 페이지를 화면에 표시하며, JavaScript로 동적 기능이 작동됩니다.

---

## 📚 참고 자료

- 🔗 [3계층 구조 설명 - Jaws Coding 블로그](https://jaws-coding.tistory.com/9)
- 🔗 [CRUD란 무엇인가 - idkim97 블로그](https://idkim97.github.io/2022-08-17-CRUD%EB%9E%80/)
- 🔗 [웹의 작동 원리 - velog @0hoxy](https://velog.io/@0hoxy/%EC%9B%B9%EC%9D%98-%EC%9E%91%EB%8F%99-%EC%9B%90%EB%A6%AC)
