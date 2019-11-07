<template>
	<view class="content">
		<!-- 底部占位 -->
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-box">
				<!-- 全选图标 -->
				<view class="icon" @click="allCheck">
				</view>
				<view class="total">
					<text>合计:</text>
					<text class="cost">￥{{cost}}</text>
				</view>
			</view>
			<!-- 合计按钮 -->
			<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box ">
				<view :style="{backgroundColor:buttonGroup.default().backgroundColor,color:buttonGroup.default().color}" class="flex uni-tab__cart-button-right"
				 @click="buttonClick">{{ buttonGroup.default().text }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttonGroup: {
					type: Array,
					default () {
						return {
							text: '结算',
							backgroundColor: '#ffa200',
							color: '#fff'
						}
					}
				},
				fill: {
					type: Boolean,
					default: false
				},
				allChecked:false,//全选判断
				cost:0,
			}
		},
		methods: {
			allCheck(){//全选
				this.allChecked=!this.allChecked;
				console.log(this.allChecked)
			},
			buttonClick(){//计算总价
				console.log(this.cost)
			}
		}
	}
</script>

<style scoped>
	.flex {
		display: flex;
	}
	
	.uni-tab__cart-box {
		width: 100%;
		height: 100rpx;
		background: #fff;
		z-index: 900;
	}
	
	.uni-tab__cart-sub-box {
		width: 100%;
		box-sizing: border-box;
	}
	/* 合计按钮 */
	.uni-tab__right {
		/* margin: 5px 0;
		margin-right: 10px; */
		overflow: hidden;
	}
	
	.uni-tab__cart-button-right {
		justify-content: center;
		align-items: center;
		width: 100%;
		font-size: 24rpx;
		color: #fff;
	}
	
	.uni-tab__cart-button-right:active {
		opacity: 0.7;
	}
	/* 勾选图标 */
	.icon {
		height: 100rpx;
		width: 130rpx;
		box-sizing: border-box;
		background: url(https://cdn.it120.cc/images/weappshop/gou.png) no-repeat 50% 50%;
		background-size: 40rpx auto;
	}

	.icon-active {
		height: 100rpx;
		width: 130rpx;
		background-image: url(https://cdn.it120.cc/images/weappshop/gou-red.png) no-repeat 50% 50%;
	}

	.total {
		line-height: 100rpx;
	}

	.cost {
		color: #FD6801;
		margin-left: 30rpx;
	}
</style>
