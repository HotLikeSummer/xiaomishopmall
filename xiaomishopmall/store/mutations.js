export default {
	login(state, provider) {
		state.hasLogin = true;
		state.loginProvider = provider;
	},
	logout(state) {
		state.hasLogin = false
		state.openid = null
	},
	setOpenid(state, openid) {
		state.openid = openid
	},
	setTestTrue(state){
		state.testvuex = true
	},
	setTestFalse(state){
		state.testvuex = false
	},
	allCheck(state){
		state.allChecked=!state.allChecked
	}
}