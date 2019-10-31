<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
<<<<<<< HEAD
			<text class="title">{{title}}</text>
=======
<<<<<<< HEAD
			<text class="title">{{title}}123</text>
=======
			<text class="title">{{title}}</text>
<<<<<<< HEAD
			<text>123888</text>
=======
			<text>123</text>
>>>>>>> 05a0335ed010a09cc3797a241452394094fa500d
>>>>>>> parent of ffefb72... 修复完成
>>>>>>> 6befe1cd42244d123b2db03001410bb6428e5f52
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
