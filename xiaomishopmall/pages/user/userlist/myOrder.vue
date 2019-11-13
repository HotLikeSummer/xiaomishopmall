<template>
	<!-- 我的订单页面 -->
	<view id="myOrder">
		<!-- 顶部导航 -->
		<view class="nav">
			<view id="tab-bar" class="uni-swiper-tab">
				<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
				 :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
			</view>
		</view>
		<!-- 视图切换 订单列表-->
		<swiper :duration="1000" class="swiper" :current="tabIndex" @change="changeTab" :style="{height:swiperheight+'upx'}">
			<swiper-item>
				<scroll-view scroll-y :style="{height:swiperheight+'upx'}">
					<all :datas="database"></all>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<payment :datas="paydata"></payment>
			</swiper-item>			
			<swiper-item>
				<takeGoods :datas="goodsdata"></takeGoods>
			</swiper-item>
			<swiper-item>
				<evaluate :datas="evldata"></evaluate>
			</swiper-item>
		</swiper>
		<!-- 猜你喜欢 -->
		<view class="like">
			<view class="title">猜你喜欢</view>
			<view class="real-time">
				<view class="line1"></view>
				<text>实时推荐你的爱</text>
				<view class="line1"></view>
			</view>
		</view>
		<!-- 底部商品推荐 -->
		<view>
			<ul class="pros">
				<li v-for="(item,index) in likeList" style="width:50%" class="likelist" :key="index">
					<view class="proimg">
						<image :src="item.image" mode=""></image>
					</view>
					<view class="tit">{{item.title}}</view>
					<view class="detail">{{item.detail}}</view>
					<view class="like-price">
						<text class="nowprice">{{item.nowprice}}</text>
						<text class="orgprice">{{item.orgprice}}</text>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>
<script>
	import all from '@/components/user/all.vue'; //引入全部订列表
	import evaluate from '@/components/user/evaluate.vue';
	import payment from '@/components/user/payment.vue';
	import takeGoods from '@/components/user/take-goods.vue';
	export default {
		components: {
			all,
			evaluate,
			payment,
			takeGoods
		},
		data() {
			return {
				database:["asd"],
				paydata:["sds"],
				goodsdata:[],
				evldata:[],
				tabIndex: 0, //导航订单列表下标
				swiperheight: 1000, //高度
				tabBars: [{ //导航信息
					name: '全部',
					id: 'all'
				}, {
					name: '代付款',
					id: 'fukuang'
				}, {
					name: '待收货',
					id: 'shouhuo'
				}, {
					name: '待评价',
					id: 'pingjia'
				}],
				orderitems: [{
					img: "/static/images/nothing/no_comment.png",
					txt: "您还没有任何订单"
				}, {
					img: "/static/images/nothing/no_pay.png",
					txt: "您还没有待付款订单"
				}, {
					img: "/static/images/nothing/no_receiving.png",
					txt: "您还没有待收货订单"
				}, {
					img: "/static/images/nothing/no_comment.png",
					txt: "您还没有待评价订单"
				}],
				likeList: [{ //推荐信息
					image: "/static/images/demo/list/3.jpg",
					title: "米家空调",
					detail: "1.5匹支流变频",
					nowprice: "￥2199",
					orgprice: "￥2699"
				}, {
					image: "/static/images/demo/list/4.jpg",
					title: "米家空调",
					detail: "1.5匹支流变频",
					nowprice: "￥2199",
					orgprice: "￥2699"
				}, {
					image: "/static/images/demo/list/2.jpg",
					title: "米家空调",
					detail: "1.5匹支流变频",
					nowprice: "￥2199",
					orgprice: "￥2699"
				}, {
					image: "/static/images/demo/list/4.jpg",
					title: "米家空调",
					detail: "1.5匹支流变频",
					nowprice: "￥2199",
					orgprice: "￥2699"
				}]
			}
		},
		methods: {
			// 改变下标切换导航样式、订单列表
			tapTab(index) {
				this.tabIndex = index
			},
			// 监听订单列表下标变化改变导航样式
			changeTab(e) {
				let index = e.detail.current;
				this.tabIndex = index;
			}
		},
		// 页面加载时改变下标切换到对应列表
		onLoad(e) {
			if (e.current) {
				this.tabIndex = e.current;
			}else{
				this.tabIndex =parseInt(e.index)+ 1;
				console.log(this.tabIndex)
			}			
		},
	}
</script>
<style>
	ul {
		margin: 0upx;
		padding: 0upx;
	}

	li {
		list-style: none;
	}

	/* 顶部导航 */
	.swiper{
		height:600upx;
	}
	.uni-swiper-tab {
		border: none;
		/* height: 84upx; */
	}

	.swiper-tab-list {
		display: inline-block;
		width: 25%;
		color: #C7C7C7;
		height: 74upx;
	}

	/* 样式改变 */
	.active {
		color: #FF6B01;
		border-bottom: 1upx solid #FF6B01;
	}

	/* 猜你喜欢 */
	.like {
		background-color: #F5F5F5;
		width: 100%;
		height: 220upx;
	}

	.title {
		color: #FE6901;
		text-align: center;
		padding-top: 90upx;
	}

	.real-time {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.real-time text {
		color: #D7D7D7;
		width: 30%;
		text-align: center;
	}

	.line1 {
		color: #E9E9E9;
		border-top: 1upx #D7D7D7 solid;
		width: 32%;
		margin-top: 25upx;
	}

	/* 底部商品推荐 */
	.proimg {
		width: 100%;
		height: 374upx;
		/* background-color: #F5F5F5; */
		display: flex;
	}

	.proimg image {
		width: 100%;
		height: 100%;
		display: block;
		margin: auto;
	}

	.tit,
	.detail,
	.like-price {
		height: 50upx;
		line-height: 50upx;
		margin-left: 20upx;
	}

	.detail {
		color: #A7ADB2;
	}

	.tit {
		font-size: 33upx;
		margin-top: 10upx;
	}

	.nowprice {
		color: #E77882;
		font-size: 33upx;
	}

	.orgprice {
		color: #A7ADB2;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.pros {
		display: flex;
		width: 100%;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	/* 列表切换 */
	/* .swiper {
		height: 800upx;
	} */

	/* .main {
		width: 100%;
		height: 600upx;
		background-color: #F5F5F5;
	}

	.nothing {
		margin: auto;
		text-align: center;
	}

	.nothing image {
		width: 240upx;
		height: 200upx;
	}

	.txt {
		color: #D6D6D6;
	} */
</style>
