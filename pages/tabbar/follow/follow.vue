<template>
	<view class="follow">
		<!-- 导航切换 -->
		<view class="follow-tab">
			<view class="follow-tab__box">
				<view class="follow-tab__item" :class="{active:activeIndex === 0}" @click="tab(0)">文章</view>
				<view class="follow-tab__item" :class="{active:activeIndex === 1}" @click="tab(1)">作者</view>
			</view>
		</view>
		<view class="follow-list">
			<swiper class="follow-list__swiper" :current="activeIndex" @change="change">
				<swiper-item class="follow-list__item">
					<list-scroll>
						<uni-load-more v-if="list.length === 0 && !showArticleTip" iconType="snow" status="loading"></uni-load-more>
						<list-card v-for="(item, index) in list" :key="index" :item="item" types="follow"></list-card>
						<view class="no-data" v-if="showArticleTip">没有更多文章</view>
					</list-scroll>
				</swiper-item>
				<swiper-item class="follow-list__item">
					<uni-load-more v-if="listAuthor.length === 0 && !showAuthorTip" iconType="snow" status="loading"></uni-load-more>
					<list-author v-for="(item,index) in listAuthor" :key="item.id" :item="item"></list-author>
					<view class="no-data" v-if="showAuthorTip">没有更多关注</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				list: [],
				showArticleTip: false,
				showAuthorTip: false,
				listAuthor: []
			}
		},
		onLoad(){
			uni.$on('update_article',()=>{
				this.getFollow()
			})
			uni.$on('send_authors',()=>{
				this.getAuthor()
			})
			this.getFollow()
			this.getAuthor()
			uni.$on('initApp',()=>{
				this.getFollow()
				this.getAuthor()
			})
		},
		//点击 tab 时触发
		// onTabItemTap() {
		// 	this.getFollow()
		// },
		methods: {
			tab(index){
				this.activeIndex=index
			},
			change(e){
				const {
					current
				} = e.detail
				this.activeIndex = current
			},
			getFollow(){
				this.$api.get_follow().then((res) => {
					const {
						data
					} = res
					this.list = data
					this.showArticleTip = this.list.length === 0?true:false
				})
			},
			getAuthor(){
				this.$api.get_author().then((res) => {
					const {
						data
					} = res
					this.listAuthor = data
					this.showAuthorTip = this.listAuthor.length === 0?true:false
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.follow{
		//height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;
		.follow-tab{
			height: 30px;
			padding: 10px 20px;
			border-bottom: 1px #F5F5F5 solid;
			.follow-tab__box{
				display: flex;
				width: 100%;
				height: 100%;
				border-radius: 5px;
				border: 1px $mk-base-color solid;
				.follow-tab__item{
					display: flex;
					justify-content: center;
					align-content: center;
					line-height: 30px;
					color: #666;
					font-size: 14px;
					width: 100%;
					&:first-child{
						border-right: 1px $mk-base-color solid;
					}
					&.active{
						color: $mk-base-color;
					}
				}
			}
			
			
		}
		.follow-list{
			flex: 1;
			.follow-list__swiper{
				height: 100%;
				.follow-list__item{
					height: 100%;
				}
			}
		}
	}
	.no-data{
		padding: 50px;
		color: #999;
		font-size: 14px;
		text-align: center;
	}
</style>
