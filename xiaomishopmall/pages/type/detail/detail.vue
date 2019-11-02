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
		<view v-if="isHistory" class="history-box">
			<view v-if="historyList.length > 0">
				<view class="history-title">
					<h1 class="stock-classify-text">搜索历史</h1>
					<text class="uni-icon uni-icon-trash" @click="clearSearch"></text>
				</view>
				<view class="history-content">
					<view class="history-item" v-for="(item, index) in historyList" :key="index">
						{{ item.name }}
					</view>
				</view>
			</view>
			<view v-else class="no-data">您还没有历史记录</view>
		</view>
		<view v-else class="history-box">
			<view v-if="historyList.length > 0" class="history-list-box">
				<view
					class="history-list-item"
					v-for="(item, index) in historyList"
					:key="index"
					@click="listTap(item)"
				>
					<rich-text :nodes="item.nameNodes"></rich-text>
				</view>
			</view>
			<view v-else class="no-data">没有搜索到相关内容</view>
		</view>
	</view>
</template>

<script>
import util from '@/components/amap-wx/js/util.js';

export default {
	data() {
		return {
			historyList: [],
			isHistory: true,
			list: [],
			flng: true,
			timer: null,
			Btn:["领券中心","Redmi K20","RedmiBook 14","智能积木 越野四驱车","手环 腕带"],//热门搜索数据
			StockClassify:["耳机","手机","音箱","手表","配件","网关/传感器","健康","酷玩"],//常用分类数据
		};
	},
	onLoad() {
		// 本示例用的是高德 sdk ，请根据具体需求换成自己的服务器接口。
		this.amapPlugin = util.mapInit();
		this.historyList = uni.getStorageSync('search:history');
	},
	methods: {
		/**
		 * 列表点击
		 */
		listTap(item) {
			item = JSON.parse(JSON.stringify(item));
			// 如果当前是历史搜索页面 ，那么点击不储存,直接 跳转
			if (this.history) {
				return;
			} else {
				this.isHistory = true;

				// 去做一些相关搜索功能 ，这里直接返回到上一个页面
				// 点击列表存储搜索数据
				util.setHistory(item);
				uni.navigateBack();
			}
		},
		/**
		 * 清理历史搜索数据
		 */
		clearSearch() {
			uni.showModal({
				title: '提示',
				content: '是否清理全部搜索历史？该操作不可逆。',
				success: res => {
					if (res.confirm) {
						this.historyList = util.removeHistory();
					}
				}
			});
		},
		/**
		 * 关键字搜索
		 * 调用高德地图关键字搜索api
		 */
		getInputtips(val) {
			let _this = this;
			this.amapPlugin.getInputtips({
				keywords: val,
				city: '北京',
				success: data => {
					let dataObj = data.tips;
					// 处理返回数据文字高亮
					dataObj.map(item => {
						return util.dataHandle(item, val);
					});
					//成功回调
					_this.historyList = dataObj;
				},
				fail: info => {
					//失败回调
					console.log(info);
				}
			});
		}
	},
	/**
	 * 当 searchInput 输入时触发
	 */
	onNavigationBarSearchInputChanged(e) {
		console.log(e)
		let text = e.text;
		if (!text) {
			this.isHistory = true;
			this.historyList = [];
			this.historyList = uni.getStorageSync('search:history');

			return;
		} else {
			this.isHistory = false;
			this.getInputtips(text);
		}
	},
	/**
	 * 点击软键盘搜索按键触发
	 */
	onNavigationBarSearchInputConfirmed(e) {
		let text = e.text;
		if (!text) {
			this.isHistory = true;
			this.historyList = [];
			this.historyList = uni.getStorageSync('search:history');
			uni.showModal({
				title: '提示',
				content: '请输入内容。',
				success: res => {
					if (res.confirm) {
					}
				}
			});
			return;
		} else {
			uni.showModal({
				title: '提示',
				content: `您输入的内容为"${text}",如果点击确定,将记录到历史搜索,并返回.如果取消不做操作`,
				success: res => {
					if (res.confirm) {
						util.setHistory(text);
						// uni.navigateBack();
					}
				}
			});
		}
	},
	/**
	 *  点击导航栏 buttons 时触发
	 */
	onNavigationBarButtonTap() {
		uni.showModal({
			title: '提示',
			content: '点击确定，修改输入框的内容为abc',
			success: res => {
				if (res.confirm) {
					const currentWebview = this.$mp.page.$getAppWebview();
					currentWebview.setTitleNViewSearchInputText("abc");
				}
			}
		});
	}
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
.hot-search-btn{
	margin: 0upx 6upx;
	background-color: pink;
	opacity: 0.3;
	border: 1upx solid #F17F82;
	padding: 0upx 10upx;
}
.hot-search-pic{
	height: 260upx;
	margin: 10upx 0upx;
}
.stock-classify{
	margin-left: 30upx;
}

.stock-classify-btn{
	margin: 0upx 6upx;
	padding: 0upx 25upx;
}
.stock-classify-text{
	font-size: 36upx;
	color:black;
	height:70upx;
	line-height:70upx;
}
</style>
