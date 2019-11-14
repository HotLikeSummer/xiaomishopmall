<template>
	<view>
		<view v-if="database.length>0">
			<view class="line"></view>
			<view class="time">
				<view class="date">2019-06-07 10:20</view>
				<view class="shipped">未发货</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in database" :key="index">
					<view class="uni-list-cell-navigate">
						<view class="uni-list-left">
							<image :src="item.cover"></image>
							<view class="uni-list-tit">
								<view class="uni-list-text">{{item.title}}</view>
								<view style="color:#A09D97">{{item.kind.color}}</view>
							</view>
						</view>
						<view style="color:#A09D97">
							<view>￥{{item.min_price}}</view>
							<view class="uni-list-num">X{{item.num}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="total">
				<view style="float: right;">
					<view class="total-price">共{{database.length}}件商品,合计: ￥{{sums}}</view>
					<view class="logistics">
						<text>取消订单</text>
						<text @click="topay">去付款</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="weidata.length>0">
			<view class="line"></view>
			<view class="time">
				<view class="date">2019-06-07 10:20</view>
				<view class="shipped">已发货</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in weidata" :key="index">
					<view class="uni-list-cell-navigate">
						<view class="uni-list-left">
							<image :src="item.cover"></image>
							<view class="uni-list-tit">
								<view class="uni-list-text">{{item.title}}</view>
								<view style="color:#A09D97">{{item.kind.color}}</view>
							</view>
						</view>
						<view style="color:#A09D97">
							<view>￥{{item.min_price}}</view>
							<view class="uni-list-num">X{{item.num}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="total">
				<view style="float: right;">
					<view class="total-price">共{{weidata.length}}件商品,合计: ￥{{sums}}</view>
					<view class="logistics">
						<text>查看物流</text>
						<text @click="tochange">{{tits}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="main" style="display:flex" v-if="payingList.length==0">
			<view class="nothing">
				<image :src="img"></image>
				<view class="txt">您还没有任何订单</view>
			</view>
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
				database: [],
				weidata:[],
				img: "/static/images/nothing/no_comment.png",
				sums:0,
				tits:"确认收货"
			}
		},
		props: ["datas"],
		created(){
			for (let i=0;i<this.payingList.length;i++) {
				if(this.payingList[i].status==2){
					this.database.push(this.payingList[i])					
				}else if(this.payingList[i].status==3){
					this.weidata.push(this.payingList[i])
				}else{
					console.log("待评价")
				}
			}
			console.log(this.database)
			console.log(this.payingList)
		},
		computed: { //展开对象，获取相应的值
			...mapState(['payingList']),
		},
		methods: {
			topay() {
				uni.navigateTo({
					url:"../../pay/pay"
				})
			},
			tochange(){
				let _this=this
				uni.showToast({
					icon:"none",
					title:"收货成功",
					success() {						
						if (_this.tits=="确认收货") {
							_this.tits="待评价"
							// for(let i=0;i<_this.weidata.length;i++) {
							// 	if(_this.payingList[i].status==3){
							// 		_this.payingList[i].status=_this.payingList[i].status+1
							// 	}						
							// }
						}
					}
				})
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

	.line {
		width: 100%;
		height: 20upx;
		background-color: #E0E0E0;
	}

	.time {
		display: flex;
		justify-content: space-between;
		padding: 0upx 30upx;
		height: 80upx;
		line-height: 80upx;
	}

	.date,
	.shipped {
		height: 80upx;
		line-height: 80upx;
	}

	.shipped {
		color: #FF6B01;
	}

	.uni-list-cell-navigate image {
		width: 150upx;
		height: 150upx;
	}

	.uni-list-left {
		display: flex;
		justify-content: space-between;
	}

	.uni-list-tit {
		margin-left: 30upx;
	}

	.uni-list-text {
		margin-top: 22upx;
		font-size: 32upx;
	}

	.uni-list-num {
		text-align: right;
	}

	.total {
		height: 200upx;
	}

	.logistics text {
		display: inline-block;
		height: 80upx;
		width: 150upx;
		line-height: 80upx;
		text-align: center;
		border: 1upx solid #E0E3E6;
		color: #80848A;
		margin-right: 30upx;
	}

	.total-price {
		height: 80upx;
		line-height: 80upx;
		margin-right: 40upx;
	}
	/* 没有订单时 */
	.main {
		width: 100%;
		height: 1000upx;
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
</style>
