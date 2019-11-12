<template>
	<view class="wrapper">
		<!-- 热门搜索 -->
		<view class="hot-search">
			<view style="margin-left: 30upx;">
				<h1 class="stock-classify-text">热门搜索</h1>
			</view>
			<view class="hot-search-pic">
				<image src="../../../static/images/demo/search-banner.png"></image>
			</view>
			<view style="margin-left: 30upx;">
				<button size="mini" v-for="(item,index) in Btn" :key="index" class="hot-search-btn">{{item}}</button>
			</view>

		</view>
		<!-- 常用分类 -->
		<view class="stock-classify">
			<h1 class="stock-classify-text">常用分类</h1>
			<button size="mini" v-for="(item,index) in StockClassify" :key="index" class="stock-classify-btn">{{item}}</button>
		</view>
		<!-- 搜索历史 -->
		<!-- isHistory为true时显示搜索历史 -->
		<view v-if="isHistory" class="history-box">
			<!-- 当historyList大于0则显示搜索历史 -->
			<view v-if="historyList.length > 0">
				<view class="history-title">
					<h1 class="stock-classify-text">搜索历史</h1>
					<text class="uni-icon uni-icon-trash" @click="clearSearch"></text>
				</view>
				<view class="history-content">
					<view class="history-item" v-for="(item, index) in historyList" :key="index">
						<view>{{item}}</view> 
					</view>
				</view>
			</view>
			<!-- historyList为0则显示没有历史记录 -->
			<view v-else class="no-data">您还没有历史记录</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList: [], //搜索结果
				isHistory: true, //搜索历史显示
				Btn: ["领券中心", "Redmi K20", "RedmiBook 14", "智能积木 越野四驱车", "手环 腕带"], //热门搜索数据
				StockClassify: ["耳机", "手机", "音箱", "手表", "配件", "网关/传感器", "健康", "酷玩"], //常用分类数据
			};
		},
		methods: {
			/**
			 * 清理历史搜索数据
			 */
			clearSearch() {
				uni.showModal({
					title: '提示',
					content: '确定要清除全部搜索历史吗？',
					success: res => {
						if (res.confirm) {
							this.historyList = [];
						}
					}
				});
			},
		},
		/**
		 * 点击软键盘搜索按键触发
		 */
		onNavigationBarSearchInputConfirmed(e) {
			// 获取到输入框中的内容
			this.historyList.push(e.text);
		},
	};
</script>

<style scoped>
	.history-title {
		display: flex;
		justify-content: space-between;
		padding: 20upx 30upx;
		padding-bottom: 0;
		font-size: 34upx;
		color: #333;
	}

	.history-title .uni-icon {
		font-size: 40upx;
	}

	.history-item {
		padding: 4upx 35upx;
		background: #fff;
		border-radius: 50upx;
		margin: 12upx 0upx;
		color: black;
	}

	.history-list-item {
		padding: 30upx 0;
		margin-left: 30upx;
		border-bottom: 1px #EEEEEE solid;
		font-size: 28upx;
	}

	.no-data {
		text-align: center;
		color: #999;
		margin: 100upx;
	}

	.hot-search-btn {
		margin: 0upx 6upx;
		background-color: pink;
		opacity: 0.3;
		border: 1upx solid #F17F82;
		padding: 0upx 10upx;
	}

	.hot-search-pic {
		height: 260upx;
		margin: 10upx 0upx;
	}

	.stock-classify {
		margin-left: 30upx;
	}

	.stock-classify-btn {
		margin: 0upx 6upx;
		padding: 0upx 25upx;
	}

	.stock-classify-text {
		font-size: 36upx;
		color: black;
		height: 70upx;
		line-height: 70upx;
	}
</style>
