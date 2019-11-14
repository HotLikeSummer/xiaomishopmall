<template>
	<!-- 商品详情页 -->
	<view id="particulars">
		<!-- 商品文字详情 -->
		<view class="bottom-text">
			<!-- cpu横向滚动 @scroll="Scroll"-->
			<view class="processor">
				<scroll-view class="scroll-h" scroll-x="true">
					<view v-for="(item,index) in 6" class="scroll-box " :key="index">
						<view class="iconfont icon-cpu scroll-cpu"></view>
						<view class="scroll-cpu">CPU</view>
						<view class="scroll-cpu">绞龙845八核</view>
					</view>
				</scroll-view>
			</view>
			<!-- 列表 -->
			<view class="uni-list">
				<view class="selected list" @click="shopCart(good)">已选
					<text>火焰红</text>
					<text>64G</text>
					<text>标配</text>
					<uni-icons type="arrowright" size="22" class="listright"></uni-icons>
				</view>
				<view class="delivery list" @click="DeliveryShow">配送
					<text>北京</text>
					<text>东城区</text>
					<text style="color: #FD6801;">有现货</text>
					<uni-icons type="arrowright" size="22" class="listright"></uni-icons>
				</view>
				<view class="service list" @click="ServiceShow">
					<text class="iconfont icon-iconfontxuanzhong4"></text>小米自营
					<text class="iconfont icon-iconfontxuanzhong4"></text>小米发货
					<text class="iconfont icon-iconfontxuanzhong4"></text>七天无理由退换
					<uni-icons type="arrowright" size="22" class="listright"></uni-icons>
				</view>
			</view>
			<shopcart-card :arr="sends" class="shopcarts"></shopcart-card>
			<!-- 更多评论-->
			<scroll-view class="uni-discuss" scroll-x="true">
				<view class="comment" v-for="(item,index) in discussa" :key="index">
					<view class="comment-top">
						<view class="comment-left">
							<image :src="item.pic" class="commentpic"></image>
							<view class="commentText">
								<view class="commentname">{{item.name}}</view>
								<view class="commentdata">{{item.date}}</view>
							</view>
						</view>
						<view class="comment-right">
							<text class="iconfont icon-dianzan"></text>
							<text>{{item.num}}</text>
						</view>
					</view>
					<view class="comment-bottom">
						<view class="commentname" style="text-indent: 1em;">{{item.tst}}</view>
						<view class="commentimgs">
							<image :src="item.imgsone"></image>
							<image :src="item.imgstow"></image>
							<image :src="item.imgsthree"></image>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="more-comment">更多评论 <text class="iconfont icon-you"></text> </view>
		</view>
		<!-- 懒加载图片 -->
		<view class="lazyload">
			<view class="lazyimg">
				<image v-for="(item,index) in Lazyimages" :key="index" :src="item" class="pics"></image>
			</view>
		</view>
		<!-- 为你推荐 -->
		<view class="recommend">
			<view class="recommend-Text">
				为你推荐
			</view>
			<view class="recommend-list">
				<view v-for="(item,index) in recommends" :key="index" class="yourecd">
					<view class="recommend-pic">
						<image :src="item.pic"></image>
					</view>
					<view>
						<text>{{item.title}}</text>
					</view>
					<view>
						<text style="color: #929292;">{{item.text}}</text>
					</view>
					<view>
						<text style="color: #DD524D;">￥{{item.price}}</text>
						<text class="originals">￥{{item.original}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 固定定位 -->
		<view class="fiex">
			<view class="xihuan" @click="collected">
				<view class="iconfont icon-xihuan" :class="fiexcolor?'active':''"></view>
				<text :class="fiexcolor?'active':''">{{collecteds}}</text>
			</view>
			<view class="xihuan" @click="toShop">
				<view class="iconfont icon-gouwuche1"></view>
				<text>购物车</text>
			</view>
			<view class="gouwuche" @click="shopCart(good)">加入购物车</view>
		</view>
		<!-- 详服务说明详情页固定定位 -->
		<view v-show="showLeft">
			<!-- 遮罩层 -->
			<view class="shadow" @click="confim"></view>
			<view class="fiexbox">
				<view class="details-box">
					<view class="details-box-top">服务说明</view>
					<view>
						<view class="details-box-list" v-for="(item,index) in Servicenote" :key="index">
							<text class="iconfont icon-iconfontxuanzhong4"></text>
							<text style="padding-left: 10upx; font-weight: 500;">{{item}}</text>
						</view>
						<view class="qued" @click="confim">确定</view>
					</view>
				</view>
			</view>

		</view>
		<!-- 配送详情页 -->
		<view v-show="showRigth">
			<view class="fiexbox">
				<view class="details-box">
					<view class="details-box-top">收货地址</view>
					<text class="iconfont icon-dingwei" style="padding: 0upx 10upx;"></text>
					<text>{{ckAddress.name}} {{ckAddress.phone}}</text>
					<view>{{ckAddress.area}}{{ckAddress.address}}</view>
				</view>
				<view class="qued" @click="fresh" data-id="1">选择新的地址</view>
			</view>
			<!-- 遮罩层 -->
			<view class="shadow" @click="site"></view>
		</view>
	</view>
</template>

<script>
	import UniIcons from "@/components/Uni-Icons/uni-icons.vue"
	import shopcartCard from "@/components/shopcartCard/shopcartCard.vue"
	import {mapState,mapGetters} from "vuex"
	import addlist from "@/pages/user/data/address.js"
	export default {
		name: 'UniParticulars',
		components: {
			shopcartCard,
			UniIcons
		},
		data() {
			return {
				shopdata:[],
				sends: [], //接收子组件数据
				scrollTop: 0, //窗口顶部距离
				discussa: [
					//更多评论部分
					{
						pic: "/static/images/demo/demo6.jpg",
						name: "楚绵",
						date: "2019-06-20",
						num: 164,
						tst: "支持帝莎IT学院继续出uni-app实战教程",
						imgsone: "/static/images/demo/list/2.jpg",
						imgstow: "/static/images/demo/list/4.jpg",
						imgsthree: "/static/images/demo/list/2.jpg",
						index:0
					},
					{
						pic: "/static/images/demo/demo6.jpg",
						name: "楚绵",
						date: "2019-06-20",
						num: 164,
						tst: "支持帝莎IT学院继续出uni-app实战教程",
						imgsone: "/static/images/demo/list/2.jpg",
						imgstow: "/static/images/demo/list/4.jpg",
						imgsthree: "/static/images/demo/list/2.jpg",
						index:0
					}
				],
				//懒加载的图片
				Lazyimages: ["/static/images/demo/list/1.jpg", "/static/images/demo/list/2.jpg", "/static/images/demo/list/3.jpg",
					"/static/images/demo/list/4.jpg", "/static/images/demo/list/5.jpg", "/static/images/demo/list/6.jpg"
				],
				//为你推荐
				recommends: [{
					pic: "/static/images/demo/list/3.jpg",
					title: "米家空调",
					text: "1.5匹支流变频",
					price: 2199,
					original: 2699
				}, {
					pic: "/static/images/demo/list/4.jpg",
					title: "米家空调",
					text: "1.5匹支流变频",
					price: 2199,
					original: 2699
				}, {
					pic: "/static/images/demo/list/6.jpg",
					title: "米家空调",
					text: "1.5匹支流变频",
					price: 2199,
					original: 2699
				}, {
					pic: "/static/images/demo/list/5.jpg",
					title: "米家空调",
					text: "1.5匹支流变频",
					price: 2199,
					original: 2699
				}],
				Servicenote: ["小米自营", "小米发货", "七天无理由退换", "运费说明"], //服务说明数据
				showRigth: false, //配送显示隐藏
				showLeft: false, //服务说明显示隐藏
				fiexcolor: false,
				collecteds: "收藏",
				increasenum: false,
			}
		},
		methods: {
			shopCart(obj) {
				this.togglepop = !this.togglepop
				obj.num=1;
				obj.kind={
					color:"火焰红",
					capacity:"64GB",
					suit:"标配"
				}
				obj.ischeck=1
				this.sends = [obj, this.togglepop];
			},
			// 服务说明显示
			ServiceShow() {
				if (this.showLeft == false) {
					this.showLeft = true;
				} else {
					this.showLeft == false
				}
			},
			// 服务说明隐藏
			confim() {
				this.showLeft = false;
			},
			// 收货地址显示
			DeliveryShow() {
				if (this.showRigth == false) {
					this.showRigth = true;
				} else {
					this.showRigth == false;
				}
			},
			// 去地址页
			fresh(e) {
				let id =e.currentTarget.dataset.id;
				uni.navigateTo({
					url: '/pages/user/userlist/addresslist?id='+id+'',
				});
			},
			//去购物车
			toShop() {
				uni.switchTab({
					url: "/pages/shopcar/shopcar"
				})
			},
			//服务说明隐藏
			site() {
				this.showRigth = false;
			},
			//收藏部分
			collected() {
				if (this.fiexcolor == false) {
					this.fiexcolor = true;
					this.collecteds = "已收藏"
				} else {
					this.fiexcolor = false;
					this.collecteds = "收藏"
				}
			},
			
		},
		computed:{
			...mapState(["good","list"]),
			...mapGetters(["ckAddress"])
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	.bottom-text>>>.modaiBox {
		bottom: 0rpx !important;
		width: 100%;
	}
	.bottom-text {
		padding: 0upx 10upx;
	}


	.scroll-box {
		width: 200upx;
		height: 150upx;
		display: inline-block;
		line-height: 150upx;
		text-align: center;
		font-size: 36upx;
	}

	.scroll-box .scroll-cpu {
		height: 40upx;
	}

	.scroll-h {
		width: 100%;
		white-space: nowrap;
	}
	
	.uni-list {
		width: 99%;
		height: 300upx;
		background-color: #F5F5F3;
		border: 1upx solid #EEEEEE;
		color: #B2B2B2;
		margin: 0upx 4upx 30upx 4upx;
	}

	.uni-list .list {
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #EEEEEE;
		padding-left: 30upx;
	}

	.icon-iconfontxuanzhong4 {
		color: #FD6801;
	}

	.uni-list .list text {
		padding: 0upx 8upx;
	}

	.listright {
		line-height: 100upx;
		float: right;
		padding-right: 20upx;
	}

	/* 更多评论 */
	.comment {
		width: 560upx;
		height: 420upx;
		display: inline-block;
		background-color: #F5F5F3;
		border: 1upx solid #EEEEEE;
		margin: 0upx 5upx;
	}

	.uni-discuss {
		width: 100%;
		white-space: nowrap;
	}

	.comment-top {
		height: 100upx;
		line-height: 100upx;
		padding: 20upx 15upx;
	}

	.comment-left {
		float: left;
	}

	.comment-right {
		float: right;
		color: #BEBEBE;
	}

	.actions {
		color: #FD6801;
	}

	.commentpic {
		float: left;
		width: 80upx;
		height: 80upx;
		border-radius: 40upx;
		margin-right: 20upx;
	}

	.commentText {
		float: left;
	}

	.commentname {
		font-weight: 800;
		height: 40upx;
	}

	.commentdata {
		color: #BEBEBE;
		height: 40upx;
	}

	.commentimgs {
		margin-top: 20upx;
		height: 200upx;
	}

	.commentimgs image {
		width: 186upx;
		height: 180upx;
	}

	.more-comment {
		height: 120upx;
		line-height: 120upx;
		color: #6AA0C0;
		text-align: center;
	}

	/* 懒加载 */
	.lazyimg {
		width: 100%;
	}

	.lazyimg .pics {
		width: 100%;
		height: 720upx;
	}

	/* 购物车固定定位 */
	.fiex {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10;
		display: flex;
	}

	.fiex .active {
		color: #FD6801;
	}

	.xihuan {
		width: 200upx;
		text-align: center;
	}

	.icon-xihuan {
		padding-top: 2upx;
		height: 50upx;
		font-size: 40upx;
		color: #888888;
	}

	.icon-gouwuche1 {
		padding-top: 2upx;
		height: 50upx;
		font-size: 40upx;
		color: #888888;
	}

	.gouwuche {
		width: 350upx;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: #FFFFFF;
		background-color: #FD6801;
	}

	/* 为你推荐 */

	.yourecd {
		width: 350upx;
		height: 500upx;
		float: left;
		text-align: center;
		margin: 0upx 10upx;
	}

	.recommend {
		height: 1200upx;
	}

	.recommend-Text {
		height: 80upx;
		line-height: 80upx;
		text-indent: 1em;
	}

	.recommend-pic {
		width: 356upx;
		height: 350upx;
	}

	.originals {
		text-decoration: line-through;
		color: #929292;
		padding-left: 8upx;
	}

	.fiexbox {
		width: 100%;
		height: 70%;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 998;
		border-top-left-radius: 5%;
		border-top-right-radius: 5%;
	}
	.animat{
		transition: all .3s;
		transform: translateY(100%);
	}
	/* 遮罩层 */
	.shadow {
		position: fixed;
		top: 0;
		left: 0;
		background: #333333;
		opacity: 0.3;
		width: 100%;
		height: 100%;
		z-index: 666;
	}

	.details-box {
		width: 100%;
		height: 100%;
	}

	.details-box-top {
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		font-weight: 800;
		border-bottom: 1upx solid #E9E9E9;
	}

	.details-box-list {
		height: 80upx;
		line-height: 80upx;
		padding-left: 20upx;
	}

	.qued {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background-color: #FD6801;
		color: white;
		text-align: center;
		position: absolute;
		bottom: 0;
	}
</style>
