# 1. REST 원칙 및 HTTP 메서드

## REST란?
REST(Representational State Transfer)는 분산 시스템을 위한 소프트웨어 아키텍처 스타일입니다. 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하여 웹의 장점을 최대한 활용할 수 있는 아키텍처입니다.

<br>

## REST의 6가지 제약 조건

1. **클라이언트-서버 구조 (Client-Server)**
   - 클라이언트와 서버가 독립적으로 분리되어 있어야 함
   - 서로의 의존성을 줄여 확장성을 높임

2. **무상태 (Stateless)**
   - 각 요청은 독립적이며, 서버는 클라이언트의 상태를 저장하지 않음
   - 모든 요청에 필요한 정보가 포함되어야 함

3. **캐시 가능 (Cacheable)**
   - 응답은 캐시 가능 여부를 명시해야 함
   - 캐시를 통해 성능 향상 가능

4. **균등한 인터페이스 (Uniform Interface)**
   - 일관된 인터페이스로 시스템 구조를 단순화
   - 자원 식별, 표현을 통한 자원 조작, 자기 서술적 메시지, HATEOAS

5. **계층화 시스템 (Layered System)**
   - 클라이언트는 서버와 직접 통신하는지 중간 서버와 통신하는지 알 수 없음
   - 로드 밸런서, 게이트웨이 등을 통한 확장성 제공

6. **온디맨드 코드 (Code-On-Demand)** - 선택사항
   - 서버에서 클라이언트로 실행 가능한 코드 전송 가능


<br>

## HTTP 메서드별 특징 비교

| HTTP 메서드 | 목적 | 안전성 | 멱등성 | 캐시 가능 | 요청 바디 | 응답 바디 |
|------------|------|--------|--------|-----------|-----------|-----------|
| **GET** | 리소스 조회 | ✅ | ✅ | ✅ | ❌ | ✅ |
| **POST** | 리소스 생성/처리 | ❌ | ❌ | ❌ | ✅ | ✅ |
| **PUT** | 리소스 전체 수정/생성 | ❌ | ✅ | ❌ | ✅ | ✅ |
| **PATCH** | 리소스 부분 수정 | ❌ | ❌ | ❌ | ✅ | ✅ |
| **DELETE** | 리소스 삭제 | ❌ | ✅ | ❌ | ❌ | ✅ |
| **HEAD** | 헤더 정보만 조회 | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OPTIONS** | 지원 메서드 확인 | ✅ | ✅ | ❌ | ❌ | ✅ |

<br>

**용어 설명:**
- **안전성**: 서버 상태를 변경하지 않음

- **멱등성**: 같은 요청을 여러 번 보내도 결과가 동일함
- **캐시 가능**: 응답을 캐시할 수 있음

<br>

## HTTP 상태 코드

| 상태 코드 범위 | 의미 | 주요 예시 |
|---------------|------|-----------|
| **1xx** | 정보성 응답 | 100 Continue |
| **2xx** | 성공 | 200 OK, 201 Created, 204 No Content |
| **3xx** | 리다이렉션 | 301 Moved Permanently, 304 Not Modified |
| **4xx** | 클라이언트 오류 | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| **5xx** | 서버 오류 | 500 Internal Server Error, 503 Service Unavailable |


<br><br><br>


## 2. RESTful 엔드포인트 설계 방법

## 기본 원칙

1. **명사 사용**: 동사가 아닌 명사를 사용하여 리소스를 표현
2. **복수형 사용**: 컬렉션은 복수형으로 표현
3. **계층 구조**: 슬래시(/)를 사용하여 계층 관계 표현
4. **소문자 사용**: URL은 소문자로 구성
5. **하이픈 사용**: 단어 구분은 하이픈(-) 사용 (언더스코어 X)

<br>

## 좋은 설계 vs 나쁜 설계 비교

| 구분 | 좋은 설계 | 나쁜 설계 |
|------|-----------|-----------|
| **리소스 명명** | `/users` | `/getUsers`, `/user_list` |
| **단일 리소스** | `/users/123` | `/user?id=123` |
| **중첩 리소스** | `/users/123/posts` | `/getUserPosts/123` |
| **검색/필터링** | `/users?role=admin&active=true` | `/searchUsers?role=admin` |
| **정렬** | `/users?sort=name,-created_at` | `/users/sortByName` |
| **페이징** | `/users?page=2&limit=10` | `/users/page2/limit10` |

<br>

## 표준 RESTful URL 패턴

| 작업 | HTTP 메서드 | URL 패턴 | 설명 |
|------|-------------|----------|------|
| **목록 조회** | GET | `/users` | 모든 사용자 목록 |
| **상세 조회** | GET | `/users/123` | ID가 123인 사용자 |
| **생성** | POST | `/users` | 새 사용자 생성 |
| **전체 수정** | PUT | `/users/123` | ID가 123인 사용자 전체 수정 |
| **부분 수정** | PATCH | `/users/123` | ID가 123인 사용자 부분 수정 |
| **삭제** | DELETE | `/users/123` | ID가 123인 사용자 삭제 |

