<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	@import url("./common/uni.css");
	@import url("./common/iconfont.css");
	@import url('./common/iconfont1.css');
	*{
		font-size: 20upx;
		line-height: 1.8;
		color: #FD6801;
	}
	image{
		width: 100%;
		height: 100%;
	}
</style>
