// src/test/findTest.ts
import * as M from '../mongodb'

const connectCBAll = async (db: M.MongoDB) => {
	const user = db.collection('user')
	const result = await user.find({}).toArray()
	console.log('📦 all users:', result)
}

export const findAll = () => {
	M.connectAndUseDB(connectCBAll, 'ch07')
}


const connectCBOne = async (db: M.MongoDB, id: string) => {
	const user = db.collection('user')
	const result = await user.findOne({ _id: new M.ObjectId(id) })
	console.log('🔍 one user:', result)
}

export const findOne = (id: string) => {
	M.connectAndUseDB((db) => connectCBOne(db, id), 'ch07')
}
