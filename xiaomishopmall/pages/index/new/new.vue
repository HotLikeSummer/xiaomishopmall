<template>
	<view id="new" :style="{ height: swiperheight_all + 'px' }">
		<!-- 导航栏 -->
		<scroll-view class="scroll-h" id="tab-bar" scroll-x :show-scrollbar="false" :scroll-left="scrollLeft">
			<!-- 循环导航栏内容 -->
			<view v-for="(tab, index) in tabBars" :id="tab.id" class="uni-tab-item" :key="index" :index="index" :data-current="index" @click="tabtap">
				<!-- 绑定样式 -->
				<text class="uni-tab-item-title" :class="tabIndex == index ? 'uni-tab-item-title-active' : ''">{{ tab.text }}</text>
			</view>
		</scroll-view>
		<!-- 对应内容栏 -->
		<swiper class="swiper-box" :style="{ height: swiperheight_s + 'px' }" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(items, index) in num" :key="index">
				<scroll-view class="scroll-y" scroll-y :show-scrollbar="false" :style="{ height: swiperheight_s + 'px' }" @scrolltolower="loadmore(index)">
					<!-- 内容板块 -->
					<view class="box" v-for="(item, index) in productLists" :key="index" :index="index">
						<!-- 背景图 -->
						<view class="box-bg"><image :src="item.cover"></image></view>
						<!-- 去购买 -->
						<view class="uni-media-list uni-pull-right">
							<view class="uni-media-list-logo" @tap="goShop(item,index)">详情</view>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top">{{ item.desc }}</view>
								<view class="uni-media-list-text-bottom uni-ellipsis">{{ item.title }}</view>
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
			tabBars: [
				{
				id: 'index',
				text: "新品发布"
				},
				 {
				id: 'index',
				text: "小米众筹"
				},
				 {
				id: 'index',
				text: "以旧换新"
				},
				{
				id: 'index',
				text: "一分换团"
				},
				{
				id: 'index',
				text: "超值特卖"
				},
				 {
				id: 'index',
				text: "小米秒杀"
				},
				{
				id: 'index',
				text: "真心想要"
				},
				 {
				id: 'index',
				text: "电视热卖"
				},
				{
				id: 'index',
				text: "家电热卖"
				},
				 {
				id: 'index',
				text: "米粉卡"
				}
			],
			//内容
			num: 10,
			//父盒高度
			swiperheight_all: 700,
			//滚轮高度
			swiperheight_s: 700,
			//数据
			productList: [],
			//循环遍历拿到的数组数据
			productLists: [],
			//加载更多图片的下标
			splnum: 0,
			//判断加载
			wans: true,
			//设置导航栏左边距离
			scrollLeft: 0
		};
	},
	onLoad(option) {
		// 计算屏幕剩余高度  填补剩余高度
		uni.getSystemInfo({
			success: res => {
				//屏幕总高度
				this.swiperheight_all = res.windowHeight;
				//console.log(res)
				//console.log(this.swiperheight_all,11)
				let info = uni.createSelectorQuery().select('.swiper-box');
				info.boundingClientRect(data => {
					//console.log(data,111)
					//显示高度
					this.swiperheight_s = data.height;
					//console.log(this.swiperheight_s,12)
				}).exec();
			}
		}),
			//首页传过来的index,赋值，传过来的index对应导航栏的下标
			(this.tabIndex = option.index);
		//this.onMove(option)
		//console.log(option)
	},
	created() {
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
			// 判断当true的时候加载一个
			if (this.wans) {
				let that = this;
				// 然后更改状态
				that.wans = false;
				//获取数据
				setTimeout(() => {
					let obj = that.productLists;
					//console.log(obj);
					//每次刷新加载数据，把新数据加进去
					that.productLists = that.productLists.concat(obj.slice(that.splnum, that.splnum + 1));
					//console.log(that.productLists);
					// 加载之后重新true
					that.wans = true;
				}, 1000);
				//自增
				that.splnum++;
				// 数据里面只有6张图片,所以我们加个判断
				if (that.splnum > 5) {
					that.splnum = 0;
				}
			} else {
				return;
			}
		},
		//去购物车
		goShop(item,index) {
			console.log(item);
			let id=item.id+index
			uni.navigateTo({
				url:"/pages/type/particulars/particulars?id="+id
			})
		},
		//拿数据
		async changShow() {
			let [error, res] = await uni.request({
				url: 'http://ceshi3.dishait.cn/api/index_category/data'
			});
			//导航栏
			//this.tabBars = res.data.data.data[1].data;
			// 加载更多
			this.productList = res.data.data.data[4].data;
			//通过循环遍历
			for (let i in this.productList) {
				this.productLists.push(this.productList[i]);
			}
			//console.log(this.productLists);
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
#new {
	height: 100%;
	display: flex;
	flex-direction: column;
}
/* 导航栏 */
/* .swiper-box {
	margin-bottom: 50rpx;
} */
.scroll-h {
	width: 750upx;
	height: 80upx;
	white-space: nowrap;
	background-color: white;
	font-size: 25rpx;
}
.uni-tab-item {
	display: inline-block;
	text-align: center;
	width: 185rpx;
}

.uni-tab-item-title {
	text-align: center;
	color: #555;
	height: 80upx;
	line-height: 80upx;
	padding: 10rpx 0;
	font-size: 25rpx;
}

.uni-tab-item-title-active {
	color: #fd6801;
	border-bottom: 5upx #fd6801 solid;
}
.box {
	width: 90%;
	height: 600upx;
	margin: 30upx auto;
	border-radius: 5px;
	box-shadow: 2upx 2upx 2upx 2upx #bbbbbb;
}
.box-bg {
	height: 50%;
	width: 100%;
}
.box-bg image {
	width: 100%;
	height: 100%;
}
.uni-media-list {
	border-bottom: 1rpx #b2b2b2 solid;
}
.uni-media-list-body {
	height: 180rpx;
	line-height: 180rpx;
}
.uni-media-list-logo {
	height: 40rpx;
	line-height: 40rpx;
	background-color: #fd6801;
	margin-top: 70rpx;
	padding: 15rpx;
	border-radius: 10rpx;
	color: white;
	text-align: center;
}
.uni-media-more {
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
}
/* 加载更多 */
.load-more {
	text-align: center;
	height: 80upx;
	line-height: 80upx;
}
</style>
