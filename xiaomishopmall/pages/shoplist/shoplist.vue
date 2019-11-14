<template>
	<view id="shop-list">
		<!-- 组件模板 -->
		<Uni-Shop-List/>
	</view>
</template>

<script>
	// 引入组件模板
	 import UniShopList from '@/components/uni-shoplist/uni-shoplist.vue'
	export default{
		// 注册组件
		components:{UniShopList},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0upx;
		padding: 0upx;
		color: #555555;
	}
	
</style>
