// vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 数据源
	state: {
		userInfo: uni.getStorageSync("__userinfo") || {},
		historyLists: uni.getStorageSync("__history") || []
	},
	mutations: {
		SET_USERINFO(state, userInfo){
			state.userInfo = userInfo
		},
		CLEAR_USERINFO(state){
			state.userInfo = {}
		},
		SET_HISTORY_LISTS(state, history) {
			state.historyLists = history
		},
		CLEAR_HISTORY(state) {
			state.historyLists = []
		}
	},
	actions: {
		set_userInfo({
			commit
		},userInfo){
			uni.setStorageSync('__userinfo', userInfo)
			commit('SET_USERINFO', userInfo)
		},
		clear_userInfo({
			commit
		}){
			uni.removeStorageSync('__userinfo')
			commit('CLEAR_USERINFO')
		},
		set_history({
			commit,
			state
		}, history) {
			let list = state.historyLists
			list.unshift(history)
			uni.setStorageSync('__history', list)
			commit('SET_HISTORY_LISTS', list)
		},
		clearHistory({
			commit
		}) {
			uni.removeStorageSync('__history')
			commit('CLEAR_HISTORY')
		}

	}
})

export default store
