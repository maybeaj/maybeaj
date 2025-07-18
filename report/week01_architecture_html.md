# 📌 폰 노이만 아키텍처

> 존 폰 노이만이 고안한 내장 메모리 순차처리 방식

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Von_Neumann_Architecture.svg" width="300">

## 기본 개념

- 프로그램과 데이터를 **하나의 메모리**에 저장하여 사용하는 방식.
- 데이터는 메모리에 읽거나 쓰기 가능. 명령어는 읽기만 가능.
- CPU와 하나의 메모리를 사용해 처리하는 현대 범용 컴퓨터들이 사용하는 구조 모델.

## 장점

- 하드웨어를 재배치할 필요 없이 프로그램(소프트웨어)만 교체 가능 → **범용성 향상**

## 단점

- 메모리와 CPU를 연결하는 버스가 하나 → 순차적으로 정보 처리 → 고속 병렬처리에 부적합.
- 이를 **폰 노이만 병목현상**이라 부름.
- CPU가 명령어를 읽는 동시에 데이터를 읽을 수 없음.

## 대안

- 이를 해결하기 위해 **하버드 아키텍처**가 등장함.

---

# 📌 HTML 시멘틱 태그 정리

<img src="https://github.com/user-attachments/assets/b285e93e-a010-4de7-b22f-f09bc94c5321" width="500">

## 시멘틱 태그란?

- 시멘틱(semantic): "의미론적인"
- HTML5에서 도입된 **의미를 가지는 태그**들
- 코드의 구조와 목적을 명확하게 표현
- 브라우저, 검색엔진, 보조기기(Screen Reader) 등이 문서 구조를 더 잘 이해하도록 도움

## 시멘틱 태그의 장점

- 코드 가독성 향상
- 검색엔진 최적화(SEO) 유리
- 접근성(Accessibility) 향상
- 유지보수 용이

## 주요 시멘틱 태그와 역할

| 태그 | 역할 |
| --- | --- |
| `<header>` | 페이지나 섹션의 머리말 (로고, 타이틀, 네비게이션 등 포함 가능) |
| `<nav>` | 주요 내비게이션 영역 (메뉴, 링크 목록 등) |
| `<main>` | 페이지의 메인 콘텐츠 (핵심 내용, 문서당 1회 사용 권장) |
| `<section>` | 주제를 가진 구획 (논리적으로 묶인 콘텐츠 블록) |
| `<article>` | 독립적으로 배포 가능한 콘텐츠 (블로그 글, 기사 등) |
| `<aside>` | 부가적인 정보 (사이드바, 광고, 관련 링크 등) |
| `<footer>` | 문서나 섹션의 바닥글 (저작권, 연락처 등) |
| `<figure>` | 삽화, 이미지, 차트 등을 캡션과 함께 묶을 때 |
| `<figcaption>` | `<figure>` 요소 내에서 설명(캡션) 제공 |
| `<mark>` | 중요 강조 텍스트 (하이라이트) |
| `<time>` | 날짜 및 시간 정보 표현 |
| `<address>` | 연락처, 작성자 정보 등 |
| `<details>` / `<summary>` | 펼치기/접기 가능한 상세 설명 제공 |

---

# 📌 DOM (Document Object Model)

## DOM이란?

- DOM은 **HTML 문서 구조를 객체로 표현한 것**.
- 영어로는 Document Object Model → 줄여서 **DOM (돔)** 이라고 부름.

## 왜 필요한가?

- HTML은 `<body>`, `<p>` 등 여러 태그로 이루어짐 → 이게 바로 **문서 구조**.
- DOM은 이 구조를 **트리 형태의 객체**로 만들어서, 자바스크립트 등으로 접근하고 조작할 수 있게 함.
- 즉, **웹페이지와 스크립트 사이를 이어주는 다리** 역할.

## 쉽게 말하면

> "HTML을 자바스크립트가 쉽게 건드릴 수 있도록 만든 트리 구조"

---

# 📌 DOM의 계층 구조

<img src="https://github.com/user-attachments/assets/896bdf99-5369-4f16-a597-29f7c9a80fbb" width="500">

- DOM은 트리 형태로 이루어짐.
- 각 태그는 DOM에서 노드(Node)로 표현됨.
- 예시:
  - Document → html → head, body → div, p, a 등으로 계층화됨.

---

# 📌 DOM 생성 순서

## 어떻게 만들어질까?

- HTML은 **HTML 파서**가 읽으면서 DOM으로 변환.
- 파서가 `<script>` 태그를 만나면 멈춤.
- 자바스크립트 엔진이 script를 실행 → 실행 완료 후 다시 파서가 DOM 생성을 계속함.

## 그래서 왜 중요할까?

- 브라우저는 HTML과 JS를 **동기적으로 처리**함.
- `<script>`가 위에 있으면 DOM 생성이 느려질 수 있음.
- 그래서 보통 `<script>`는 **HTML 맨 아래에 넣는 걸 추천**.

## 결제 위젯처럼 DOM이 필요한 경우

- DOM이 완전히 만들어진 후에 결제 UI를 렌더링해야 안정적으로 실행됨.
- 그래야 스크립트가 DOM 요소를 제대로 찾고 조작 가능.

