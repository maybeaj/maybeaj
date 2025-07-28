// src/test/updateTest.ts
import * as M from '../mongodb'

const connectCB = async (db: M.MongoDB, id: string, body: any) => {
	const user = db.collection('user')
	const result = await user.findOneAndUpdate(
		{ _id: new M.ObjectId(id) },
		{ $set: body },
		{ returnDocument: 'after' }
	)
	console.log('📝 updated user:', result)
}

export const updateUser = (id: string, body: any) => {
	M.connectAndUseDB((db) => connectCB(db, id, body), 'ch07')
}
