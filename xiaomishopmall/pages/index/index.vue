<template>
	<view id="pgIndex" :style="{ height: swiperheight_all + 'px' }">
		<!-- 导航栏 -->
		<scroll-view class="scroll-h" id="tab-bar" scroll-x :show-scrollbar="false" :scroll-left="scrollLeft">
			<!-- 循环导航栏内容 -->
			<view v-for="(tab, index) in tabBars" :id="tab.id" class="uni-tab-item" :key="index" :index="index" :data-current="index" @click.stop="tabtap">
				<!-- 绑定样式 -->
				<text class="uni-tab-item-title" :class="tabIndex == index ? 'uni-tab-item-title-active' : ''">{{ tab.text }}</text>
			</view>
		</scroll-view>
		<!-- 内容 -->
		<swiper class="swiper-box" :style="{ height: swiperheight_s + 'px' }" :current="tabIndex" @change.stop="tabChange">
			<swiper-item v-for="(items, index) in num" :key="index" :index="index">
				<scroll-view class="scroll-y" scroll-y :style="{ height: swiperheight_s + 'px' }" @scrolltolower="loadmore(index)" :show-scrollbar="false">
					<!-- 第一页的轮播 -->
					<view class="swiper">
						<!-- 轮播样式 -->
						<swiper indicator-dots autoplay circular interval="2000" duration="1000" class="swiper-s">
							<block v-for="(item, index) in img" :index="index" :key="index">
								<swiper-item><img :src="item.src" /></swiper-item>
							</block>
						</swiper>
					</view>
					<!-- 商品分类 -->
					<view class="hotprod">
						<view class="scroll_hotprods">
							<!-- 第一行 -->
							<view class="hotprods" v-for="(item, index) in hotprods" :key="index" :index="index" @tap="toNew(index)">
								<img :src="item.src" />
								<view>{{ item.text }}</view>
							</view>
						</view>
					</view>
					<!-- 广告 -->
					<view class="advert" v-show="tabIndex == 0">
						<img :src="advert[0].src" class="advert-one" />
						<img :src="advert[1].src" class="advert-two" />
						<img :src="advert[2].src" class="advert-three" />
					</view>
					<!-- 加载更多 -->
					<view class="uni-product-list">
						<view class="uni-product" v-for="(product, index) in productLists" :key="index" :index="index" @tap="goShow(product,index)">
							<view class="image-view"><image class="uni-product-image" :src="product.cover"></image></view>
							<view class="uni-product-title">{{ product.desc }}</view>
							<view class="uni-product-price">
								<text class="uni-product-price-favour">￥{{ product.oprice }}</text>
								<text class="uni-product-price-original">￥{{ product.pprice }}</text>
								<text class="uni-product-tip">{{ product.id }}</text>
							</view>
						</view>
					</view>
					<!-- 加载更多 -->
					<view class="load-more">{{ loadtext }}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
