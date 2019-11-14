<template>
	<view id="type-class">
		<view class="container">
			<view class="page-body">
				<!-- 左侧分类导航 -->
				<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
					<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
					    v-for="(item,index) in categoryList">
						{{item.NAME}}
					</view>
				</scroll-view>
				<!-- 右侧商品分类 -->
				<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
					<!-- :id="index===0?'first':''" -->
					<view  class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index" @click="shoppingList(item,index)">
						<image :src="item.LOGO" />
						<view>{{item.NAME}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [],//父列表
				subCategoryList: [],//子列表
				height: 0,//页面高度
				categoryActive: 0,//字体颜色
				scrollTop: 0,//当前点击行距离窗口顶部的距离
				scrollHeight: 0,//获取屏幕可视高度
				
			}
		},
		
		methods: {
			//获取屏幕可视高度
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			//分类码
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight * index;
			},
			//获取类别
			getCategory() {
				for (var i = 1; i < 11; i++) {
					var subList = [];//定义一个数组用来接收子列表的数据
					for (var j = 1; j < 31; j++) {
						subList.push({
							"NAME": "分类" + i + ":商品" + j,
							"LOGO": "/static/images/demo/list/1.jpg"
						})
					}
					this.categoryList.push({
						"NAME": "分类" + i,
						"subCategoryList": subList
					})
				}
				this.subCategoryList = this.categoryList[0].subCategoryList;
			},
			//跳转到商品列表页面
			shoppingList(item,index){
				uni.navigateTo({
					url: 'shoplist/shoplist'
				});
			},
			
		},
		onLoad: function () {
			this.getCategory();
			this.height = uni.getSystemInfoSync().windowHeight;
		},
		//跳转搜索
		onNavigationBarSearchInputClicked(e) {
			uni.navigateTo({
				url: '/pages/type/detail/detail'
			});
		},
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0upx;
		padding: 0upx;
		color: #555555;
	}
	.page-body {
		display: flex;
	}

	.nav {
		display: flex;
		width: 100%;
	}
// 左侧分类导航
	.nav-left {
		width: 30%;
	}

	.nav-left-item {
		height: 100upx;
		border-right: solid 1px #E0E0E0;
		border-bottom: solid 1px #E0E0E0;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
// 右侧商品分类
	.nav-right {
		width: 70%;
	}

	.nav-right-item {
		width: 28%;
		height: 220upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
	}

	.nav-right-item image {
		width: 100upx;
		height: 100upx;
	}

	.active {
		color: #007AFF;
	}
</style>