<br>

## 중첩 리소스 설계

```
GET    /users/123/posts          # 사용자 123의 모든 게시글
GET    /users/123/posts/456      # 사용자 123의 게시글 456
POST   /users/123/posts          # 사용자 123의 새 게시글 생성
PUT    /users/123/posts/456      # 사용자 123의 게시글 456 수정
DELETE /users/123/posts/456      # 사용자 123의 게시글 456 삭제
```

<br>

## 쿼리 파라미터 활용

```
# 필터링
GET /users?role=admin&status=active

# 정렬 (- 접두사는 내림차순)
GET /users?sort=name,-created_at

# 페이징
GET /users?page=1&limit=20&offset=0

# 필드 선택
GET /users?fields=id,name,email

# 검색
GET /users?search=john&search_fields=name,email
```

<br><br><br>


# 3. Express/MongoDB 기반 REST API 예제

## 프로젝트 구조

```
blog-api/
├── package.json
├── server.js
├── models/
│   └── Post.js
├── routes/
│   └── posts.js
└── middleware/
    └── validation.js
```



## 패키지 설치

```bash
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon
```

<br>


## 1) 서버 설정 (server.js)

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 라우트
app.use('/api/posts', require('./routes/posts'));

// 기본 라우트
app.get('/', (req, res) => {
  res.json({ message: 'Blog API Server' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## 2) 모델 정의 (models/Post.js)

```javascript
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// 업데이트 시 updatedAt 자동 갱신
postSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Post', postSchema);
```

## 3) 라우트 구현 (routes/posts.js)

```javascript
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET /api/posts - 모든 게시글 조회
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, author, search } = req.query;
    const query = {};
    
    // 필터링
    if (status) query.status = status;
    if (author) query.author = new RegExp(author, 'i');
    if (search) {
      query.$or = [
        { title: new RegExp(search, 'i') },
        { content: new RegExp(search, 'i') }
      ];
    }
    
    const posts = await Post.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
    
    const total = await Post.countDocuments(query);
    
    res.json({
      posts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/posts/:id - 특정 게시글 조회
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/posts - 새 게시글 생성
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /api/posts/:id - 게시글 전체 수정
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!post) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH /api/posts/:id - 게시글 부분 수정
router.patch('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!post) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/posts/:id - 게시글 삭제
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }
    res.json({ message: '게시글이 삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
```

## 4) API 사용 예제

```javascript
// 1. 모든 게시글 조회
GET /api/posts
// 응답: { posts: [...], totalPages: 5, currentPage: 1, total: 50 }

// 2. 필터링된 게시글 조회
GET /api/posts?status=published&author=john&page=2&limit=5

// 3. 특정 게시글 조회
GET /api/posts/507f1f77bcf86cd799439011

// 4. 새 게시글 생성
POST /api/posts
Content-Type: application/json
{
  "title": "RESTful API 학습",
  "content": "REST API에 대해 공부한 내용을 정리합니다.",
  "author": "개발자",
  "tags": ["REST", "API", "Node.js"],
  "status": "published"
}

// 5. 게시글 수정
PUT /api/posts/507f1f77bcf86cd799439011
Content-Type: application/json
{
  "title": "수정된 제목",
  "content": "수정된 내용",
  "author": "개발자",
  "tags": ["REST", "API"],
  "status": "published"
}

// 6. 게시글 부분 수정
PATCH /api/posts/507f1f77bcf86cd799439011
Content-Type: application/json
{
  "status": "draft"
}

// 7. 게시글 삭제
DELETE /api/posts/507f1f77bcf86cd799439011
```

## 5) package.json 스크립트

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

<br><br><br>

# 주요 학습 포인트

## REST vs GraphQL vs RPC 비교

| 특징 | REST | GraphQL | RPC |
|------|------|---------|-----|
| **데이터 요청** | 여러 엔드포인트 | 단일 엔드포인트 | 함수 호출 방식 |
| **Over-fetching** | 발생 가능 | 방지 가능 | 발생 가능 |
| **캐싱** | HTTP 캐시 활용 | 복잡함 | 구현 필요 |
| **학습 곡선** | 낮음 | 높음 | 중간 |
| **타입 시스템** | 없음 | 강력한 타입 시스템 | 구현에 따라 다름 |


<br>


## 모범 사례

1. **버전 관리**: `/api/v1/users`, `/api/v2/users`

2. **에러 처리**: 일관된 에러 응답 형식 사용
3. **인증/인가**: JWT, OAuth 등을 통한 보안 구현
4. **문서화**: Swagger/OpenAPI를 활용한 API 문서화
5. **테스트**: 단위 테스트 및 통합 테스트 작성
6. **로깅**: 요청/응답 로깅 및 모니터링
7. **Rate Limiting**: API 사용량 제한
