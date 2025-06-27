# HTTP의 메시지

HTTP 메시지는 클라이언트와 서버 사이에서 데이터를 주고받는 방식이다.  
크게 두 가지 타입으로 나뉜다:

- **Request (요청)**: 클라이언트가 서버에 보내는 메시지
- **Response (응답)**: 서버가 클라이언트에게 보내는 메시지

HTTP 메시지는 **ASCII 인코딩된 텍스트**로 구성되며, 설정 파일, API, 브라우저 등을 통해 전달된다.



## HTTP 메시지 구조

요청과 응답의 구조는 유사하며, 다음과 같은 네 가지 요소로 구성된다:

![HTTP 메시지 구조](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FxuDiU%2FbtsnFEVkBEY%2FAAAAAAAAAAAAAAAAAAAAABWYciMqIMUAjxnt0xRX6DPjIqqrkPCRs8D3-Oe2sMkX%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DYWbVs3cAaydxu2hNtJ%252Byi4mS4io%253D)

1. **Start Line**: 요청 또는 응답의 상태를 나타내는 첫 줄  
2. **HTTP Header**: 요청/응답에 대한 부가 정보를 담는 헤더 집합  
3. **Blank Line**: 헤더와 본문을 구분하는 빈 줄  
4. **Body**: 요청 또는 응답과 관련된 실제 데이터  


## 📤 Request (요청 메시지)

### 1. Start Line

- **HTTP Method**: `GET`, `POST`, `PUT` 등 요청 방식 지정  
- **Request Target**: 요청 대상(URL/URI 또는 절대 경로)  
- **HTTP Version**: 예: `HTTP/1.1`, `HTTP/2`  



### 2. Header

![Request](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcW94YJ%2FbtsnSZRa0NG%2FAAAAAAAAAAAAAAAAAAAAAFqQL15-F9vf3g_m-DJ7RfquRWZLBQNCz42coGhCuQv0%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DKPKNQTKhWoA%252BAQHo5alFJlnoazU%253D)

- 형식: `헤더이름: 값`  
- 대소문자 구분 없음

#### 헤더 그룹

- **Request Headers**: `User-Agent`, `Accept-Type`, `Accept-Language`, `Referer`, `If-None-Match` 등  
- **General Headers**: 전체 메시지에 공통적으로 적용  
- **Entity Headers**: 메시지 본문에 대한 정보 포함 (Body가 비어있으면 전송되지 않음)  



### 3. Body

- 요청에 포함되는 실제 데이터  
- 모든 요청에 필요한 것은 아님  
- 주로 `POST` 요청에 사용되며, HTML 폼 데이터 등이 포함됨  



## 📥 Response (응답 메시지)

### 1. Start Line

- **HTTP Version**  
- **Status Code**: `200`, `404`, `500` 등 요청 결과를 나타냄  
- **Status Text**: `OK`, `Not Found` 등 상태 코드 설명  



### 2. Header

![Response](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbCf4kD%2FbtsnFE149jL%2FAAAAAAAAAAAAAAAAAAAAADWkqR-MYTX50pjtlh-f0Z5Ek-8Pe5YNOzwkC4j5oUnW%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3D%252B4y97p22BKeAjqSXtuw5Y5KPmfY%253D)

- 요청 헤더와 동일한 형식  
- 몇 가지 그룹으로 나뉨

#### 헤더 그룹

- **General Headers**: 전체 메시지에 적용  
- **Response Headers**: `Vary`, `Accept-Ranges` 등 추가 정보 제공  
- **Entity Headers**: 응답 Body에 대한 정보 포함 (Body가 없을 경우 전송되지 않음)  



### 3. Body

- 응답 데이터 포함 (HTML, JSON 등)  
- 상태 코드가 `201`, `204`인 경우 Body 생략 가능  

### Ajax, forward, redirect 차이

# 📡 Ajax (Asynchronous JavaScript And XML)

## ✅ 정의

- Ajax는 **비동기적으로 서버와 통신**할 수 있도록 해주는 웹 기술  
- `XMLHttpRequest` 객체를 사용하며, XML 외에도 HTML, JSON, 일반 텍스트 등 다양한 포맷의 데이터 전송 가능  
- **웹 페이지 전체를 새로고침하지 않고**, 필요한 **일부만 갱신**할 수 있는 것이 핵심  



## 💡 Ajax를 사용하는 이유

- 필요한 데이터만 주고받아 **자원 낭비 감소**
- 페이지 새로고침 없이 동작 → **사용자 경험 향상**
- 대형 서비스(네이버, 카카오 등)에서 리소스 최적화에 효과적