export default {
	data() {
		return {
			//板块数量
			num: 7,
			//定义屏幕高度
			swiperheight_all: 700,
			//定义滚动高度
			swiperheight_s: 700,
			//导航栏下标
			tabIndex:0,
			//导航栏滚动
			tabBars: [
				{
					id: 'index',
					text: '推荐'
				},
				{
					id: 'index',
					text: '手机'
				},
				{
					id: 'index',
					text: '智能'
				},
				{
					id: 'index',
					text: '电视'
				},
				{
					id: 'index',
					text: '笔记本'
				},
				{
					id: 'index',
					text: '家电'
				},
				{
					id: 'index',
					text: '生活周边'
				}
			],
			//轮播
			img: [],
			//商品分类
			hotprods: [],
			// 广告
			advert: [],
			// 加载更多
			loadtext: '上拉加载更多',
			//数据
			productList: [],
			//循环遍历拿到的数组数据
			productLists: [],
			//设置导航栏左边距离
			scrollLeft: 0
		};
	},
	onLoad() {
		// 计算屏幕剩余高度  填补剩余高度
		uni.getSystemInfo({
			success: res => {
				//屏幕总高度
				this.swiperheight_all = res.windowHeight;
				//console.log(this.swiperheight_all,11)
				let info = uni.createSelectorQuery().select('.swiper-box');
				info.boundingClientRect(data => {
					//显示高度
					this.swiperheight_s = data.height;
					//console.log(this.swiperheight_s,12)
				}).exec();
			}
		})
	},
	created() {
		//在生命周期里面调用首页的函数
		this.changShow();
	},
	methods: {
		//点击事件
		tabtap(e){
			//传参，this改变指向
			this.$func.tabtap(e,this)
		},
		//滑动事件
		tabChange(e){
			this.$func.tabChange(e,this)
		},
		//获取元素数据
		getElSize(id){
			this.$func.getElSize(id)
		},
		//加载更多
		loadmore(index) {
			console.log(this.loadtext);
			if (this.loadtext == '上拉加载更多') {
				//修改状态
				this.loadtext = '加载中...';
				//获取数据
				let that = this;
				setTimeout(() => {
					let obj = that.productLists;
					console.log(obj);
					//每次刷新加载数据，把新数据加进去
					that.productLists = that.productLists.concat(obj.slice(0, 6));
					console.log(that.productLists);
					that.loadtext = '上拉加载更多';
				}, 1000);
			} else {
				return;
			}
		},
		//拿到首页的数据，用data数据来接收
		async changShow() {
			let [error, res] = await uni.request({
				url: 'http://ceshi3.dishait.cn/api/index_category/data'
			});
			// 导航栏
			//this.tabBars = res.data.data.category;
			// 轮播
			this.img = res.data.data.data[0].data;
			//商品分类
			this.hotprods = res.data.data.data[1].data;
			//广告
			this.advert = res.data.data.data[2].data;
			// 加载更多
			this.productList = res.data.data.data[4].data;
			//通过循环遍历
			for (let i in this.productList) {
				this.productLists.push(this.productList[i]);
			}
			console.log(this.productLists);
		},
		//调往最新页面
		toNew(index) {
			console.log(index);
			uni.navigateTo({
				url: 'new/new?index=' + index
			});
		},
		//调往详情
		goShow(product,index) {
			console.log(product);
			let id=product.id+index
			uni.navigateTo({
				url:"../type/particulars/particulars?id="+id
			})
		},
		//搜索
		onNavigationBarSearchInputClicked(e) {
			uni.navigateTo({
				url: '/pages/type/detail/detail'
			});
		}
	}
};
</script>

<style scoped>
* {
	margin: 0upx;
	padding: 0upx;
	color: #555555;
}
#pgIndex {
	height: 100%;
	display: flex;
	flex-direction: column;
}
/* 导航栏 */
/* .swiper-box{
	margin-bottom: 50rpx;
} */
.scroll-h {
	width: 750upx;
	height: 80upx;
	font-size: 25rpx;
	white-space: nowrap;
	background-color: white;
}
/* 轮播 */
.swiper-s {
	height: 400rpx;
}
.swiper-s img {
	width: 100%;
	height: 100%;
}
.uni-tab-item {
	height: 80upx;
	display: inline-block;
	width: 125rpx;
	text-align: center;
}
.uni-tab-item-title {
	color: #555;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
	padding: 15rpx 0;
	font-size: 25rpx;
}

.uni-tab-item-title-active {
	color: #fd6801;
	border-bottom: 5upx #fd6801 solid;
}
/* 商品系列 */
.scroll_hotprods {
	font-size: 16upx;
	color: gray;
	flex-wrap: wrap;
	justify-content: space-between;
	display: block;
	text-align: center;
}

.hotprods {
	padding: 20rpx 19rpx;
	display: inline-block;
}

.scroll_hotprods img {
	margin: 10rpx;
	width: 80rpx;
	height: 80rpx;
}
/* 广告 */
.advert {
	overflow: hidden;
	width: 100%;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
}
.advert-one {
	width: 49%;
	float: left;
	height: 526upx;
}
.advert-two {
	width: 49%;
	height: 255upx;
	float: right;
	padding-bottom: 16upx;
}
.advert-three {
	width: 49%;
	height: 255upx;
	float: right;
}
/* 加载更多 */
.uni-product {
	padding: 23rpx;
}
.image-view {
	display: flex;
}
.uni-product-image {
	width: 100%;
	height: 100%;
	margin: auto;
}
.load-more {
	text-align: center;
	height: 80upx;
	line-height: 80upx;
}
</style>
