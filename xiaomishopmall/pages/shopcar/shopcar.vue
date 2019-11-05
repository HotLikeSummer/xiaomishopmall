<template>
	<view class="content">
		<goodslist></goodslist>
		<view class="goods-carts">
			<goodsnav />
		</view>
		<view class="recommend">
			<view class="rendmain">
				<h3 class="rend">为你推荐</h3>
				<view class="tlt">
					<view class="reline"></view>
					<view class="retext">买了人还买了</view>
				</view>
				<view class="goodslist">
					<view class="uni-product-list">
						<view class="uni-product" v-for="(product,index) in productList" :key="index">
							<view class="image-view">
								<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
							</view>
							<view class="uni-product-title">{{product.title}}</view>
							<view class="uni-product-price">
								<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
								<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
								<text class="uni-product-tip">{{product.tip}}</text>
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
	export default {
		data() {
			return {
				title: 'Hello',
				name: "我的购物车",
				productList: [],
				renderImage: false,
				sendData:[]
			}
		},

		components: {
			goodslist,
			goodsnav
		},
		methods: {
			loadData(action = 'add') {
				const data = [{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
						title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
						originalPrice: 9999,
						favourPrice: 8888,
						tip: '自营'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
						title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
						originalPrice: 3499,
						favourPrice: 3399,
						tip: '优惠'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
						title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
						originalPrice: 12999,
						favourPrice: 10688,
						tip: '秒杀'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
						title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
						originalPrice: 999,
						favourPrice: 958,
						tip: '秒杀'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
						title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
						originalPrice: 8888,
						favourPrice: 8288,
						tip: '优惠'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
						title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
						originalPrice: 2899,
						favourPrice: 2799,
						tip: '自营'
					}
				];

				if (action === 'refresh') {
					this.productList = [];
				}

				data.forEach(item => {
					this.productList.push(item);
				});
			}
		},
		onLoad() {
			this.loadData();
			setTimeout(() => {
				this.renderImage = true;
			}, 300);
		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			this.loadData();
		}
	}
</script>

<style scoped>
	@import '../../common/uni-nvue.css';

	.goods-carts {
		position: fixed;
		width: 100%;
		bottom: 90rpx;
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

	.tlt {
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
		bottom: 90rpx;
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

		image {
			width: 100%;
			height: 100%;
		}
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
	.selectedInfo{
		font-weight: 700;
	}
	.midInfo{
		width: 100%;
		height: 520rpx;
		margin-top: 50rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #C0C0C0;
	}
	.clearlyInfo{
		height: 150rpx;
		margin: 20rpx 0;
	}
	.infoChoose{
		height: 100rpx;
		margin: 10rpx 0;
	}
	.infoBtn{
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
	.infoBtn:last-child{
		margin-right: 0;
	}
	.btn-active{
		color: #FD6801;
		background-color: #FCE0D5;
		border: 1rpx solid #FD6801;
	}
	.buyNumber{
		height: 100rpx;
		margin: 15rpx;
		box-sizing: border-box;
		line-height: 100rpx;
	}
	.choseNum{
		float: right;
		margin-top: 15rpx;
	}
	.intoCart{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #FD6801;
	}
</style>
