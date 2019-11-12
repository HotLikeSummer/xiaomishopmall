<template>
	<view id="user-confimindent">
		<!-- 确认订单头部文字及返回 -->
		<view class="confimindent-top">
			<view class="title">
				<text class="iconfont icon-2fanhui" @click="fanhui"></text>
				<text class="text">订单配送至</text>
			</view>
			<!-- 地址部分 -->
			<view class="site">
				<view class="siteleft">
					<view>XXX <text class="Telephone">12345678910</text></view>
					<view>广东省深圳市龙岗区XX路XX街道</view>
				</view>
				<view class="siteright"><text class="iconfont icon-you"></text></view>
			</view>
		</view>
		<!-- 确认订单底部文部分 -->
		<view class="confimindent-bottom">
			<!-- 订单数量 -->
			<view class="user">
				<view class="user-pic">
					<image :src="item.cover" class="mypic" v-for="(item,index) in goodInfo" :key="index"></image>
				</view>
				<view class="user-right">共{{this.goodInfo.length}}件 <text class="iconfont icon-you"></text> </view>
			</view>
			<!-- 商品总价等 -->
			<view v-for="(item,index) in listText" :key="index">
				<view class="list">
					<text class="list-left">{{item.tesleft}}</text>
					<text class="list-right">{{item.price}}</text>
				</view>
			</view>
			<!-- 小计 -->
			<view class="list">
				<text class="list-left" style="color: #FD6801;">小计</text>
				<text class="list-right" style="color: #FD6801;">￥{{total}}</text>
			</view>
			<!-- 发票 -->
			<view class="invoice">
				<text class="invoice-text">发票</text>
				<text class="invoice-right">电子发票--个人 <text class="iconfont icon-you"></text></text>
			</view>
			<!-- 合计 -->
			<view class="mytotal">
				<view class="total">
					<view class="total-right">
						合计 :<text style="color: #FD6801;padding-left: 15rpx;">￥{{total}}</text>
						<text class="btn">去付款</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				listText: [{
						tesleft: "商品总价",
						price: "￥"+this.$store.state.total
					},
					{
						tesleft: "运费",
						price: "包邮"
					},
					{
						tesleft: "优惠券",
						price: "无可用"
					}
				]
			}
		},
		methods: {
			// 返回上一级
			fanhui() {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		computed: {
			...mapState(["goodInfo", 'total'])
		}
	}
</script>

<style scoped>
	/* 确认订单 */
	.confimindent-top {
		height: 400rpx;
		width: 100%;
		background-color: #FD6801;
	}

	/* 文字标题 */
	.title {
		height: 80rpx;
		line-height: 80rpx;
		color: white;
		text-align: center;
	}

	/* icon返回 */
	.icon-2fanhui {
		float: left;
		padding-left: 15rpx;
	}

	.text {
		font-size: 34rpx;
	}

	/* 地址部分 */
	.site {
		margin-top: 50rpx;
		height: 200rpx;
		line-height: 200rpx;
		color: white;
		padding: 30rpx;

	}

	.Telephone {
		padding-left: 20rpx;
	}

	.siteleft {
		float: left;
	}

	.siteright {
		float: right;
		margin-top: 20rpx;
	}

	/* 底部部分 */
	.confimindent-bottom {
		height: 500rpx;
		width: 100%;
		background-color: white;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		position: absolute;
		top: 380rpx;
		left: 0rpx;
	}

	.user {
		height: 160rpx;
		line-height: 160rpx;
	}

	.user-pic {
		float: left;
		padding-left: 15rpx;
		height: 160rpx;
		line-height: 160rpx;
	}

	.mypic {
		width: 80rpx;
		height: 80rpx;
		vertical-align: middle;
	}

	.user-right {
		float: right;
		padding-right: 15rpx;
		height: 160rpx;
		line-height: 160rpx;
	}

	.invoice {
		height: 100rpx;
		line-height: 100rpx;
		margin-top: 20rpx;
	}

	.invoice-text {
		float: left;
		padding-left: 20rpx;
	}

	.invoice-right {
		float: right;
		padding-right: 15rpx;
	}

	.list {
		height: 100rpx;
		line-height: 100rpx;

	}

	.list-left {
		float: left;
		padding-left: 20rpx;
	}

	.list-right {
		float: right;
		padding-right: 15rpx;
	}

	/* 去付款部分 */
	.mytotal {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
	}

	.total {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 200rpx;
		position: fixed;
		bottom: 0;
	}

	.total-right {
		float: right;
	}

	.total .btn {
		padding: 10rpx 50rpx;
		background-color: #FD6801;
		border-radius: 40rpx;
		color: white;
		margin: 0rpx 15rpx;
	}
</style>
