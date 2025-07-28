// src/test/deleteTest.ts
import * as M from '../mongodb'

const connectCB = async (db: M.MongoDB, id: string) => {
	const user = db.collection('user')
	const result = await user.deleteOne({ _id: new M.ObjectId(id) })
	console.log('🗑️ deleted user:', result)
}

export const deleteUser = (id: string) => {
	M.connectAndUseDB((db) => connectCB(db, id), 'ch07')
}
