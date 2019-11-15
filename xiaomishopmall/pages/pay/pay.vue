<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<text class="price">{{payingPrice}}</text>
		</view>
		<view class="pay-type-list">
			<view class="type-item b-b" @click="changePayType(1)">
				<view class="iconfont payicon" style="color:#36cb59;">&#xe631;</view>
				<view class="con">
					<text class="tit">微信支付</text>
					<text>推荐使用微信支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#FD6801" :checked='payType == 1' />
					</radio>
				</label>
			</view>
			<view class="type-item b-b" @click="changePayType(2)">
				<view class="iconfont payicon icon-alipay">&#xe63c;</view>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#FD6801" :checked='payType == 2' />
					</radio>
				</label>
			</view>
		</view>
		<text class="mix-btn" @click="confirm">确认支付</text>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				payType: 1,
				orderInfo: {}
			};
		},
		methods: {
			//选择支付方式
			changePayType(type) {
				this.payType = type;
			},
			//确认支付
			confirm() {
				this.$store.commit("getnowpay")//状态管理
				this.$store.dispatch("statusUp",2)
				uni.redirectTo({
					url: '/pages/pay/paySuccess/paySuccess'
				})
			},
		},
		computed:{
			...mapState(["payingPrice","nowlist"])
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
	}

	.price-box {
		background-color: #fff;
		height: 265rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		color: #909399;

		.price{
			font-size: 50rpx;
			color: #303133;
			margin-top: 12rpx;
			&:before{
				content: '￥';
				font-size: 40rpx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20rpx;
		background-color: #fff;
		padding-left: 60rpx;
		
		.type-item{
			height: 120rpx;
			padding: 20rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60rpx;
			font-size: 30rpx;
			position:relative;
		}
		
		.payicon{
			width: 100rpx;
			font-size: 52rpx;
		}
		.icon-alipay {
			color: #01aaef;
		}
		.tit{
			font-size: 35rpx;
			color: #000000;
			margin-bottom: 4rpx;
		}
		.con{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 20rpx;
			color: #909399;
		}
	}
	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630rpx;
		height: 80rpx;
		margin: 80rpx auto 30rpx;
		font-size:40rpx;
		color: #fff;
		background-color:#FD6801;
		border-radius: 10rpx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

</style>
