<template>
	<view>
		<view class="my-content">
			<view class="my-content-logo-backgroud">
				<image src="@/static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="my-content-logo">
				<view class="my-content-logo_box">
					<image src="@/static/logo.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="my-content-info">
				<form>
					<view class="my-content-info-item">
						<view class="my-content-info-title">账户：</view>
						<input class="my-content-info--input" v-model="username" name="input" placeholder="账户或邮箱" />
					</view>
					<view class="my-content-info-item">
						<view class="my-content-info-title">密码：</view>
						<input class="my-content-info--input" type="password" v-model="password" name="password" placeholder="密码" />
					</view>
					<!-- 按钮 -->
					<button class="feedback-btn" @click="submit">登录</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapActions} from 'vuex' 
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			...mapActions(['set_userInfo']),
			submit(){
				if(!this.username){
					uni.showToast({
						icon:'none',
						title:'账户不能为空'
					})
					return
				}
				if(!this.password){
					uni.showToast({
						icon:'none',
						title:'密码不能为空'
					})
					return
				}
				const loginObj = {
					username: this.username,
					password: this.password
				}
				this.loginUser(loginObj)
			},
			loginUser(loginObj){
				//云函数
				this.$api.login_user(loginObj).then((res) => {
					//设置登录信息
					const {
						data
					} = res
					//交给mutations去执行
					//this.$store.commit('SET_USERINFO',data)
					//交给actions去执行
					//this.$store.dispatch('set_userInfo',data)
					//或
					this.set_userInfo(data)
					uni.showToast({
						 title: '登录成功',
						 duration: 2000
					})
					setTimeout(()=>{
						//跳转首页
						uni.switchTab({
							url: '/pages/tabbar/my/my'
						})
					},500)
				}).catch(()=>{
					uni.hideLoading()
					uni.showToast({
						 title: '登录失败',
						 icon : 'none'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F5F5F5;
	}
	.my-content{
		padding: 18px;
		//position: relative;
		.my-content-logo-backgroud{
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
		.my-content-logo{
			display: flex;
			flex-direction: column;
			align-content: center;
			align-items: center;
			padding-top: 30px;
			.my-content-logo_box{
				width: 60px;
				height: 60px;
				border-radius: 5px;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.my-content-info{
			margin-top: 35px;
			box-sizing: border-box;
			padding: 10px;
			width: 100%;
			.my-content-info-item{
				display: flex;
				//justify-content: center;
				align-items: center;
				margin: 14px;
				.my-content-info-title{
					font-size: 16px;
					font-weight: bold;
					color: #333333;
				}
				.my-content-info--input{
					width: 75%;
					height: 40px;
					font-size: 15px;
					border-radius: 5px;
					border: 1px #C0C0C0 solid;
					padding-left: 5px;
					
				}
			}
			.feedback-btn{
				margin-top: 60px;
				background-color: $mk-base-color;
				color: #F5F5F5;
			}
			
		}
	}
</style>
