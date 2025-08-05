const axios = require("axios");

const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios
    .get(url)
    .then((result) => { //결과값처리
        if (result.status != 200) { //상태가 200이 아니면 에러
            throw new Error("요청에 실패했습니다.");
        }

        if (result.data) {
            return result.data;
        }

        throw new Error("데이터가 없습니다"); //data가 없으면 에러
    })
    .then((data) => { // result.data에서 받은 data 처리
        if (!data.articleList || data.articleList.size == 0) { //크키가 0이면 에러
            throw new Error("데이터가 없습니다");
        }
        return data.articleList;
    })
    .then((articles) => {
        return articles.map((articles, idx) => { //  영화 리스트를 제목과 순위 정보로 분리
            return { title: articles.title, rank: idx + 1} ;
        });
    })
    .then((results) => {
        for (let movieInfo of results) {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    })
    .catch((err) => {
        console.log("<<error 발생>>");
        console.log(err);
    })