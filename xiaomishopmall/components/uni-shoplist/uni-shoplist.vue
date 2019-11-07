<template>
	<view id="shoplist">
		<!-- 顶部导航 -->
		<view class="nav">
			<view class="nav-top" v-for="(item,index) in navtopList" :key="index">
				<text class="nav-top-text" @click="show('right',index)">{{item}}</text>
				<view class="iconTesx">
					<view class="nav-top-icon">
						<text class="iconfont icon-paixu-shengxu"></text>
						<text class="iconfont icon-paixu-jiangxu"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品图文列表 -->
		<view class="shop-list-box">
			<view v-for="(item,index) in picTextList" class="picTextLists" :key="index" @click="Particulars(index)">
				<view class="shop-list-box-pic">
					<image :src="item.cover"></image>
				</view>
				<view class="shopping-bottom">
					<view class="shop-list-box-title">{{item.title}}</view>
					<view class="classify-text">{{item.desc}}</view>
					<view class="shop-list-box-price">￥{{item.pprice}}</view>
					<view style="color: #8C949B;">1348 条评论 98%满意度</view>
				</view>
			</view>
			<!-- 引入抽屉组件 -->
			<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
				<!-- 固定定位 -->
				<view class="screen">
					<view class="screen-serve">服务</view>
					<view>
						<button size="mini" v-for="(item,index) in Btnone" :key="index" class="hot-search-btn" :class="Num==index?'acvtions':''"
						 @click="BtnReset(index)">{{item}}</button>
					</view>
					<view class="screen-serve">分类</view>
					<view>
						<button size="mini" v-for="(item,index) in Btntow" :key="index" class="hot-search-btn" :class="Confirm==index?'acvtions':''"
						 @click="BtnConfirm(index)">{{item}}</button>
					</view>
					<view class="hot-search-reset">
						<button size="default" v-for="(item,index) in SearchReset" :key="index" class="feature" :class="Reset==index?'acvtion':''"
						 @click="SearchResets(index)">{{item}}</button>
					</view>
				</view>
			</uni-drawer>
		</view>
	</view>

</template>

<script>
	import UniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		components: {
			UniDrawer
		},
		name: 'UniShopList',
		data() {
			return {
				SearchReset: ["重置", "确定"],
				navtopList: ["综合", "销量", "价格", "筛选"],
				picTextList: [],//接收数据
				Btnone: ["促销", "分期", "仅看有货"],
				Btntow: ["耳机", "户外", "配件"],
				Num: 0, //服务按钮
				Confirm: 0, //分类按钮
				Reset: 0, // 重置及确定按钮
				// ShopFixeds:0,
				showRigth: false, //抽屉显示隐藏
				showLeft: false
			}
		},
		methods: {
			// 重置及确定按钮功能
			SearchResets(index) {
				let that = this;
				that.Reset = index;
				//当index等于0表示重置按钮，否则是确定按钮
				if (index == 0) {
					that.Num = 0;
					that.Confirm = 0;
				} else {
					this.showRigth = false;
				}
			},
			//服务按钮
			BtnReset(index) {
				let that = this;
				that.Num = index;
			},
			//分类按钮
			BtnConfirm(index) {
				let that = this;
				that.Confirm = index;
			},
			// 组件关闭时触发的事件
			closeDrawer(e) {
				if (e === 'right') {
					this.showRigth = false
					
				} else {
					this.showLeft = false
				}
			},
			// 点击筛选时显示
			show(e, index) {
				//当index为3时代表是筛选
				if (index == 3) {
					if (e === "right") {
						this.showRigth = true;
					}
				} else {
					return false
				}
			},
			// 跳转到详情页面
			Particulars(e) {
				uni.navigateTo({
					url: '/pages/type/particulars/particulars?id='+e,
				});
			},
			// 获取接口数据
			async shopListShow(){
				let [error,res] =await uni.request({
					url: 'http://ceshi3.dishait.cn/api/index_category/data',
				});
				let that =this;
				that.picTextList=res.data.data.data[4].data;
			}
		},
		created() {
			this.shopListShow();
		}
	}
</script>
<style scoped>
	* {
		margin: 0rpx;
		padding: 0rpx;
		color: #555555;
		width: 100%;
		height: 100%;
	}

	.nav {
		display: flex;
		justify-content: space-between;
	}

	.nav-top {
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0rpx 42rpx;
	}

	.nav-top-text {
		justify-content: space-around;
		font-size: 30rpx;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	.picTextLists {
		display: flex;
	}

	.shop-list-box-pic {
		width: 35%;
		margin: 4rpx 10rpx;
	}

	.shop-list-box-pic image {
		width: 260rpx;
		height: 280rpx;
	}

	.shop-list-box-title {
		font-weight: 800;
		font-size: 38rpx;
	}
	.classify-text{
		width: 100%;
		height: 108rpx;
		line-height: 1.4 !important;
		padding: 0;
		margin: 0;
		color: #8C949B;
		overflow: hidden;
		text-overflow:ellipsis;
		font-size: 26rpx;
	}
	.shopping-bottom {
		width: 65%;
		height: 240rpx;
		padding-left: 10rpx;
	}

	.shop-list-box-price {
		font-weight: 800;
		font-size: 40rpx;
		line-height: 1.6 !important;
		color: #FD6801;
	}

	.iconTesx {
		position: relative;
		height: 100rpx;
		float: left;
	}

	.nav-top-icon {
		position: relative;
		height: 100rpx;
	}

	.iconfont {
		font-size: 40rpx;
		width: 50rpx;
		float: left;
		overflow: hidden;
		line-height: 40rpx;
		text-align: center;
	}

	.icon-paixu-shengxu {
		color: #fd964f;
		position: absolute;
		top: 20rpx;
		left: 50rpx;
	}

	.icon-paixu-jiangxu {
		position: absolute;
		top: 20rpx;
		left: 50rpx;
	}

	/* 固定定位 */
	.screen {
		width: 120% !important;
		height: 100% !important;
		background: white;
		position: fixed;
		top: 0rpx;
		right: 0rpx;
		z-index: 10;
		padding: 0rpx 20rpx;
	}

	/* 遮罩层 */
	/* .masklayer{
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.3;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index: 9;
	} */
	.screen-serve {
		margin-top: 130rpx;
		margin-bottom: 30rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #000000;
	}

	.hot-search-btn {
		margin: 0rpx 5rpx;
		border: 1rpx solid #EEEEEE;
	}

	.hot-search-reset {
		position: fixed;
		bottom: 20rpx;
		left: -102rpx;
		display: flex;
	}

	.feature {
		width: 260rpx;
		margin-right: 10rpx;
		display: inline-block;
	}

	.acvtion {
		background: #FD6801;
		color: white;
	}

	.acvtions {
		border: 1rpx solid #FD6801;
		color: #FD6801;
	}
</style>
