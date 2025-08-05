const DB = [];

//회원가입 API함수
function register(user) { //콜백이 3중 중첩 함수
    return saveDB(user, function (user) { // 콜백
        return sendEmail(user, function (user) { //콜백
            return getResult(user); //콜백
        })
    })
}

// DB에 저장 후 콜백 실행
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callback(user);
}

//이메일 발송 로그만 남기는 코드 실행 후 콜백 실행
function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    return callback(user);
}

//결과반환함수
function getResult(user) {
    return `success register ${user.name}`;
}

const result = register({email: "andy@test.com", password: "1234", name: "andy"});
console.log(result);