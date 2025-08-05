function myWork(work) {
	return new Promise((resolve, reject) => {
		resolve(work.toUpperCase());
	});
}

function playGame(work) {
	return new Promise((resolve, reject) => {
		if (work === "DONE") {
			resolve("GO PLAY GAME");
		} else {
			reject(new Error("DON'T"));
		}
	});
}
// ① 프로미스를 중첩해서 사용 (안 좋은 예)
myWork("done").then(function (result) {
	playGame(result).then(function (val) {
		console.log(val);
	});
});
// ② 결과를 then으로 넘김 (더 좋은 예: 체이닝)
myWork("done").then(playGame).then(console.log);
// .catch(console.error) // 필요 시 에러 처리
