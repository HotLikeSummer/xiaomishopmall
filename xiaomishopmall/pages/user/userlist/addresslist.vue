<template>
	<!-- 地址列表页 -->
	<view></view>
</template>
<script>
	export default{
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(){
			// 跳到地址编辑
			uni.navigateTo({
				url:"edit-address"
			})
		}
	}
</script>
<style>

</style>