<template>
	<!-- 意见反馈页 -->
	<view id="suggestion">
		<view class="problem">
			<view class="uni-textarea">
				<!-- 问题文字描述 -->
				<textarea placeholder-style="color:#D1D1D1" :placeholder="remind" />
			</view>
			<view class="upload">
				<!-- 问题图片上传 -->
				<view class="upload-pic"><text class="iconfont icon-paizhao"></text></view>
				<text class="txt">最多三张图片 (选填) 140</text>
			</view>
		</view>
		<!-- 电话 -->
		<view class="phone">
			<input type="text" placeholder-style="color:#D1D1D1" placeholder="请留下您的手机号码 (选填)"/>
		</view>
		<!-- 提交 -->
		<view class="submit">提交</view>
		<view class="consult"><text>咨询小米客服 ></text></view>
	</view>
</template>
<script>
	export default{
		data() {
			return {
				remind:"请描述您遇到的相关问题，若遇到功能异常，请您上传图片可以更加快速解决哦~"
			}
		},
		onNavigationBarButtonTap(){
			//跳到我的意见页
			uni.navigateTo({
				url:"mySuggestion"
			})
		}
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
	
	#suggestion {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
		font-size: 60upx;
	}
	/* 问题描述 */
	.upload-pic{
		width: 200upx;
		height: 180upx;
		line-height: 180upx;
		text-align: center;
		border: 1upx #D1D1D1 solid;
	}
	.problem{
		background-color: white;
		color: #D1D1D1;
		margin: 20upx;
		border-radius: 15upx;
	}
	.icon-paizhao{
		font-size: 55upx;
		color: #555555;
	}
	.upload{
		display: flex;
		justify-content: space-between;
		padding: 40upx;
	}
	.txt{
		margin-top: 146upx;
	}
	/* 手机信息 */
	.phone{
		height: 100upx;
		line-height: 100upx;
		background-color: white;
		border-radius: 15upx;
		margin:0upx 20upx;
	}
	.phone input{
		height: 100upx;
		line-height: 100upx;
		padding: 0upx 40upx;
	}
	/* 提交 */
	.submit{
		height: 90upx;
		line-height: 90upx;
		background-color: #FF6B01;
		color: white;
		border-radius: 40upx;
		margin: 20upx;
		text-align: center;
	}
	.consult{
		text-align: center;
		margin-top: 30upx;
	}
</style>
