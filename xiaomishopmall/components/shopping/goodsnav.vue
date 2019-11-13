<template>
	<view class="content">
		<view v-if="token">
			<!-- 底部占位 -->
			<view class="uni-tab__cart-box flex" v-if="!editing">
				<view class="flex uni-tab__cart-sub-box">
					<!-- 全选图标 -->
					<view class='icon'>
						<view class="checkIcon" :class="allischeck?'':'nocheck'" @click="allCheck">
							<text class="iconfont ischeck" v-if="allischeck">&#xe623;</text>
						</view>
					</view>
					<view class="total">
						<text>合计:</text>
						<text class="cost">￥{{total}}</text>
					</view>
				</view>
				<!-- 合计按钮 -->
				<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box" @click="goTotal">
					<view :style="{backgroundColor:buttonGroup.default().backgroundColor,color:buttonGroup.default().color}" class="flex uni-tab__cart-button-right">{{ buttonGroup.default().text }}</view>
				</view>
			</view>
			<view class="uni-tab__cart-box flex" v-if="editing">
				<view class="flex uni-tab__cart-sub-box">
					<!-- 全选图标 -->
					<view class='icon'>
						<view class="checkIcon" :class="allischeck?'':'nocheck'" @click="allCheck">
							<text class="iconfont ischeck" v-if="allischeck">&#xe623;</text>
						</view>
						<view class="total">
							<text>全选</text>
						</view>
					</view>
				</view>
				<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box">
					<view :style="{backgroundColor:editButtons.default().backgroundColor,color:editButtons.default().color}" class="flex uni-tab__cart-button-right"
					 @click="delGoods">{{ editButtons.default().text }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				buttonGroup: { //结算按钮信息
					type: Array,
					default () {
						return {
							text: '结算',
							backgroundColor: '#ffa200',
							color: '#fff'
						}
					}
				},
				editButtons: { //删除按钮信息
					type: Array,
					default () {
						return {
							text: '删除',
							backgroundColor: '#ff0000',
							color: '#fff'
						}
					}
				},
				fill: {
					type: Boolean,
					default: false
				},
			}
		},
		methods: {
			allCheck() { //全选
				this.$store.dispatch('allCheck')
			},
			delGoods() { //删除
				this.$store.dispatch("delGoods")
			},
			goTotal() {
				let data = []
				this.goodInfo.forEach(item => {
					if (item.ischeck) {
						data.push(item)
					}
				})
				if (data.length) {
					uni.navigateTo({
						url: "/pages/confimindent/confimindent?data=" + JSON.stringify(data)
					})
				} else {
					console.log("您还没有选择任何商品")
				}
			}
		},
		computed: { //展开对象，获取相应的值
			...mapState(['editing', 'allischeck', 'goodInfo', 'token']),
			...mapGetters(["total"])
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
		display: flex;
	}

	.checkIcon {
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 50%;
		margin: auto;
	}

	.nocheck {
		border: 1rpx solid #CCCCCC;
	}

	/* 选中样式 */
	.ischeck {
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
