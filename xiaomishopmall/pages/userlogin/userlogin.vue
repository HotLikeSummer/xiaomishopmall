<template>
	<!-- 登录页面 -->
	<view id="userlogin">
		<view class="container-top">
			<text class="iconfont icon-shanchu1 leftIcon" @click="backTo"></text>
			<text class="rightText">忘记密码</text>
		</view>
		<view class="container-bottom">
			<view class="container-bottom-Text">登录</view>
			<view class="userid">
				<input type="text" placeholder="请输入手机号/邮箱/小米账号" class="myinput"/>
			</view>
			<view class="userid">
				<input type="text" placeholder="请输入密码" class="myinput"/>
			</view>
			<navigator url="../codelogin/codelogin">跳转注册 ></navigator>
			<button type="primary" class="login">登录</button>
			<view class="check">
				 <checkbox color="#FFCC33" style="transform:scale(0.5);" />
				 <text>已阅读并同意小米</text>
				 <text class="test">账号协议、隐私政策</text>和
				 <text class="test">小米商城用户协议</text>
			</view>
			<view class="uniicon">
				<uni-icons type="weixin" size="26" class="info" color="#C2C2C2"></uni-icons>
				<uni-icons type="weibo" size="26"  class="info" color="#C2C2C2"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/Uni-Icons/uni-icons.vue"
	export default{
		components:{uniIcons},
		methods:{
			backTo(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
		color:  #CCCCCC;
	}
	.container-top{
		height: 120upx;
		line-height: 120upx;
		padding: 0upx 20upx;
	}
	.leftIcon{
		float: left;
	}
	.rightText{
		float: right;
	}
	.container-bottom{
		padding: 0upx 32upx;
	}
	.container-bottom-Text{
		height: 180upx;
		line-height: 180upx;
		font-weight: 600;
		color: black;
		font-size: 55upx;
		margin-bottom: 40upx;
	}
	.userid{
/* 		display: flex;
		-ms-flex-align: center;
		align-items: center; */
		box-sizing: border-box;
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		margin-bottom: 70upx;
		border-bottom: 1px solid #FFD8B9;
	}
	.myinput{
		padding-bottom: 40upx !important;
	}
	.login{
		margin-top: 80upx;
		background-color: #FFD8B9;
	}
	.check{
		margin-top: 20upx;
		font-size: 10upx;
	}
	.test{
		color: #BBBBBB;
		text-decoration: underline;
	}
	.uniicon{
		margin-top: 140upx;
		text-align: center;
	}
	.info{
		border: 1upx solid #EEEEEE;
		height: 70upx;
		width: 70upx;
		border-radius: 35upx;
		text-align: center;
		line-height: 70upx;
		margin: 0upx 30upx;
		/* color: #C2C2C2; */
	}
</style>
