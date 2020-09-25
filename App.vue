<script>
	export default {
		onLaunch: function() {
			//应用启动，等登陆中获取用户Id
			this.$api.get_user({
				user_id: '5f6ae4f64f4570000172af13'
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
