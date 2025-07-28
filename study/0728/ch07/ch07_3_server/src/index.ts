import express from "express"
import { insertTest } from "./test/insertTest"
import { findAll, findOne } from "./test/findTest"
import { updateUser } from "./test/updateTest"
import { deleteUser } from "./test/deleteTest"

const hostname = "localhost"
const port = 3000

const app = express()
app.use(express.json())

// GET 전체
app.get("/", (req, res) => {
	findAll()
	res.json({ ok: true, message: "전체 조회 완료 (콘솔에서 확인)" })
})

// GET 하나
app.get("/:id", (req, res) => {
	findOne(req.params.id)
	res.json({ ok: true, message: "단일 조회 완료 (콘솔에서 확인)" })
})

// POST 삽입
app.post("/", (req, res) => {
	insertTest()
	res.json({ ok: true, message: "삽입 완료 (Jack, Jane, Tom)" })
})

// PUT 수정
app.put("/:id", (req, res) => {
	updateUser(req.params.id, req.body)
	res.json({ ok: true, message: "수정 완료 (콘솔에서 확인)" })
})

// DELETE 삭제
app.delete("/:id", (req, res) => {
	deleteUser(req.params.id)
	res.json({ ok: true, message: "삭제 완료 (콘솔에서 확인)" })
})

app.listen(port, hostname, () =>
	console.log(`connect http://${hostname}:${port}`)
)
