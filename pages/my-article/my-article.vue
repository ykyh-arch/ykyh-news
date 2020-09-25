<template>
	<view>
		<uni-load-more v-if="myAarticleList.length === 0 && !showTip" iconType="snow" status="loading"></uni-load-more>
		<list-card v-for="item in myAarticleList" :key="item._id" :item="item"></list-card>
		<view v-if="showTip" class="no-data">没有文章</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myAarticleList: [],
				showTip: false
			}
		},
		onLoad() {
			this.$api.my_article().then((res) => {
				const {
					data
				} = res
				this.myAarticleList = data
				this.showTip = this.myAarticleList.length === 0?true:false
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.no-data {
		height: 200px;
		line-height: 200px;
		width: 100%;
		text-align: center;
		font-size: 13px;
		color: #666;
	}

</style>
