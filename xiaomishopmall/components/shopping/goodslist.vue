<template>
	<view id="content">
		<view class='car-list'>
			<!-- 购物车产品 -->
			<view class='car-item'>
				<!--列表项-->
				<view class='car-prod' v-for="(item,index) in goodInfo" :key='index'>
					<!-- 商品信息-->
					<view class='goods-info'>
						<view class='goods-info-inner'>
							<view class='checkbox'>
								<view class="checkIcon" :class="item.checked?'':'nocheck'" @click="check(item)">
									<text class="iconfont checked" v-if="item.checked">&#xe623;</text>
								</view>
							</view>
							<view class='goods-image'>
								<image src="/static/images/demo/list/1.jpg" ></image>
							</view>
							<view class='good-info'>
								<view class='name'>{{item.name}}</view>
								<view class='kind' @click="toggleCard(item)" :class="editing?'editing':''">
									<view>
										{{item.kind.color}} {{item.kind.capacity}} {{item.kind.suit}}
									</view>
									<view v-if="editing">
										<span class="iconfont">&#xe65d;</span>
									</view>
								</view>
								<view class="infobox">
									<view class='price'>￥{{item.price}}</view>
									<amount class="numbers" @change="change($event,item)" :value="item.num"></amount>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 加入购物车组件 -->
			<shopcartCard :arr="sendData"></shopcartCard>
			<!-- 没有商品信息 -->
			<view v-if='goodInfo.length<=0' class="noGoods">
				<view class="noGoodscon">
					<view class="iconfont shopcarIcon">&#xe64c;</view>
					<view class="shopcarTxt">购物车还是空的</view>
					<view class="toShopping" @click="goShopping">去逛逛</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import amount from "@/components/shopping/amount.vue"
	import shopcartCard from "@/components/shopcartCard/shopcartCard.vue"
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				sendData:[],//组件传输数据
			}
		},
		components: {
			amount,
			shopcartCard
		},
		methods: {
			toggleCard(i) {//传输商品信息
				this.togglepop=!this.togglepop//更改模态框弹出状态
				this.sendData=[i,this.togglepop]//传输商品信息和弹出状态
			},
			change(event,obj){//改变商品数量
				obj.num=event;
			},
			check(obj){//更改商品选中状态
				obj.checked=!obj.checked;
			},
			goShopping(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		},
		computed:{
			...mapState(['goodInfo','editing','allChecked'])
		},
		watch:{
			allChecked(newval){
				this.goodInfo.forEach(i=>i.checked=newval)
			}
		}
	}
</script>

<style scoped>
	.car-item {
		position: relative;
		overflow: hidden;
	}

	.car-item .car-prod {
		border-top: 1px solid #ddd;
		position: relative;
		left: 0;
		box-sizing: border-box;
		overflow: hidden;
	}

	.car-prod .btn-delete {
		float: left;
		border-radius: 0;
		font-size: 30rpx;
		box-sizing: border-box;
		width: 50px;
		background-color: #e64340;
		color: #fff;
		text-align: center;
		height: 260rpx;
		line-height: 260rpx;
	}

	.infobox {
		position: relative;
		height: 100rpx;
	}
	
	/* 商品卡片 */
	.goods-info {
		float: left;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	.goods-info .goods-info-inner {
		display: flex;
		height: 260rpx;
		padding: 40rpx 0;
	}

	.goods-info-inner .checkbox {
		width: 120rpx;
	}
	/* 选中按钮 */
	.checkbox{
		height: 220rpx;
		display: flex;
	}
	.checkIcon{
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 50%;
		margin: auto;
	}
	.nocheck{
		border: 1rpx solid #CCCCCC;
	}
	.checked{
		color: #FD6801;
		font-size: 47rpx;
	}

	/* 商品信息 */
	.goods-info-inner .goods-image {
		width: 220rpx;
		height: 220rpx;
		border: 1px solid #CCC;
		border-radius:5px;
		display: flex;
	}

	.goods-image>image {
		width: 180rpx;
		height: 180rpx;
		display: block;
		margin: auto;
	}

	.goods-info-inner .good-info {
		flex: 1;
		padding: 0 20rpx;
	}

	.goods-info-inner .good-info .name {
		line-height: 70rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
	}

	.kind {
		display: flex;
		justify-content: space-between;
		line-height: 60rpx;
		padding: 10rpx 5rpx;
		white-space: nowrap;
		font-size: 30rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
		color: #7C858D;
	}
	.editing{
		background-color: #F1F1F1;
	}

	.price {
		position: absolute;
		color: #FD7112;
		left: 0;
	}

	.numbers {
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.goods-info-inner .good-info {
		height: 90rpx;
		line-height: 90rpx;
	}
	.noGoods{
		width: 100%;
		height: 200rpx;
		color: #c9c9c9;
		font-size: 30rpx;
		text-align: center;
		display:flex;
		justify-content: center;
	}
	.noGoodscon{
		height: 60rpx;
		margin: auto;
		display: table;
	}
	.noGoodscon view{
		display: table-cell;
		vertical-align: middle;
		padding: 0 20rpx;
	}
	.shopcarIcon{
		font-size: 50rpx;
	}
	.toShopping{
		color:#000000;
		border: 1rpx solid #CCCCCC;
		border-radius: 5rpx;
	}
</style>
