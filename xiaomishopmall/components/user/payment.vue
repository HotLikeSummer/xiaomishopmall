<template>
	<view id="payment">
		<view class="main" style="display:flex" v-show="datas.length==0">
			<view class="nothing">
				<image :src="img" mode=""></image>
				<view class="txt">您还没有待付款订单</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				img: "/static/images/nothing/no_pay.png"
			}
		},
		props: ["datas"],
	}
</script>
<style>
	.main{
		width:100%;
		height:600upx;
		background-color: #F5F5F5;
	}
	.nothing {
		margin: auto;
		text-align:center;
	}

	.nothing image {
		width: 240upx;
		height: 200upx;
	}
	.txt{
		color:#D6D6D6;
	}
</style>