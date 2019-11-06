<template>
	<view id="new" :style="{ height: swiperheight_all + 'px' }">
		<!-- 导航栏 -->
		<scroll-view class="scroll-h" scroll-x>
			<!-- 循环导航栏内容 -->
			<view v-for="(tab, index) in title" class="uni-tab-item" :key="index" :index="index" :data-current="index" @click="tabtap(index)">
				<!-- 绑定样式 -->
				<text class="uni-tab-item-title" :class="tabIndex == index ? 'uni-tab-item-title-active' : ''">{{ tab.text }}</text>
			</view>
		</scroll-view>
		<!-- 对应内容栏 -->
		<swiper class="swiper-box" :style="{ height: swiperheight_s + 'px' }" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(items, index) in num" :key="index">
				<scroll-view class="scroll-y" scroll-y :style="{ height: swiperheight_s + 'px' }" @scrolltolower="loadmore()">
					<view class="box" v-for="(item,index) in productLists" :key="index" :index="index">
						<!-- 背景图 -->
						<view class="box-bg"><image :src="item.cover"></image></view>
						<!-- 去购买 -->
						<view class="uni-media-list uni-pull-right">
							<view class="uni-media-list-logo">
								去购买
							</view>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top">{{item.desc}}</view>
								<view class="uni-media-list-text-bottom uni-ellipsis">{{item.title}}</view>
							</view>
						</view>
						<!-- 了解更多 -->
						<view class="uni-media-more">了解更多</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//导航下标
			tabIndex: 0,
			//导航栏内容
			title: [],
			//内容
			num:10,
			//父盒高度
			swiperheight_all:500,
			//滚轮高度
			swiperheight_s:500,
			//数据
			productList: [],
			//循环遍历拿到的数组数据
			productLists: []
		};
	},
	onLoad() {
		// 计算屏幕剩余高度  填补剩余高度
		uni.getSystemInfo({
			success: (res) => {
				//屏幕总高度
				this.swiperheight_all = res.windowHeight
				//console.log(this.swiperheight_all,11)
				let info=uni.createSelectorQuery().select(".swiper-box")
				info.boundingClientRect(data=>{
				//显示高度
				this.swiperheight_s = data.height
				//console.log(this.swiperheight_s,12)
				}).exec()
			}
		})
	},
	created() {
		this.changShow();
	},
	methods: {
		//导航栏绑定样式
		tabtap(index) {
			this.tabIndex = index;
		},
		//滑动切换swiper
		tabChange(e) {
			this.tabIndex = e.detail.current;
		},
		//拿数据
		async changShow() {
			let [error, res] = await uni.request({
				url: 'http://ceshi3.dishait.cn/api/index_category/data'
			});
			//导航栏
			this.title = res.data.data.data[1].data;
			// 加载更多
			this.productList =res.data.data.data[4].data
			//通过循环遍历
			for(let i in this.productList){
				this.productLists.push(this.productList[i])
			}
			console.log(this.productLists)
		}
	},
	components: {}
};
</script>

<style scoped>
* {
	margin: 0upx;
	padding: 0upx;
	color: #555555;
}
.swiper-box{
	margin-bottom: 50rpx;
}
.scroll-h {
	position: fixed;
	z-index: 999;
	width: 750upx;
	height: 80upx;
	white-space: nowrap;
	background-color: white;
}
.scroll-y {
	margin-top: 80upx;
}
.uni-tab-item {
	display: inline-block;
	padding-left: 34upx;
	padding-right: 34upx;
}

.uni-tab-item-title {
	color: #555;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
	padding: 10rpx 0;
	font-size: 25rpx;
}

.uni-tab-item-title-active {
	color: #fd6801;
	border-bottom: 5upx #fd6801 solid;
}
.box{
	width: 90%;
	height: 600upx;
	margin: 30upx auto;
	border-radius: 5px;
	box-shadow:2upx 2upx 2upx 2upx #BBBBBB;
}
.box-bg{
	height: 50%;
	width: 100%;
}
.box-bg image{
	width: 100%;
	height: 100%;
}
.uni-media-list{
	border-bottom: 1rpx #B2B2B2 solid;
}
.uni-media-list-body{
	height: 180rpx;
	line-height: 180rpx;
}
.uni-media-list-logo{
	height: 40rpx;
	line-height: 40rpx;
	background-color: #FD6801;
	margin-top: 70rpx;
	padding: 15rpx;
	border-radius: 10rpx;
	color: white;
}
.uni-media-more{
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
}
</style>
