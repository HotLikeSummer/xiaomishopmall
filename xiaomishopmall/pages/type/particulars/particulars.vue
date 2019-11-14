<template>
	<!-- 商品详情页 -->
	<view id="type-particulars">
		<!-- 顶部图片 -->
		<view class="particulars-top">
			<view>
				<!-- 图片部分 -->
				<view class="top-imgs">
					<image :src="good.cover"></image>
					<view class="arrowicons">
						<uni-icons type="arrowleft" size="22" class="iconsleft" color="white" @click="goBack"></uni-icons>
						<uni-icons type="more-filled" size="22" class="iconsright" color="white"></uni-icons>
					</view>
				</view>
				<!-- 标题详情等 -->
				<view style="padding: 0rpx 20rpx;">
					<view>
						<text class="title">{{good.title}}</text>
					</view>
					<view>
						<text class="describe">{{good.desc}}</text>
					</view>
					<view style="margin-top: 30upx;">
						<text class="price">￥{{good.min_price}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 引入组件 -->
		<uni-particulars></uni-particulars>
	</view>
</template>

<script>
	// 引入组件
	import uniIcons from "@/components/Uni-Icons/uni-icons.vue"
	import UniParticulars from "@/components/Uni-Particulars/uni-particulars.vue"
	 import {mapState,mapMutations} from "vuex"
	export default {
		components: {
			uniIcons,
			UniParticulars,
		},
		computed:{
			...mapState(['good'])
		},
		data() {
			return {
				getdata: []
			}
		},
		methods: {
			// 返回上一层
			goBack() {
				uni.navigateBack();
			},

		},
		onLoad(options) {
			
			// 获取接口数据
			let id = parseInt(options.id)
			let that =this;
			uni.request({
				url: 'http://ceshi3.dishait.cn/api/goods/' + id + '',
				success(res) {
					that.$store.commit("getgood",res.data.data);
				}
			});
			console.log(this.good)
		},

	}
</script>

<style scoped>
	.particulars-top {
		width: 100%;
		height: 1040upx;
	}

	.top-imgs {
		width: 100%;
		height: 760upx;
		position: relative;
	}

	.top-imgs image {
		width: 100%;
		height: 100%;
	}

	.iconsleft,
	.iconsright {
		width: 50upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		background: black;
		opacity: 0.4;
		border-radius: 25upx;
		color: white;
		font-size: 30upx;
	}

	.iconsleft {
		position: absolute;
		top: 40upx;
		left: 5upx;
	}

	.iconsright {
		position: absolute;
		top: 40upx;
		right: 5upx;
	}

	.title {
		font-weight: 500;
		font-size: 40upx;
		padding: 10upx 0upx;
	}

	.describe {
		color: #929292;
	}

	.price {
		font-weight: 500;
		font-size: 40upx;
		color: #FD6801;
	}
</style>
