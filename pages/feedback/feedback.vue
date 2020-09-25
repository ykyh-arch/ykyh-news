<template>
	<view>
		<view class="feedback">
			<view class="feedback-title">意见反馈：</view>
			<view class="feedback-content">
				<textarea class="feedback-textarea" v-model="content" placeholder="请输入反馈内容..."></textarea>
			</view>
			<view class="feedback-title">反馈图片：</view>
			<view class="feedback-image-box">
				<view class="feedback-image-item" v-for="(item,index) in imageList" :key="index">
					<view class="close-icon" @click="close(index)">
						<uni-icons type="closeempty" size="18" color="#fff"></uni-icons>
					</view>
					<view class="image-box">
						<image :src="item.url"></image>
					</view>
				</view>
				<view class="feedback-image-item" @click="openImage" v-if="imageList.length < 5">
					<view class="image-box plusempty-icons">
						<uni-icons type="plusempty" size="50" color="#666"></uni-icons>
					</view>
				</view>
			</view>
			<!-- 进度条 -->
			<view class="progress-box" v-if="progressFlag">
			    <progress :percent="percent" stroke-width="10"  border-radius="50"/>
			</view>
			<!-- 按钮 -->
			<button class="feedback-btn" @click="submit">提交反馈按钮</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList: [],
				progressFlag: false,
				percent:0,
				content: ''
			}
		},
		methods: {
			openImage(){
				const count = 5 - this.imageList.length
				uni.chooseImage({
					count:count,
					success:(res)=>{
						const {
							tempFilePaths
						}= res
					tempFilePaths.forEach((item,index)=>{
						//H5 处理
						if(index<count){
							this.imageList.push({
								url:item,
								index:index
							})
						}
						
					})
					}
				})
			},
			close(index){
				//删除
				this.imageList.splice(index,1)
			},
			async submit(){
				let imgPath =[]
				uni.showLoading({
					title: '上传中'
				})
				for (let i=0;i<this.imageList.length;i++) {
					const filePath = this.imageList[i].url
					filePath = await this.unloadFile(filePath)
					imgPath.push(filePath)
				}
				this.updateFeedback({
					feedbackImages: imgPath,
					content: this.content
				})
			},
			updateFeedback(Obj){
				this.$api.update_feedback(Obj).then((res) => {
					uni.hideLoading()
					uni.showToast({
						 title: '文件上传成功',
						 duration: 2000
					})
					setTimeout(()=>{
						uni.switchTab({
							url:'/pages/tabbar/my/my',
						})
					},1000)
				}).catch(()=>{
					uni.hideLoading()
					uni.showToast({
						 title: '文件上传失败',
						 icon : 'none'
					})
				})
			},
			async unloadFile(filePath){
				const result =  await uniCloud.uploadFile({
					filePath: filePath,
					cloudPath: this.generateID(5)+'.jpg'/* ,
					onUploadProgress: (progressEvent) => {
						const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
						this.progressFlag = true
						this.percent = percentCompleted
					} */
				})
				/* this.percent = 0
				this.progressFlag = false */
				return result.fileID
			},
			generateID(length) {
				return Number(Math.random().toString().substr(3, length) + Date.now())
			}
			
		}
	}
</script>

<style lang="scss">
	.feedback{
		background-color: #F5F5F5;
		.feedback-title{
			margin: 15px;
			margin-bottom: 0;
			font-size: 16px;
			color: #666;
		}
		.feedback-content{
			margin: 15px;
			padding: 10px;
			box-sizing: border-box;
			border: 1px #ECECEC solid;
			.feedback-textarea{
				font-size: 12px;
				width: 100%;
				height: 150px;
			}
		}
		.feedback-image-box{
			display: flex;
			flex-wrap: wrap;//换行
			padding: 10px;
			.feedback-image-item{
				position: relative;
				width: 33.33%;
				height: 0;
				padding-top: 33.33%;
				box-sizing: border-box;
				//border: 1px red solid;
				.close-icon{
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					right: 0;
					top: 0;
					width: 22px;
					height: 22px;
					border-radius: 50%;
					background-color: #ff5a5f; 
					z-index: 2;
				}
				.image-box{
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 5px;
					bottom: 5px;
					left: 5px;
					right: 5px;
					border: 1px #eee solid;
					border-radius: 5px;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
					&.plusempty-icons{
						border: 1px #C0C0C0 dashed;
					}
				}
			}
		}
		.progress-box{
			padding: 0 16px;
			height: 27px;
			margin-bottom: 20px;
		}
		.feedback-btn{
			margin: 0 15px;
			background-color: $mk-base-color;
			color: #F5F5F5;
		}
	}
</style>
