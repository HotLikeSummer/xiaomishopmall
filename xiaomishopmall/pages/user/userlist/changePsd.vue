<template>
	<view id="changePsd">
		<view class="line"></view>
		<view class="password">
			<text>当前密码</text>
			<input type="text" v-model="model" class="input" placeholder="请输入"/>
		</view>
		<view class="newPsd">
			<text>新密码</text>
			<input type="text" v-model="model" class="input" placeholder="请输入"/>
		</view>
		<view class="affirm">
			<text>确认密码</text>
			<input type="text" v-model="model" class="input" placeholder="请输入"/>
		</view>
		<view class="remind">{{msg}}</view>
		<view class="confirm"><text>确定</text></view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				msg: "密码长度8~16位，数字、字母、符号至少包含两种",
				model: ""
			}
		},
	}
</script>
<style>
	* {
		margin: 0upx;
		padding: 0upx;
	}

	li {
		list-style: none;
	}

	#changePsd {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
		font-size: 60upx;
	}

	.line {
		height: 25upx;
	}
	.password,.newPsd,.affirm{
		display: flex;
		justify-content: space-between;
		padding: 0upx 20upx;
		height: 100upx;
		background-color: white;
		line-height: 100upx;
		border-bottom: 1upx solid #E0E0E0;
		font-size: 30upx;
	}
	.input{
		height: 80upx;
		margin-top: 10upx;
		line-height: 80upx;
		width: 80%;
	}
	.remind{
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: #d6d6d6;
	}
	.confirm{
		display: block;
		height: 110upx;
		line-height: 110upx;
		text-align: center;
		color: white;
		margin: 0upx 20upx;
		background-color: #FF6B01;
		font-size: 35upx;
	}
</style>
