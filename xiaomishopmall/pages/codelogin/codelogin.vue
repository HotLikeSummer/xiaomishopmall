<template>
	<!-- 注册 -->
	<view id="codelogin">
		<view class="container-top">
			<text class="iconfont icon-shanchu1 leftIcon" @click="backTo"></text>
		</view>
		<view class="container-bottom">
			<view class="container-bottom-Text">注册</view>
			<view class="userid">
				<input type="text" placeholder="请输入手机号/邮箱/小米账号" class="myinput" v-model="account" />
			</view>
			<view class="userid">
				<input type="text" placeholder="请输入密码" class="myinput" v-model="password" />
				<!-- <text class="getcode">获取验证码</text> -->
			</view>
			<navigator url="../userlogin/userlogin">跳转登录 ></navigator>
			<button type="primary" class="login" @tap="register">注册</button>
			<view class="check">
				<checkbox color="#FFCC33" style="transform:scale(0.5)" />
				<text>已阅读并同意小米</text>
				<text class="test">账号协议、隐私政策</text>和
				<text class="test">小米商城用户协议</text>
			</view>
			<view class="uniicon">
				<uni-icons type="weixin" size="26" class="info" color="#C2C2C2"></uni-icons>
				<uni-icons type="weibo" size="26" class="info" color="#C2C2C2"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/Uni-Icons/uni-icons.vue"
	import {mapState} from 'vuex'
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				account: '',
				password: ''
			}
		},
		computed:{
			...mapState(['accountInfo'])
		},
		methods: {
			backTo() {
				uni.navigateBack({
					delta: 2
				});
			},
		    register() {
				let _this=this
				uni.request({
					url:"http://ceshi3.dishait.cn/api/login",
					method:"POST",
					data:{
						username:_this.account,
						password:_this.password
					},
					success (res) {
						console.log(res)
					}
				})
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 */
// 				if (this.account.length < 5) {
// 					uni.showToast({
// 						icon: 'none',
// 						title: '账号最短为 5 个字符'
// 					});
// 					return;
// 				}
// 				if (this.password.length < 6) {
// 					uni.showToast({
// 						icon: 'none',
// 						title: '密码最短为 6 个字符'
// 					});
// 					return;
// 				}
// 				let userinfo={username:this.account,password:this.password}
// 				for (let i=0;i<this.accountInfo.length;i++) {
// 					if (this.accountInfo[i].username==this.account||this.account==""||this.password=="") {
// 						console.log(123)
// 					}else{
// 						this.$store.commit("getinfo",userinfo)
// 						console.log(this.accountInfo)
// 					}
// 				}
			}
		},
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
		color: #CCCCCC;
	}

	.container-top {
		height: 120upx;
		line-height: 120upx;
		padding: 0upx 20upx;
	}

	.leftIcon {
		float: left;
	}

	.rightText {
		float: right;
	}

	.container-bottom {
		padding: 0upx 32upx;
	}

	.container-bottom-Text {
		height: 180upx;
		line-height: 180upx;
		font-weight: 600;
		color: black;
		font-size: 55upx;
		margin-bottom: 40upx;
	}

	.userid {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		margin-bottom: 70upx;
		border-bottom: 1px solid #FFD8B9;
	}

	.myinput {
		padding-bottom: 40upx !important;
	}

	.getcode {
		position: absolute;
		bottom: 8upx;
		right: 10upx;
		color: #555555;
	}

	.login {
		margin-top: 80upx;
		background-color: #FFD8B9;
	}

	.check {
		margin-top: 20upx;
		font-size: 10upx;
	}

	.test {
		color: #BBBBBB;
		text-decoration: underline;
	}

	.uniicon {
		margin-top: 140upx;
		text-align: center;
	}

	.info {
		border: 1upx solid #EEEEEE;
		height: 70upx;
		width: 70upx;
		border-radius: 35upx;
		text-align: center;
		line-height: 70upx;
		margin: 0upx 30upx;
	}
</style>
