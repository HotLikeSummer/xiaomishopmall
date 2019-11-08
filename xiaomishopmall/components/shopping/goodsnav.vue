<template>
	<view class="content">
		<!-- 底部占位 -->
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-box">
				<!-- 全选图标 -->
				<view class='icon'>
					<view class="checkIcon" :class="allChecked?'':'nocheck'"  @click="allCheck">
						<text class="iconfont checked" v-if="allChecked">&#xe623;</text>
					</view>
				</view>
				<view class="total">
					<text>合计:</text>
					<text class="cost">￥{{total}}</text>
				</view>
			</view>
			<!-- 合计按钮 -->
			<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box ">
				<view :style="{backgroundColor:buttonGroup.default().backgroundColor,color:buttonGroup.default().color}" class="flex uni-tab__cart-button-right"
				 @click="costTotal">{{ buttonGroup.default().text }}</view>
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
				allChecked: false,//全选判断
				total:0
			}
		},
		methods: {
			allCheck(){//全选
				this.$store.dispatch('allCheck')
				this.allChecked=this.$store.state.allChecked
			},
			costTotal(){//计算总价
				
			}
		},
		props:['goodCost']
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
		display:flex;
	}

	.checkIcon{
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 50%;
		margin: auto;
	}
	.nocheck{
		border: 1rpx solid #CCCCCC;
	}
	.checked{
		color: #FD6801;
		font-size: 47rpx;
	}

	.total {
		line-height: 100rpx;
	}

	.cost {
		color: #FD6801;
		margin-left: 30rpx;
	}
</style>
