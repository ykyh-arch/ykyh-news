'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		/* _id,
		article_ids,
		article_likes_ids,
		author_likes_ids,
		author_name,
		avatar,
		explain,
		fans_count,
		follow_count,
		gender,
		id,
		integral_count,
		professional,
		status,
		thumbs_up_article_ids,
		label_ids */
	} = event
	//排除_id
	let {_id,...data} = event
	if(!event){
		return {
			code: 400,
			msg: '更新失败'
		}
	}
	await db.collection('user').doc(event._id).update(data)
	//返回数据给客户端
	return {
		code:200,
		msg:'更新成功'
	}
};
