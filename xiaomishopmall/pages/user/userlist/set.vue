<template>
	<!-- 设置页 -->
	<view id="userlist">
		<view class="iTunes">账号管理</view>
		<view class="iTunes-list personal" @tap="editprofile">
			个人资料<text class="iconfont icon-you"></text>
		</view>
		<view class="iTunes-list" @tap="addresslist">
			收货地址<text class="iconfont icon-you"></text>
		</view>
		<view class="about">关于</view>
		<!-- 关于列表 -->
		<view class="aboutItem">
			<ul>
				<li v-for="(item,index) in aboutList" class="about-list" @tap="topage(item.url)" :key="index">
					<text class="abouttxt">{{item.list}}</text>
					<text class="iconfont icon-you allright"></text>
				</li>
			</ul>
		</view>
		<!-- 退出登录按钮 -->
		<view class="quit">
			<text class="logout">退出登录</text>
		</view>
	</view>
</template>
<script>
	export default{
		data() {
			return {
				aboutList:[{list:"关于商城",url:"aboutMall"},{list:"意见反馈",url:"suggestion"},{list:"协议规则",url:""},{list:"资质证件",url:""},{list:"用户协议",url:""},{list:"隐私政策",url:""}]
			}
		},
		methods: {
			editprofile() {//跳到个人资料页面
				uni.navigateTo({
					url:"edit-profile"
				})
			},
			addresslist(){
				uni.navigateTo({//跳到地址列表页面
					url:"addresslist"
				})
			},
			topage(url){
				uni.navigateTo({
					url:url
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
	/* 账号收货地址 */
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
	/* 关于 */
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