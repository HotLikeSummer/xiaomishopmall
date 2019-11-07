<template>
	<!-- 个人资料修改页 -->
	<view id="editProfile">
		<view class="box"></view>		
		<view class="head">
			<text>头像</text>
			<image :src="img" mode="widthFix"></image>
		</view>
		<view class="name">
			<view class="content" style="margin-left: 30upx;">姓名</view>
			<view class="content" style="margin-right: 30upx;">
				<text>楚绵</text>
				<text class="iconfont icon-you"></text>
			</view>
		</view>
		<view>
			<!-- 性别、密码 -->
			<ul class="edit-item">
				<li class="edit-list" v-for="(item,index) in list" @tap="topage(item.url)" :key="index">
					<text>{{item.txt}}</text>
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
				img:"/static/images/demo/demo6.jpg",//头像图
				list:[{txt:"性别",url:""},{txt:"生日",url:""},{txt:"修改密码",url:"changePsd"},{txt:"密保手机",url:""}]
			}
		},
		methods:{
			topage(url){
				uni.navigateTo({
					url:url
				})
			}
		}
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
	/* 头像 */
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
	/* 姓名 */
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
	/* 性别、密码 */
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
		height: 120upx;
		line-height: 120upx;
	}
	.edit-list .icon-you{
		color: #D1D1D1;
	}
	.edit-list:nth-child(2){
		border-bottom:none;
		margin-bottom: 20upx;
	}
</style>
