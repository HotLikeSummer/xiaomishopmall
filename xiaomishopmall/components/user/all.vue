<template>
	<view>
		<view class="" v-show="datas.length>0">
			<view class="line"></view>
			<view class="time">
				<view class="date">2019-06-07 10:20</view>
				<view class="shipped">已发货</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
					<view class="uni-list-cell-navigate">
						<view class="uni-list-left">
							<image :src="item.image" mode=""></image>
							<view class="uni-list-tit">
								<view class="uni-list-text">{{item.title}}</view>
								<view style="color:#A09D97">{{item.color}}</view>
							</view>
						</view>
						<view style="color:#A09D97">
							<view>{{item.price}}</view>
							<view class="uni-list-num">X{{item.count}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="total">
				<view style="float: right;">
					<view class="total-price">共{{nums}}件商品,合计: ￥299.00</view>
					<view class="logistics">
						<text>查看物流</text>
						<text>确认收货</text>
					</view>
				</view>
			</view>
		</view>
		<view class="main" style="display:flex" v-show="datas.length==0">
			<view class="nothing">
				<image :src="img" mode=""></image>
				<view class="txt">您还没有待评价订单</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				database: [],
				nums:0,
				img: "/static/images/nothing/no_comment.png",
				list: [{
					image: "/static/images/demo/list/5.jpg",
					title: "小米8",
					color: "金色",
					price: "￥1999.00",
					count: "1"
				}, {
					image: "/static/images/demo/list/3.jpg",
					title: "小米8",
					color: "金色",
					price: "￥1999.00",
					count: "1"
				}],
			}
		},
		props: ["datas"],
		onload(){			
// 			for(let i=0;i<this.list.length;i++){
// 				this.nums=this.nums+parseInt(this.list[i].count)
// 				console.log(this.nums)
// 			}
		}
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
	}
</style>
