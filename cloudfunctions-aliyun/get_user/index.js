'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		user_id =''
	} = event
	if(!user_id){
		return {
			code: 200,
			msg: '获取数据失败',
			data: null
		}
	}
	const userinfo = await db.collection('user').doc(user_id).get()
	return {
		code: 200,
		msg: '获取数据成功',
		data: userinfo.data[0]
	}
};
