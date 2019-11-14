<template>
	<!-- 列表页 -->
	<view id="shoplist">
		<!-- 顶部导航 -->
		<view class="nav">
			<!-- 点击排序 -->
			<view class="nav-top" v-for="(item,index) in navtopList" :key="index" @click="sort(index)">
				<!-- 判断textColor是否等于当前点击下标，等于则文字高亮 -->
				<text class="nav-top-text" :class="textColor==index?'iconcolor':''">{{item.text}}</text>
				<view class="iconTesx">
					<view class="nav-top-icon">
						<!-- 此处item.num==1则升序图标高亮并判断textColor是否等于当前点击下标，等于则当前点击图标高亮 -->
						<text class="iconfont icon-paixu-shengxu" :class="item.num==1 && textColor==index?'iconcolor':''"></text>
						<text class="iconfont icon-paixu-jiangxu" :class="item.num==0 && textColor==index?'iconcolor':''"></text>
					</view>
				</view>
			</view>
			<!-- 点击筛选 -->
			<view class="nav-top-text" @click="show('right')">筛选</view>
		</view>
		<!-- 商品图文列表 -->
		<view class="shop-list-box">
			<view v-for="(item,index) in picTextList" class="picTextLists" :key="index" @click="Particulars(item.id)">
				<!-- 图片 -->
				<view class="shop-list-box-pic">
					<image :src="item.cover"></image>
				</view>
				<!-- 文字 -->
				<view class="shopping-bottom">
					<view class="shop-list-box-title">{{item.title}}</view>
					<view class="classify-text">{{item.desc}}</view>
					<view class="sales">销量:{{item.min_price}}</view>
					<view class="shop-list-box-price">￥{{item.min_price}}</view>
					<view>共1599条评论 满意度{{item.id}}%</view>
				</view>
			</view>
			<!-- 引入抽屉组件 -->
			<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
				<!-- 固定定位 -->
				<view class="screen">
					<view class="screen-serve">服务</view>
					<!-- 服务按钮 -->
					<view>
						<button size="mini" v-for="(item,index) in Btnone" :key="index" class="hot-search-btn" :class="Num==index?'acvtions':''"
						 @click="BtnReset(index)">{{item}}</button>
					</view>
					<view class="screen-serve">分类</view>
					<!-- 分类按钮 -->
					<view>
						<button size="mini" v-for="(item,index) in Btntow" :key="index" class="hot-search-btn" :class="Confirm==index?'acvtions':''"
						 @click="BtnConfirm(index)">{{item}}</button>
					</view>
					<!-- 重置及确定按钮 -->
					<view class="hot-search-reset">
						<!-- 给当前点击按钮添加背景颜色 -->
						<button size="default" v-for="(item,index) in SearchReset" :key="index" class="feature" :class="Reset==index?'acvtion':''"
						 @click="SearchResets(index)">{{item}}</button>
					</view>
				</view>
			</uni-drawer>
		</view>
	</view>

</template>

