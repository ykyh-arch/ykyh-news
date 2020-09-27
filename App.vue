<script>
	import store from '@/store/index.js'
	export default {
		onLaunch: function() {
			//应用启动，等登陆中获取用户Id
			if(!store.state.userInfo._id){
				uni.redirectTo({
				    url: '/pages/login/login'
				});
				return
			}
			this.$api.get_user({
				user_id: store.state.userInfo._id
			}).then((res) => {
				const {
					data
				} = res
				this.$store.dispatch('set_userInfo',data)
			})
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/gaoyia-parse/parse.css';
</style>
