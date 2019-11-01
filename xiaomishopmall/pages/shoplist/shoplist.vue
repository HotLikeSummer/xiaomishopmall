<template>
	<view id="shop-list">
		<!-- 顶部导航 -->
		<view class="nav-top"  v-for="(item,index) in navtopList">
			<text class="nav-top-text">{{item}}</text>
			<icon class="iconfont icon-paixu-jiangxu" ></icon>
		</view>
		<!-- 商品图文列表 -->
		<view class="shop-list-box">
			<view v-for="(item,index) in picTextList" class="picTextLists">
				<view class="shop-list-box-pic"></view>
				<view>
					<h1 class="shop-list-box-title">{{item.TITLE}}</h1>
					<view>{{item.CLASSIFY}}</view>
					<view class="shop-list-box-price">{{item.PRICE}}</view>
					<view>{{item.COMMENT}}</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	 
	export default{
		data(){
			return{
				navtopList:["综合","销量","价格","筛选"],
				picTextList:[
					{
						PIC:"/static/images/demo/cate_01.png",
						TITLE:"真无限蓝牙耳机",
						CLASSIFY:"雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
						PRICE:"￥199",
						COMMENT:"1348条评论 98%满意"
					},{
						PIC:"/static/images/demo/cate_01.png",
						TITLE:"真无限蓝牙耳机",
						CLASSIFY:"雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
						PRICE:"￥199",
						COMMENT:"1348条评论 98%满意"
					},{
						PIC:"/static/images/demo/cate_01.png",
						TITLE:"真无限蓝牙耳机",
						CLASSIFY:"雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
						PRICE:"￥199",
						COMMENT:"1348条评论 98%满意"
					},{
						PIC:"/static/images/demo/cate_01.png",
						TITLE:"真无限蓝牙耳机",
						CLASSIFY:"雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
						PRICE:"￥199",
						COMMENT:"1348条评论 98%满意"
					},{
						PIC:"/static/images/demo/cate_01.png",
						TITLE:"真无限蓝牙耳机",
						CLASSIFY:"雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作",
						PRICE:"￥199",
						COMMENT:"1348条评论 98%满意"
					},],
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0upx;
		padding: 0upx;
		color: #555555;
	}
	.nav-top{
		display: inline-block;
		flex-wrap: nowrap;
		height: 80upx;
		line-height: 80upx;
		margin-left: 30upx;
	}
	.nav-top-text{
		justify-content: space-around;
		font-size: 30upx;
		padding: 0upx 60upx;
		flex-wrap: nowrap;
		white-space: nowrap;
		
	}
	.picTextLists{
		display: flex;
	}
	.shop-list-box-pic{
		width: 200upx;
		height: 240upx;
		border: 1upx solid #333333;
		margin: 15upx 40upx;
	}
	.shop-list-box-title{
		font-weight: 800;
		font-size: 40upx;
	}
	.shop-list-box-price{
		font-weight: 800;
		font-size: 40upx;
		color: #FD6801;
	}
</style>
