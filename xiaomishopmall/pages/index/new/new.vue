<template>
	<view id="new">
		<view class="title">
			<!-- 循环导航栏内容 -->
			<view v-for="(tab, index) in title" class="uni-tab-item" :key="index" :index="index" @click="ontabtap(index)">
				<!-- 绑定样式 -->
				<text class="uni-tab-item-title" :class="tabIndex == index ? 'uni-tab-item-title-active' : ''">{{tab}}</text>
			</view>
		</view>
		
		<!-- 引入组件 -->
		<Uni-ShopList></Uni-ShopList>
	</view>
</template>

<script>
		import UniShopList from "@/components/uni-shoplist/uni-shoplist.vue"
	export default{
		data(){
			return{
				//导航下标
				tabIndex:0,
				//导航栏内容
				title:["最新上新","最新上新","最新上新","最新上新"]
			}
		},
		methods:{
			//导航栏绑定样式
			ontabtap(index) {
				this.tabIndex = index
			}
		},
		components:{
			UniShopList
		}
	}
</script>

<style scoped>
	.title {
		width: 750upx;
		height: 80upx;
		display: flex;
		justify-content: space-between;
	}
	
	.uni-tab-item {
		display: inline-block;
		padding-left: 34upx;
		padding-right: 34upx;
	}
	
	.uni-tab-item-title {
		color: #555;
		font-size: 30upx;
		height: 80upx;
		line-height: 80upx;
		padding: 20rpx 0rpx;
	}
	.uni-tab-item-title-active{
		border-bottom: 5rpx solid #FD6801;
		color: #FD6801 ;
	}
</style>
