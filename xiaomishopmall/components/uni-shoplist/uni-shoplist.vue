<template>
	<view id="shoplist">
		<!-- 顶部导航 -->
		<view class="nav">
		<view class="nav-top" v-for="(item,index) in navtopList" :key="index">
			<text class="nav-top-text"  @click="show('right',index)" >{{item}}</text>
			<view class="nav-top-icon">
				<text class="iconfont icon-paixu-shengxu"></text>
				<text class="iconfont icon-paixu-jiangxu"></text>
			</view>
		</view>
		</view>
		<!-- 商品图文列表 -->
		<view class="shop-list-box">
			<view  v-for="(item,index) in picTextList" class="picTextLists" :key="index" @click="Particulars">
				<view class="shop-list-box-pic">
					<image :src="item.PIC"></image>
				</view>
				<view>
					<h1 class="shop-list-box-title">{{item.TITLE}}</h1>
					<view>{{item.CLASSIFY}}</view>
					<view class="shop-list-box-price">{{item.PRICE}}</view>
					<view>{{item.COMMENT}}</view>
				</view>
			</view>
			<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')" >
				<!-- 固定定位 -->
				<view class="screen">
					<view class="screen-serve">服务</view>
					<view>
						<button size="mini" v-for="(item,index) in Btnone" :key="index" class="hot-search-btn" :class="Num==index?'acvtions':''" @click="BtnReset(index)">{{item}}</button>
					</view>
					<view class="screen-serve">分类</view>
					<view>
						<button size="mini" v-for="(item,index) in Btntow" :key="index" class="hot-search-btn" :class="Confirm==index?'acvtions':''" @click="BtnConfirm(index)">{{item}}</button>
					</view>
					<view class="hot-search-reset">
						<button size="default" v-for="(item,index) in SearchReset" :key="index" class="feature" :class="Reset==index?'acvtion':''" @click="SearchResets(index)">{{item}}</button>
					</view>
				</view>
			</uni-drawer>
		</view>
	</view>

</template>

<script>
	import UniDrawer from "@/components/uni-Drawer/uni-drawer.vue"
	export default {
		components:{UniDrawer},
		name: 'UniShopList',
		data() {
			return {
				SearchReset:["重置","确定"],
				navtopList: ["综合", "销量", "价格","筛选"],
				picTextList: [{
					PIC: "/static/images/demo/cate_01.png",
					TITLE: "真无限蓝牙耳机",
					CLASSIFY: "雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
					PRICE: "￥199",
					COMMENT: "1348条评论 98%满意"
				}, {
					PIC: "/static/images/demo/cate_01.png",
					TITLE: "真无限蓝牙耳机",
					CLASSIFY: "雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
					PRICE: "￥199",
					COMMENT: "1348条评论 98%满意"
				}, {
					PIC: "/static/images/demo/cate_01.png",
					TITLE: "真无限蓝牙耳机",
					CLASSIFY: "雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
					PRICE: "￥199",
					COMMENT: "1348条评论 98%满意"
				}, {
					PIC: "/static/images/demo/cate_01.png",
					TITLE: "真无限蓝牙耳机",
					CLASSIFY: "雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
					PRICE: "￥199",
					COMMENT: "1348条评论 98%满意"
				}, {
					PIC: "/static/images/demo/cate_01.png",
					TITLE: "真无限蓝牙耳机",
					CLASSIFY: "雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
					PRICE: "￥199",
					COMMENT: "1348条评论 98%满意"
				}],
				Btnone:["促销","分期","仅看有货"],
				Btntow:["耳机","户外","配件"],
				Num:0,//服务按钮
				Confirm:0,//分类按钮
				Reset:0,// 重置及确定按钮
				// ShopFixeds:0,
				showRigth:false,//抽屉显示隐藏
				showLeft: false
			}
		},
		methods:{
			// 重置及确定按钮
			SearchResets(index){
				let that=this;
				that.Reset=index;
				
				if(index==0){
					that.Num=0;
					that.Confirm=0;
				}else{
					this.showRigth=false;
				}
			},
			//服务按钮
			BtnReset(index){
				let that=this;
				that.Num=index;
			},
			//分类按钮
			BtnConfirm(index){
				let that=this;
				that.Confirm=index;
			},
			// 组件关闭时触发的事件
			closeDrawer(e) {
				if (e === 'left') {
					this.showLeft = false
				} else {
					this.showRigth = false
				}
			},
			// 点击筛选时显示
			show(e,index){
				//当index为3时代表是筛选
				if(index==3){
					if(e==="right"){
						this.showRigth=true;
					}
				}else{
					return false
				}
			},
			// 跳转到详情页面
			Particulars(){
				uni.navigateTo({
					url: '/pages/type/particulars/particulars',
				});
			}
		}
	}
</script>
<style scoped>
	*{
		margin: 0rpx;
		padding: 0rpx;
		color: #555555;
	}
	.nav{
		display: flex;
		justify-content: space-between;
	}
	.nav-top {
		display:inline-block;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0rpx 60rpx;
	}

	.nav-top-text {
		justify-content: space-around;
		font-size: 30rpx;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	.picTextLists {
		display: flex;
	}

	.shop-list-box-pic {
		margin: 15rpx 35rpx;
	}

	.shop-list-box-pic image {
		width: 200rpx;
		height: 240rpx;
	}

	.shop-list-box-title {
		font-weight: 800;
		font-size: 40rpx;
	}

	.shop-list-box-price {
		font-weight: 800;
		font-size: 40rpx;
		color: #FD6801;
	}

	.nav-top-icon {
		position: relative;
		display: inline-block;
	}

	.icon-paixu-shengxu {
		position: absolute;
		left: 0rpx;
		top: -38rpx;
		color: #B2B2B2;
	}

	.icon-paixu-jiangxu {
		position: absolute;
		left: 0rpx;
		bottom: -18rpx;
		color: #B2B2B2;
	}
	/* 固定定位 */
	.screen{
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
	.screen-serve{
		margin-top: 130rpx;
		margin-bottom: 30rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #000000;
	}
	.hot-search-btn{
		margin: 0rpx 5rpx;
		border: 1rpx solid #EEEEEE;
	}
	.hot-search-reset{
		position: fixed;
		bottom: 20rpx;
		left: -102rpx;
		display: flex;
	}
	.feature{
		width: 260rpx;
		margin-right: 10rpx;
		display: inline-block;
	}
	.acvtion{
		background: #FD6801;
		color: white;
	}
	.acvtions{
		border: 1rpx solid #FD6801;
		color: #FD6801;
	}
</style>
