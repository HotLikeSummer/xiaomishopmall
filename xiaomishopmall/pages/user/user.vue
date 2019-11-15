<template>
	<!-- 个人主页 -->
	<view id="user">
		<view class="top" :style="{backgroundImage:'url('+topImg+')'}">
			<!-- 消息 -->
			<view><text class="iconfont icon-xiaoxi"></text></view>
			<!-- 昵称 -->
			<view @tap="tologin">
				<image :src="this.alltoken.avatar" mode=""></image>
			</view>
			<view class="member">
				<text class="iconfont icon-huangguan"></text>会员积分 1.99
			</view>
		</view>
		<view class="myOrder">
			<!-- 我的订单 -->
			<view class="order-tit" @tap="toOrder(0)">
				<text class="lt-order">我的订单</text>
				<view class="rt-order">
					<text>全部订单</text>
					<text class="iconfont icon-you"></text>
				</view>
			</view>
			<!-- 我的订单部分导航 -->
			<view class="operate">
				<ul class="waite">
					<li v-for="(item,index) in orders" class="waite-list" @tap="topage(item.url,index)" :key="index">
						<text :class="item.icons"></text>
						<view class="">{{item.txt}}</view>
					</li>
				</ul>
			</view>
		</view>
		<view class="line"></view>
		<!-- 广告 -->
		<view class="advertising">
			<image :src="atImg" mode="widthFix"></image>
		</view>
		<!-- 服务功能 -->
		<view class="service">
			<ul class="serviItem">
				<li class="servilist" v-for="(item,index) in list" @tap="topage(item.url,index)" :key="index">
					<text :class="item.img"></text>
					<text class="content">{{item.content}}</text>
					<text class="iconfont icon-you rightTo"></text>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				topImg: "/static/images/bg.jpg",
				nameImg: "/static/images/demo/demo6.jpg", //背景图
				orders: [{ //订单导航信息
						icons: "iconfont icon-wallet_icon",
						txt: "待付款",
						url: "userlist/myOrder"
					}, {
						icons: "iconfont icon-daishouhuo",
						txt: "待收货",
						url: "userlist/myOrder"
					},
					{
						icons: "iconfont icon-pinglun1",
						txt: "待评价",
						url: "userlist/myOrder"
					}, {
						icons: "iconfont icon-buoumaotubiao46",
						txt: "退换修",
						url: "userlist/sales-service"
					}
				],
				atImg: "/static/images/demo/demo4.jpg", //广告
				list: [{
					content: "小米会员",
					img: "iconfont icon-VIP"
				}, {
					content: "会员中心",
					img: "iconfont icon-huangguan"
				}, {
					content: "服务中心",
					img: "iconfont icon-service"
				}, {
					content: "小米之家",
					img: "iconfont icon-home"
				}, {
					content: "更多功能",
					img: "iconfont icon-gengduo"
				}, {
					content: "更多设置",
					img: "iconfont icon-icon_set_up",
					url: "userlist/set"
				}]
			}
		},
		computed: {
			...mapState(['token',"alltoken"])
		},
		methods: {
			//跳转到我的订单页
			topage(url, index) {
				uni.navigateTo({
					url: url + "?index=" + index + ""
				})
			},
			toOrder() {
				uni.navigateTo({
					url: "userlist/myOrder?current=0"
				})
			}
		},
		onLoad() {
			if (this.token == "") {
				uni.navigateTo({
					url: "../userlogin/userlogin"
				})
			} else {
				console.log("已登录")
			}
		}
	}
</script>

<style>
	* {
		margin: 0upx;
		padding: 0upx;
	}

	li {
		list-style: none;
	}

	.top {
		width: 100%;
		height: 400upx;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	/* 头部 */
	.top image {
		width: 180upx;
		height: 180upx;
		border-radius: 50%;
		margin-left: 65upx;
		margin-top: 130upx;
	}

	.icon-xiaoxi {
		color: white;
		font-size: 60upx;
		float: right;
		margin-top: 50upx;
		margin-right: 30upx;
	}

	.member {
		color: #C94B00;
		width: 300upx;
		height: 80upx;
		line-height: 80upx;
		background-color: #FFD43F;
		border-top-left-radius: 40upx;
		border-bottom-left-radius: 40upx;
		float: right;
		text-align: center;
		position: absolute;
		bottom: 80upx;
		right: 0px;
	}

	.icon-huangguan {
		margin-right: 15upx;
	}

	/* 我的订单部分 */
	.order-tit {
		height: 100upx;
		line-height: 100upx;
		padding: 0px 20upx;
		border-bottom: 1px solid #f0f0f0;
	}

	.lt-order {
		font-weight: 600;
		font-size: 35upx;
		color: #393D43;
	}

	.rt-order {
		float: right;
		color: #8C949B;
		height: 100upx;
		line-height: 100upx;
	}

	.waite {
		width: 100%;
		height: 120upx;
		line-height: 40upx;
		display: flex;
		justify-content: space-around;
		margin-top: 30upx;
	}

	.waite-list {
		text-align: center;
		margin-bottom: 30upx;
	}

	.line {
		width: 100%;
		height: 20upx;
		background-color: #F5F5F5;
	}

	/* 广告 */
	.advertising image {
		width: 100%;
		height: 300upx;
	}

	/* 服务功能 */
	.servilist {
		padding: 0px 30upx;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1px solid #f0f0f0;
	}

	.servilist:last-child {
		border-top: 20upx solid #F5F5F5;
		border-bottom: none;
	}

	.rightTo {
		color: #C2C2C2;
		float: right;
	}

	.content {
		margin-left: 20upx;
	}

	.icon-VIP {
		color: #FDC43E;
	}

	.servilist .icon-huangguan {
		color: #FFD43F;
		margin-right: 0upx;
	}

	.icon-service {
		color: #FA6C5E;
	}

	.icon-home {
		color: #FE8539;
	}

	.icon-gengduo {
		color: #9CD458;
	}

	.icon-icon_set_up {
		color: #7E8A97;
	}
</style>
