<template>
	<view id="myOrder">
		<view class="nav">
			<view id="tab-bar" class="uni-swiper-tab">
				<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
				 :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
			</view>
		</view>
		<!-- <all></all> -->
		<!-- <evaluate></evaluate>
		<payment></payment>
		<takeGoods></takeGoods> -->
		<swiper :duration="1000" class="swiper" :current="tabIndex" @change="changeTab">
			<swiper-item v-for="(item,index) in orderitems" :key="index">
				<view class="main" style="display:flex">
					<view class="nothing">
						<image :src="item.img" mode=""></image>
						<view class="txt">{{item.txt}}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="like">
			<view class="title">猜你喜欢</view>
			<view class="real-time">
				<view class="line1"></view>
				<text>实时推荐你的爱</text>
				<view class="line1"></view>
			</view>
		</view>
		<view>
			<ul class="pros">
				<li v-for="(item,index) in likeList" style="width:50%" class="likelist">
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
	import all from '@/components/user/all.vue';
	import evaluate from '@/components/user/evaluate.vue';
	import payment from '@/components/user/payment.vue';
	import takeGoods from '@/components/user/take-goods.vue';
	export default{
		components: {
			all,
			evaluate,
			payment,
			takeGoods
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
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
				likeList: [{
					image: "/static/images/demo/demo1.jpg",
					title: "米家空调",
					detail:"1.5匹支流变频",
					nowprice: "￥2199",
					orgprice: "￥2699"
				}, {
					image: "/static/images/demo/demo1.jpg",
					title: "米家空调",
					detail: "1.5匹支流变频",
					nowprice: "￥2199",
					orgprice: "￥2699"
				},{
					image: "/static/images/demo/demo1.jpg",
					title: "米家空调",
					detail: "1.5匹支流变频",
					nowprice: "￥2199",
					orgprice: "￥2699"
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
				}]
			}
		},
		methods: {
			tapTab(index) {
				this.tabIndex=index
			},
			changeTab(e){
				let index=e.detail.current;
				this.tabIndex = index;
			}
		},
		onLoad(e) {
			console.log(e)
			this.tabIndex=e.index+1;
		},
	}
</script>
<style>
	ul{
		margin:0upx;
		padding:0upx;
	}
	li{
		list-style: none;
	}
	.uni-swiper-tab{
		border: none;
		/* height: 84upx; */
	}
	.swiper-tab-list{
		display: inline-block;
		width: 25%;
		color: #C7C7C7;
		height: 74upx;
	}
	.active{
		color: #FF6B01;
		border-bottom:1upx solid #FF6B01;
	}
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
	.real-time{
		display: flex;
		justify-content: space-between;
		width:100%;
	}
	.real-time text {
		color: #D7D7D7;
		width:30%;
		text-align:center;
	}
	
	.line1 {
		color: #E9E9E9;
		border-top: 1upx #D7D7D7 solid;
		width:32%;
		margin-top:25upx;
	}
	.proimg{
		width:100%;
		height:300upx;
		background-color: #F5F5F5;
		display: flex;
	}
	.proimg:nth-child(odd){
		background-color: #E9D0BC;
	}
	.proimg image{
		width:70%;
		height:80%;
		display: block;
		margin: auto;
	}
	.tit,.detail,.like-price{
		height:50upx;
		line-height:50upx;
		margin-left:20upx;
	}
	.swiper {
		height: 420upx;
	}
	.main {
		width: 100%;
		height: 420upx;
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
	}
	.detail{
		color:#A7ADB2;
	}
	.nowprice{
		color:#E77882;
	}
	.orgprice{
		color:#A7ADB2;
		text-decoration: line-through;
		margin-left: 10upx;
	}
	.pros{
		display:flex;
		width:100%;
		justify-content:space-between;
		flex-wrap: wrap;
	}
</style>