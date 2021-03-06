'use strict';
// 获取数据库的引用
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id
	} = event
	if(!user_id){
		return {
			code: 400,
			msg: '获取数据失败'
		}
	}
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]
	const lists = await db.collection('article')
	.aggregate()
		.addFields({
			is_like: $.in(['$_id', userinfo.article_likes_ids])
		})
		.project({
			content: 0
		})
		.match({
			is_like: true
		})
		.end()
	return {
		code: 200,
		msg: '获取数据成功',
		data: lists.data
	}
};
