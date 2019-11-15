<template>
	<view class="content">
		<!-- 商品列表组件 -->
		<goodslist></goodslist>
		<view class="goods-carts">
			<!-- 购物车导航组件 -->
			<goodsnav/>
		</view>
		<!-- 推荐部分 -->
		<view class="recommend">
			<view class="rendmain">
				<h3 class="rend">为你推荐</h3>
				<view class="rectit">
					<view class="reline"></view>
					<view class="retext">买了人还买了</view>
				</view>
				<!-- 推荐商品列表 -->
				<view class="goodslist">
					<view class="uni-product-list">
						<view class="uni-product" v-for="(product,index) in productList" :key="index" @click="particulars(index)">
							<view class="image-view">
								<image class="uni-product-image" :src="product.cover"></image>
							</view>
							<view class="uni-product-title">{{product.title}}</view>
							<view class="uni-product-price">
								<text class="uni-product-price-favour">￥{{product.min_price}}</text>
								<text class="uni-product-price-original">￥{{product.min_oprice}}</text>
								<text class="uni-product-tip">自营</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import goodslist from "@/components/shopping/goodslist.vue"
	import goodsnav from "@/components/shopping/goodsnav.vue"
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: '购物车',
				name: "我的购物车",
				productList: [],//数据列表
			}
		},

		components: { //引入组件
			goodslist,
			goodsnav
		},
		methods: {
			particulars(i) {
				uni.navigateTo({ //跳转商品页面
					url: '/pages/type/particulars/particulars?id='+(25+i),
				});
			}
		},
		onLoad() {
			for (let i=0;i<5;i++) {
				this.$store.dispatch("getProduct",i)
			}
			this.productList=this.$store.state.productsList
			if (this.token == "") {
				uni.navigateTo({
					url: "../userlogin/userlogin"
				})
			} else {
				console.log("已登录")
			}
		},
		onNavigationBarButtonTap(e) { //点击编辑触发方法
			this.$store.state.editing = !this.$store.state.editing //改变编辑状态
			let webView = this.$mp.page.$getAppWebview();//在APP中获取顶部导航栏的信息
			//使用setTitleNViewButtonStyle方法更改导航栏按钮的属性值
			//用三目运算符判断editing编辑状态，更改对应的按钮文字
			webView.setTitleNViewButtonStyle(0,{text: this.editing?'完成':'编辑'})
		},
		computed:{//展开对象
			...mapState(['editing','allischeck','productsList',"token"])
		}
	}
</script>

<style scoped>
	@import '../../common/uni-nvue.css';

	.goods-carts {
		position: fixed;
		width: 100%;
		/* bottom: 0px; */
		bottom: 49px;
		background-color: #FFFFFF;
		border-bottom: #CCCCCC;
		z-index: 99;
	}

	.recommend {
		background-color: #F5F5F5;
	}

	.rend {
		text-align: center;
		color: orange;
		padding-top: 60rpx;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 38rpx;
	}

	.rectit {
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		position: relative;
	}

	.reline {
		border: 1px solid #E9E9E9;
		width: 100%;
		position: absolute;
		top: 50%;
		z-index: 2;
	}

	.retext {
		width: 300rpx;
		background-color: #F5F5F5;
		position: absolute;
		height: 60rpx;
		line-height: 60rpx;
		left: 50%;
		z-index: 5;
		text-align: center;
		transform: translateX(-50%);
		font-size: 32rpx;
	}

	.modaiBox {
		width: 100%;
		bottom: 49px;
	}

	.modaiCon {
		width: 100%;
		/* height:50%; */
		padding: 30rpx;
		border-top-left-radius: 15rpx;
		border-top-right-radius: 15rpx;
		background-color: #FFFFFF;
		box-sizing: border-box;
	}

	.goods {
		width: 100%;
		height: 850rpx;
		box-sizing: border-box;
	}

	.topInfo {
		width: 100%;
		height: 200rpx;
		display: flex;
		box-sizing: border-box;
	}

	.goodsImg {
		width: 200rpx;
		height: 200rpx;
		border: 1rpx solid #CCCCCC;
	}

	.goodsImg image {
		width: 100%;
		height: 100%;
	}

	.goods_info {
		height: 200rpx;
		padding: 25rpx 0;
		margin: 0 10rpx;
		box-sizing: border-box;
	}

	.goodsPrice {
		color: #FD6801;
	}

	.goodsPrice text {
		font-size: 40rpx;
		font-weight: 700;
	}

	.selectedInfo {
		font-weight: 700;
	}

	.midInfo {
		width: 100%;
		height: 520rpx;
		margin-top: 50rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #C0C0C0;
	}

	.clearlyInfo {
		height: 150rpx;
		margin: 20rpx 0;
	}

	.infoChoose {
		height: 100rpx;
		margin: 10rpx 0;
	}

	.infoBtn {
		width: 200rpx;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		margin-right: 40rpx;
		background-color: #F8F9FB;
		color: #000000;
		border: 1rpx solid #FFFFFF;
		border-radius: 10rpx;
		box-sizing: border-box;
		float: left;
	}

	.infoBtn:last-child {
		margin-right: 0;
	}

	.btn-active {
		color: #FD6801;
		background-color: #FCE0D5;
		border: 1rpx solid #FD6801;
	}

	.buyNumber {
		height: 100rpx;
		margin: 15rpx;
		box-sizing: border-box;
		line-height: 100rpx;
	}

	.choseNum {
		float: right;
		margin-top: 15rpx;
	}

	.intoCart {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #FD6801;
	}
</style>
