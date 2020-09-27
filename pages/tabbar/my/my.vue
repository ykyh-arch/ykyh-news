<template>
	<view>
		<view class="my-header">
			<view class="my-header-logo-backgroud">
				<image :src="userInfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="my-header-logo">
				<view class="my-header-logo_box">
					<image :src="userInfo.avatar" mode="aspectFill" @click="upateAvatar"></image>
				</view>
				<text class="my-header-name">{{userInfo.author_name}}</text>
			</view>
			<view class="my-header-info">
				<view class="my-header-info__box">
					<text class="my-header-info__title">被关注</text>
					<text>{{userInfo.follow_count}}</text>
				</view>
				<view class="my-header-info__box">
					<text class="my-header-info__title">粉丝</text>
					<text>{{userInfo.fans_count}}</text>
				</view>
				<view class="my-header-info__box">
					<text class="my-header-info__title">积分</text>
					<text>{{userInfo.integral_count || 0}}</text>
				</view>
			</view>
		</view>
		<view class="my-content">
			<view class="my-content-list" @click="getMyArticle">
				<view class="my-content-list__title">
					<uni-icons class="icons" type="contact" size="15" color="#666"></uni-icons>
					<text>我的文章</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>
			<view class="my-content-list" @click="feedback">
				<view class="my-content-list__title">
					<uni-icons class="icons" type="help" size="15" color="#666"></uni-icons>
					<text>意见反馈</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				avatar: ''
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		watch:{
			avatar(newVal){
				uni.hideLoading()
				this.update_avatar(newVal)
			}
		},
		onLoad() {
		},
		methods: {
			getMyArticle(){
				uni.navigateTo({
					url: '/pages/my-article/my-article'
				})
			},
			feedback(){
				uni.navigateTo({
					url: '/pages/feedback/feedback'
				})
			},
			upateAvatar(){
				uni.chooseImage({
					count:1,
					success:(res)=>{
						uni.showLoading({
							title: '图片上传中'
						})
						const {
							tempFilePaths
						}= res
					this.unloadFile(tempFilePaths[0])
					}
				})
			},
			update_avatar(avatar){
				let user = this.userInfo
				user.avatar = avatar
				this.$api.update_user(user).then((res) => {
					uni.showToast({
						 title: '头像修改成功',
						 duration: 2000
					})
					setTimeout(()=>{
						this.userInfo.avatar = avatar
					},500)
				}).catch(()=>{
					uni.hideLoading()
					uni.showToast({
						 title: '头像修改失败',
						 icon : 'none'
					})
				})
			},
			async unloadFile(filePath){
				await uniCloud.uploadFile({
					filePath: filePath,
					cloudPath: this.generateID(5)+'.jpg',
					success:(e)=>{
						this.avatar = e.fileID
					},
					fail() {},
					complete() {}
				});
			},
			generateID(length) {
				return Number(Math.random().toString().substr(3, length) + Date.now())
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F5F5F5;
	}
	.my-header{
		padding-bottom: 15px;
		position: relative;
		.my-header-logo-backgroud{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			filter: blur(8px);
			opacity: 0.3;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.my-header-logo{
			display: flex;
			flex-direction: column;
			align-content: center;
			align-items: center;
			padding-top: 30px;
			.my-header-logo_box{
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.my-header-name{
				margin-top: 15px;
				font-size: 16px;
				font-weight: bold;
			}
		}
		.my-header-info{
			margin-top: 15px;
			display: flex;
			.my-header-info__box{
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				font-size: 12px;
				color: #999;
				.my-header-info__title{
					font-size: 13px;
					color: #333;
				}
			}
		}
	}
	.my-content{
		.my-content-list{
			display: flex;
			justify-content: space-between;
			padding: 15px;
			margin-bottom: 10px;
			background-color: #F5F5F5;
			color: #333;
			font-size: 14px;
			.my-content-list__title{
				display: flex;
				align-items: center;
				.icons{
					margin-right: 5px;
				}
				
			}
		}
	}
</style>