## 🚀 Ajax의 장점

- 전체 페이지 새로고침 없이 **빠른 응답 처리**
- **비동기 처리**로 사용자 경험 향상
- 서버에서 필요한 데이터만 전송 → **코드량 감소**

---

## ⚠️ Ajax의 단점

- 브라우저 **히스토리 관리 어려움**
- **보안에 주의** 필요 (페이지 이동 없이 처리됨)
- 서버가 클라이언트에 **능동적으로 알림(Push)**을 보내는 방식 구현 어려움



## 🔁 Ajax 동작 원리

![alt text](https://velog.velcdn.com/images%2Fhahan%2Fpost%2Fc1ada5b4-7600-48aa-af9d-1cbbd91519ee%2Fimage.png)

1. 사용자 이벤트 발생  
2. 이벤트 핸들러가 JavaScript 실행  
3. JavaScript가 `XMLHttpRequest` 객체로 서버에 요청 전송  
4. 서버는 요청을 처리  
5. 서버가 응답 데이터를 HTML, JSON 등으로 반환  
6. JavaScript가 해당 데이터를 받아 웹 페이지 일부만 갱신  
7. 사용자에게 변경된 결과 표시됨  



## ❗ Ajax의 한계

- Ajax는 **클라이언트 요청 기반**  
- **서버 푸시 방식(Push Notification)** 같은 실시간 서비스 구현 어려움



# 🔄 Forward vs Redirect

## 1. Forward 방식

- **서버(Web Container) 내부**에서 페이지 이동  
- 클라이언트는 **URL 변경 인식 불가**  
- **Request, Response 객체를 공유**  
- 최초 요청 정보가 다음 페이지까지 **유지됨**

![Forward](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fb9U3fY%2FbtqyeoHglrc%2FAAAAAAAAAAAAAAAAAAAAAKOi3Kbo9DAhvtPezN-36IgQcUlW2JXkE6lg5gIpi0vN%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DwftV0pnTkaN12KCfRRQuhfIQwjg%253D)

### ✅ 특징

- 주소창에는 최초 URL만 표시됨  
- 동일 요청 정보 전달 → **새로고침 시 중복 처리 위험**  
- 주의: 게시판 글쓰기 등에는 부적절할 수 있음

### ✅ 적합한 상황

- 단순 조회 페이지 응답  
  (예: 글 목록, 검색 결과 등)



## 2. Redirect 방식

- 서버가 클라이언트에 **새 URL로 이동하라는 명령 전달**
- 클라이언트는 **URL 변경** 후 **새 요청** 전송
- **Request, Response 객체는 새로 생성됨**

![Redirect](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FF3O4A%2FbtqydA2GDYr%2FAAAAAAAAAAAAAAAAAAAAAPItgz6Y95mEIJ-3O9epkJgpZo1sfqlHk3TbU3c5FQNe%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3Dk6mWvsEQPROgdQVR182LvWvBTxg%253D)

### ✅ 특징

- 사용자는 URL 변경을 인식함  
- 새로고침 시에도 **중복 요청 방지**
- 이전 요청 정보는 사라짐

### ✅ 적합한 상황

- 시스템에 **데이터 변화가 있는 요청**
  (예: 회원가입, 글쓰기, 삭제 등)

## ✅ 비교 요약

| 구분           | Ajax                          | Forward                        | Redirect                           |
|----------------|-------------------------------|--------------------------------|------------------------------------|
| 이동 주체      | 클라이언트 (JavaScript)        | 서버 내부                     | 클라이언트                         |
| URL 변경       | ❌ 변경 없음                   | ❌ 변경 없음                  | ✅ 변경됨                          |
| 요청 횟수      | 1회 (비동기 처리)              | 1회                           | 2회 (기존 요청 → 새 요청)         |
| request 유지   | ✅ 유지됨                      | ✅ 유지됨                     | ❌ 새로 생성됨                    |
| 용도           | 부분 데이터 갱신               | 내부 처리 후 뷰 연결           | 처리 후 새 URL로 이동              |
| 사용 예시      | 검색 자동완성, 댓글 등록 등     | 게시글 등록 후 결과 페이지 이동 | 로그인 후 메인 페이지로 리다이렉트 |


## 🔗 참고

- [MangKyu's Diary](https://mangkyu.tistory.com/51)
- [Velog - Ajax란 무엇일까?](https://velog.io/@hahan/Ajax%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
