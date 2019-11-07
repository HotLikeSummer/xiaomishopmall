<template>
	<view id="aboutMall">
		<view class="versions">
			<!-- <image src="" mode=""></image> -->
			<text>小米商城 4.5.3.0529.r1</text>
		</view>
		<view class="about-item">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in list" :key="index">
					<view class="uni-list-cell-navigate uni-navigate-right">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<text>探索黑科技，小米为发烧而生</text>
		</view>
	</view>
</template>
<script>
	export default{
		data() {
			return {
				list:["版本更新","了解小米","官方微博","廉洁小米","APP分享","授权直供店","清除缓存"]
			}
		},
	}
</script>
<style>
	* {
		margin: 0upx;
		padding: 0upx;
	}
		
	#aboutMall {
		position: fixed; 
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
		font-size: 60upx;
	}
	.versions{
		height:400upx;
		text-align:center;
	}
	.uni-list-cell-navigate{
		height:105upx;
		line-height:105upx;
		text-indent:1em;
	}
	.footer{
		width:100%;
		height:150upx;
		display:flex;
		color:#D4D4D4;
	}
	.footer text{
		margin:auto;
	}
</style>