<script>
	// 引入抽屉组件
	import UniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	//引入状态管理
	import {mapState} from 'vuex'
	export default {
		name: 'UniShopList',
		//注册组件
		components: {
			UniDrawer
		},
		//展开对象
		 computed:{
			...mapState(['good','productsList'])
		 },
		data() {
			return {
				SearchReset: ["重置", "确定"],
				navtopList: [{text:"综合",num:0},{text:"销量",num:0},{text:"价格",num:0}],
				Btnone: ["促销", "分期", "仅看有货"],
				Btntow: ["耳机", "户外", "配件"],
				Num: 0, //服务按钮
				Confirm: 0, //分类按钮
				Reset: 0, // 重置及确定按钮
			    textColor:0,//字体颜色
				showRigth: false, //抽屉显示隐藏
				picTextList: [],//数据列表
				rank:["id","min_price","min_price"],//排序
			}
		},
		//钩子函数
		created() {
			for (let i=0;i<5;i++) {
				this.$store.dispatch("getProduct",i)
			}
			this.picTextList = this.productsList
		},
		methods: {
			// 重置及确定按钮功能
			SearchResets(index) {
				let that = this;
				that.Reset = index;
				//当index等于0表示重置按钮，否则是确定按钮
				if (index == 0) {
					that.Num = 0;
					that.Confirm = 0;
				} else {
					this.showRigth = false;
				}
			},
			//服务按钮
			BtnReset(index) {
				let that = this;
				that.Num = index;
			},
			//分类按钮
			BtnConfirm(index) {
				let that = this;
				that.Confirm = index;
			},
			// 组件关闭时触发的事件
			closeDrawer(e) {
				if (e === 'right') {
					this.showRigth = false
				}
			},

			// 跳转到详情页面
			Particulars(e) {
				uni.navigateTo({
					url: '/pages/type/particulars/particulars?id=' +e,
				});
			},
			//点击筛选
			show(e) {
				if (e === "right") {
					this.showRigth = true;
				}
			},
			//排序
			sort(e){
				let _this = this;
				//字体颜色等于当前点击下标
				_this.textColor = e;
				//循环要排序的数组
				for (let i = 0; i < _this.navtopList.length; i++) {
					//当前字体图标
					if (e == i) {
						if (_this.navtopList[i].num == 0) {
							this.picTextList=this.picTextList.sort(this.ascending(this.rank[e]))//小到大
							_this.navtopList[i].num = 1;//向上字体图标的颜色变色
						} else {
							this.picTextList=this.picTextList.sort(this.descendding(this.rank[e]))//大到小
							_this.navtopList[i].num = 0;//向下字体图标的颜色变色
						}
					} else {//默认图标向上
						_this.navtopList[i].num = 1;
					}
				}
				
			},
			// 升序
			ascending(property){
				return function(a,b){
				    var value1 = a[property];
				    var value2 = b[property];
				    return value1 - value2;
				}
				
			},
			// 降序
			descendding(property){
				return function(a,b){
				    var value1 = b[property];
				    var value2 = a[property];
				    return value1 - value2;
				}
			}
		},
	}
</script>
<style scoped>
	* {
		margin: 0rpx;
		padding: 0rpx;
		color: #555555;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0rpx 42rpx;
	}

	.nav-top {
		position: relative;
	}

	.iconfont {
		font-size: 40rpx;
		width: 50rpx;
		overflow: hidden;
		text-align: center;
	}

	.icon-paixu-shengxu {
		position: absolute;
		top: -8rpx;
		left: 54rpx;
	}

	.iconcolor {
		color: #fd964f;
	}

	.icon-paixu-jiangxu {
		position: absolute;
		top: -8rpx;
		left: 54rpx;
	}

	.nav-top-text {
		font-size: 30rpx;
		float: left;
	}

	.picTextLists {
		display: flex;
	}

	.shop-list-box-pic {
		width: 35%;
		margin: 4rpx 10rpx;
	}

	.shop-list-box-pic image {
		width: 260rpx;
		height: 300rpx;
	}

	.shop-list-box-title {
		font-weight: 800;
		font-size: 38rpx;
		height: 70rpx;
	}

	.sales {
		height: 44rpx;
	}

	.classify-text {
		width: 100%;
		height: 76rpx;
		line-height: 1.4 !important;
		padding: 0;
		margin: 0;
		color: #8C949B;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 26rpx;
	}

	.shopping-bottom {
		width: 65%;
		height: 240rpx;
		padding-left: 10rpx;
		padding-right: 15rpx;
	}

	.shop-list-box-price {
		font-weight: 800;
		font-size: 40rpx;
		height: 56rpx;
		line-height: 1.5 !important;
		color: #FD6801;
	}


	/* 固定定位 */
	.screen {
		width: 120% !important;
		height: 100% !important;
		background: white;
		position: fixed;
		top: 0rpx;
		right: 0rpx;
		z-index: 10;
		padding: 0rpx 20rpx;
	}

	/* 遮罩层 */
	/* .masklayer{
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.3;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index: 9;
	} */
	.screen-serve {
		margin-top: 130rpx;
		margin-bottom: 30rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #000000;
	}

	.hot-search-btn {
		margin: 0rpx 5rpx;
		border: 1rpx solid #EEEEEE;
	}

	.hot-search-reset {
		position: fixed;
		bottom: 20rpx;
		left: -102rpx;
		display: flex;
	}

	.feature {
		width: 260rpx;
		margin-right: 10rpx;
		display: inline-block;
	}

	.acvtion {
		background: #FD6801;
		color: white;
	}

	.acvtions {
		border: 1rpx solid #FD6801;
		color: #FD6801;
	}
</style>
