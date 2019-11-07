<template>
	<view id="editAddress">
		<view class="consignee">
			<text>收货人：</text>
			<input type="text" @input="onKeyInput" class="input"/>
		</view>
		<view class="phone">
			<text>手机号码：</text>
			<input type="text" @input="onKeyInput" class="input"/>
		</view>
		<view class="area">
			<text>所在地区：</text>
			<input type="text" @input="onKeyInput" class="input"/>
		</view>
		<view class="address">
			<text>详细地址：</text>
			<input type="text" @input="onKeyInput" class="input"/>
		</view>
		<view class="default-ars">
			<text>设为默认地址：</text>			
			<switch checked />
		</view>
		<view class="save">
			<text>保存</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				inputValue: ''
			}
		},
		methods: {
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			}
		}
	}
</script>
<style>
	* {
		margin: 0upx;
		padding: 0upx;
	}

	#editAddress {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #EEEEEE;
		font-size: 60upx;
	}

	.consignee,
	.phone,
	.area,
	.address,
	.default-ars {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #E0E0E0;
		text-indent: 1em;
		background-color: white;
	}

	.phone,
	.address {
		border-bottom: none;
		margin-bottom: 20upx;
	}
	.default-ars {
		height: 120upx;
		line-height: 120upx;
	}
	.default-ars switch{
		float: right;
		margin-right: 17upx;
	}
	.save text{
		display: block;
		margin: 30upx;
		height: 80upx;
		line-height: 80upx;
		background-color: #FF7200;
		text-align: center;
		color: white;
	}
	.input{
		float: right;
		margin-top:20upx;
		height:60upx;
		width:78%;
		text-indent:0em;
	}
	.consignee .input{
		width:81%;
	}
</style>
