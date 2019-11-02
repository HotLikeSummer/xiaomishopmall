<template>
	<view id="editProfile">
		<view class="box"></view>		
		<view class="head">
			<text>头像</text>
			<image src="../../../static/images/demo/demo6.jpg" mode="widthFix"></image>
		</view>
		<view class="name">
			<view class="content" style="margin-left: 30upx;">姓名</view>
			<view class="content" style="margin-right: 30upx;">
				<text>楚绵</text>
				<text class="iconfont icon-you"></text>
			</view>
		</view>
		<view>
			<ul class="edit-item">
				<li class="edit-list" v-for="(item,index) in list">
					<text>{{item}}</text>
					<text class="iconfont icon-you"></text>
				</li>
			</ul>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list:["性别","生日","修改密码","密保手机"]
			}
		},
	}
</script>
<style>
	*{
		margin: 0upx;
		padding: 0upx;
	}
	li{
		list-style: none;
	}
	#editProfile {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
		font-size: 60upx;
	}

	.box {
		height: 20upx;
	}

	.head {
		height: 150upx;
		line-height: 150upx;
		width: 100%;
		background-color: white;
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #E0E0E0;
	}

	.head image {
		display: block;
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-top: 25upx;
		margin-right: 30upx;
	}

	.head text {
		margin-left: 30upx;
	}
	.name{
		height: 120upx;
		line-height: 120upx;
		width: 100%;
		background-color: white;
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #E0E0E0;
	}
	.content{
		height: 120upx;
		line-height: 120upx;
	}
	.name .icon-you{
		margin-left: 10upx;
		color: #D1D1D1;
	}
	.edit-item{
		height: 120upx;
		line-height: 120upx;
		width: 100%;
	}
	.edit-list{
		background-color: white;
		display: flex;
		justify-content: space-between;
		padding: 0upx 30upx;
		border-bottom: 1upx solid #E0E0E0;
	}
	.edit-list .icon-you{
		color: #D1D1D1;
	}
	.edit-list:nth-child(2){
		border-bottom:none;
		margin-bottom: 20upx;
	}
</style>
