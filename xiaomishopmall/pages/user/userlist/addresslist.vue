<template>
	<!-- 地址列表页 -->
	<view id="addresslist"></view>
</template>
<script>
	export default{
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(){
			//跳转到编辑地址
			uni.navigateTo({
				url:"edit-address"
			})
		}
	}
</script>
<style>

</style>