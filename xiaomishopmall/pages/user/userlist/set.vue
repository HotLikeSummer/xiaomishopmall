<template>
	<view id="userlist">
		<view class="iTunes">账号管理</view>
		<view class="iTunes-list personal" @tap="editprofile">
			个人资料<text class="iconfont icon-you"></text>
		</view>
		<view class="iTunes-list" @tap="addresslist">
			收货地址<text class="iconfont icon-you"></text>
		</view>
		<view class="about">关于</view>
		<view class="aboutItem">
			<ul>
				<li v-for="(item,index) in aboutList" class="about-list">
					<text class="abouttxt">{{item}}</text>
					<text class="iconfont icon-you allright"></text>
				</li>
			</ul>
		</view>
		<view class="quit">
			<text class="logout">退出登录</text>
		</view>
	</view>
</template>
<script>
	export default{
		data() {
			return {
				aboutList:["关于商城","意见反馈","协议规则","资质证件","用户协议","隐私政策"]
			}
		},
		methods: {
			editprofile() {
				uni.navigateTo({
					url:"edit-profile"
				})
			},
			addresslist(){
				uni.navigateTo({
					url:"addresslist"
				})
			}
		},
	}
</script>
<style>
	*{
		margin: 0upx;
		padding: 0upx;
	}
	.iTunes,.about{
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		background-color: #EEEEEE;
		text-indent: 1em;
	}
	.iTunes-list,.about-list{
		height: 90upx;
		line-height: 90upx;
		padding: 0px 20upx;	
	}
	.iTunes-list text,.allright{
		float: right;
		color: #C2C2C2;
	}
	.personal{
		border-bottom: 1px solid #F0F0F0;
	}
	.about-list{
		border-bottom: 1px solid #F0F0F0;
	}
	.about-list:last-child{
		border-bottom:none
	}
	.quit{
		height: 355upx;
		width: 100%;
		background-color: #EEEEEE;
		position: relative;
	}
	.logout{
		display: block;
		height: 90upx;
		width: 90%;
		line-height: 90upx;
		background-color: white;
		text-align: center;
		position: absolute;
		top:40upx;
		left: 5%;
	}
</style>