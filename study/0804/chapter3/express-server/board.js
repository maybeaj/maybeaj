const express = require("express");
const app = express();
let posts = []; //  게시글 리스트로 사용할 posts에 빈 리스트 할당

// req.body를 사용하려면 JSON미들웨어 사용
// 사용하지 않으면 undefined로 반환
app.use(express.json()); //JSON미들웨어 활성화

// POST요청 시 컨텐트 타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true})); // JSON 미들웨어와 함께 사용

app.get("/", (req, res) => { // /로 요청이 오면 실행
    res.json(posts); //게시글 리스트를 JSON형식으로 보여줌
});

app.post("/posts", (req, res) => { // /posts로 요청이 오면 실행
    const {title, name, text} = req.body; //HTTP 요청의 body 데이터를 변수에 할당

    posts.push({id: posts.length + 1, title, name, text, createdDt: Date()}); // 게시글 리스트에 새로운 게시글 정보 추가
    res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id; //app.delete에 설정한 path정보에서 id값을 가져옴
    const filteredPosts = posts.filter((post) => post.id !== +id); //글 삭제 로직 +id: 문자열인 id를 숫자형(Integer)로 변경
    const isLengthChanged = posts.length !== filteredPosts.length; //삭제 확인
    posts = filteredPosts;
    if (isLengthChanged) { //posts의 데이터 개수가 변경되었으면 삭제 성공
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED");
});

app.listen(3000, () => {
    console.log("welcome posts START!");
});