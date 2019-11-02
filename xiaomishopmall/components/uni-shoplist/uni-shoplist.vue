<template>
	<view>
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
			<view  v-for="(item,index) in picTextList" class="picTextLists" :key="index">
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
	import UniDrawer from "@/components/uni-drawer/uni-drawer.vue"
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
			// onNavigationBarButtonTap(e) {// 导航按钮监听事件
			// 	this.showRigth = !this.showRigth
			// },
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
			}
		}
	}
</script>
<style scoped>
	*{
		margin: 0upx;
		padding: 0upx;
		color: #555555;
	}
	.nav{
		display: flex;
		justify-content: space-between;
	}
	.nav-top {
		display:inline-block;
		height: 80upx;
		line-height: 80upx;
		padding: 0upx 60upx;
	}

	.nav-top-text {
		justify-content: space-around;
		font-size: 30upx;
		flex-wrap: nowrap;
		white-space: nowrap;
	}

	.picTextLists {
		display: flex;
	}

	.shop-list-box-pic {
		margin: 15upx 35upx;
	}

	.shop-list-box-pic image {
		width: 200upx;
		height: 240upx;
	}

	.shop-list-box-title {
		font-weight: 800;
		font-size: 40upx;
	}

	.shop-list-box-price {
		font-weight: 800;
		font-size: 40upx;
		color: #FD6801;
	}

	.nav-top-icon {
		position: relative;
		display: inline-block;
	}

	.icon-paixu-shengxu {
		position: absolute;
		left: 0upx;
		top: -43upx;
		color: #B2B2B2;
	}

	.icon-paixu-jiangxu {
		position: absolute;
		left: 0upx;
		bottom: -24upx;
		color: #B2B2B2;
	}
	/* 固定定位 */
	.screen{
		width: 120% !important;
		height: 100% !important;
		background: white;
		position: fixed;
		top: 0upx;
		right: 0upx;
		z-index: 10;
		padding: 0upx 20upx;
	}
	/* 遮罩层 */
	/* .masklayer{
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.3;
		position: fixed;
		top: 0upx;
		left: 0upx;
		z-index: 9;
	} */
	.screen-serve{
		margin-top: 130upx;
		margin-bottom: 30upx;
		height: 50upx;
		line-height: 50upx;
		color: #000000;
	}
	.hot-search-btn{
		margin: 0upx 5upx;
		border: 1upx solid #EEEEEE;
	}
	.hot-search-reset{
		position: fixed;
		bottom: 20upx;
		left: -102upx;
		display: flex;
	}
	.feature{
		width: 260upx;
		margin-right: 10upx;
		display: inline-block;
	}
	.acvtion{
		background: #FD6801;
		color: white;
	}
	.acvtions{
		border: 1upx solid #FD6801;
		color: #FD6801;
	}
</style>
