<template>
	<view>
		<!-- 引入弹框组件 -->
		<uni-popup ref="popup" :type="type" :custom="true" class="modaiBox">
			<view class="modaiCon">
				<view class="goods">
					<view class="topInfo">
						<view class="goodsImg">
							<image src="/static/images/demo/cate_01.png"></image>
						</view>
						<view class="goods_info">
							<!-- 已选商品信息 -->
							<view class="goodsPrice">￥<text>3349</text></view>
							<view class="selectedInfo">{{goodsColor[colorIndex]}} {{goodsContain[containIndex]}} {{goodsSuit[suitIndex]}}</view>
						</view>
					</view>
					<view class="midInfo">
						<view class="clearlyInfo">
							<view>颜色</view>
							<!-- 颜色选择 -->
							<view class="infoChoose">
								<view class="infoBtn" v-for="(item,index) in goodsColor" :key="index" 
								:class="colorIndex==index?'btn-active':''" @click="colorChange(index)">{{item}}</view>
							</view>
						</view>
						<view class="clearlyInfo">
							<view>容量</view>
							<!-- 容量选择 -->
							<view class="infoChoose">
								<view class="infoBtn" v-for="(item,index) in goodsContain" :key="index"
								:class="containIndex==index?'btn-active':''" @click="containChange(index)">{{item}}</view>
							</view>
						</view>
						<view class="clearlyInfo">
							<view>套餐</view>
							<!-- 套餐选择 -->
							<view class="infoChoose">
								<view class="infoBtn" v-for="(item,index) in goodsSuit" :key="index"
								:class="suitIndex==index?'btn-active':''" @click="suitChange(index)">{{item}}</view>
							</view>
						</view>
					</view>
					<view class="buyNumber">
						<text>购买数量</text>
						<amount class="choseNum" :value="goodinfo.num" @change="changed"></amount>
					</view>
				</view>
			</view>
			<view class="intoCart">加入购物车</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import amount from "@/components/shopping/amount.vue"
	export default {
		data() {
			return {
				type: '',//弹出框类型
				colorIndex:0,//商品颜色下标
				containIndex:0,//商品容量下标
				suitIndex:0,//商品套餐下标
				goodsColor:["火焰红","炭黑","冰川蓝"],
				goodsContain:["64GB","128GB"],
				goodsSuit:["标配","套餐一","套餐二"],
				goodinfo:{},
			};
		},
		components: {
			uniPopup,
			amount
		},
		props:["arr"],//接收商品信息
		watch:{
			arr(newarr){//监听商品信息变化，改变模态框弹出状态
				this.goodinfo=this.arr[0]
				this.showUp();
			}
		},
		methods:{
			showUp(){//弹出模态框
				this.type = 'bottom'
				this.$refs['popup'].open();
			},
			changed(val){
				this.goodinfo.num=val;
			},
			colorChange(i){
				this.colorIndex=i;
			},
			containChange(i){
				this.containIndex=i;
			},
			suitChange(i){
				this.suitIndex=i;
			}
		}
	}
</script>

<style>
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
