<template>
	<!-- 登录页面 -->
	<view id="userlogin">
		<!-- 头部 -->
		<view class="container-top">
			<text class="iconfont icon-shanchu1 leftIcon" @click="backTo"></text>
			<text class="rightText">忘记密码</text>
		</view>
		<view class="container-bottom">
			<view class="container-bottom-Text">登录</view>
			<!-- 账号 -->
			<view class="userid">
				<!-- 当input输入框有值时触发@input事件，改变按钮背景颜色 -->
				<input type="text" placeholder="请输入手机号/邮箱/小米账号" @input="userText" class="myinput" v-model="account" />
			</view>
			<!-- 密码 -->
			<view class="userid">
				<input type="password" placeholder="请输入密码" class="myinput" v-model="password" />
			</view>
			<!-- 跳转注册 -->
			<navigator url="../codelogin/codelogin">跳转注册 ></navigator>
			<button type="submit" class="loginbtn" :class="loginColor==true?'active':''" @click="formSubmit">登录</button>
			<view class="check">
				<text>已阅读并同意小米</text>
				<text class="test">账号协议、隐私政策</text>和
				<text class="test">小米商城用户协议</text>
			</view>
			<!-- 微信等图标 -->
			<view class="uniicon">
				<uni-icons type="weixin" size="26" class="info" color="#C2C2C2"></uni-icons>
				<uni-icons type="weibo" size="26" class="info" color="#C2C2C2"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入组件
	import uniIcons from "@/components/Uni-Icons/uni-icons.vue"
	import {
		mapState
	} from "vuex"
	export default {
		// 注册组件
		components: {
			uniIcons
		},
		data() {
			return {
				account: "", //账号
				password: "", //密码
				loginColor: false, //按钮背景颜色
			}
		},
		methods: {
			// 返回上一级
			backTo() {
				uni.switchTab({
					url: "/pages/user/user"
				})
			},
			// 键盘输入事件
			userText() {
				this.loginColor = true;
			},
			// from表单提交事件
			formSubmit() {
				let _this = this;
				// 当账号密码不为空时跳转页面
				if (_this.account != "" && _this.password != "") {

					//获取登录接口数据
					uni.request({
						url: "http://ceshi3.dishait.cn/api/login",
						method: "POST",
						data: {
							username: _this.account,
							password: _this.password
						},
						//弹出框
						success(res) {
							uni.showToast({
								title: '登录成功！'
							})
							//将登录令牌存到状态管理中
							let token = res.data.data
							_this.$store.commit("gettoken", token)
							let alltoken=res.data.data//全部的数据
							_this.$store.commit("altoken", alltoken)
							//登录成功跳转到个人页面
							setTimeout(() => {
								uni.switchTab({
									url:"../user/user"
								});
							}, 1000)
						}
					})
					return true;
				} else {
					// 账号或密码为空时返回false并提示
					uni.showModal({
						content: '账号或密码不能为空！'
					});
					return false;
				}

			}
		},
		// 展开数据
		computed: {
			...mapState(["token"])
		},
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	/* 头部 */
	.container-top {
		height: 120upx;
		line-height: 120upx;
		padding: 0upx 20upx;
		color: #CCCCCC;
	}

	.leftIcon {
		float: left;
	}

	.rightText {
		float: right;
	}

	/* form表单部分 */
	.container-bottom {
		padding: 0upx 32upx;
		color: #CCCCCC;
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
		box-sizing: border-box;
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		margin-bottom: 70upx;
		color: #000000;
		border-bottom: 1px solid #B2B2B2;
	}

	.myinput {
		padding-bottom: 40upx !important;
	}

	/* 按钮 */
	.loginbtn {
		margin-top: 80upx;
		background-color: #FFD8B9;
		color: #CCCCCC;
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

	/* 背景颜色 */
	.active {
		background: #FD6801;
		color: white;
	}
</style>
