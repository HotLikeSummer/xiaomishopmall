<template>
	<!-- 编辑收货地址页 -->
	<view id="editAddress">
		<view class="consignee">
			<text>收货人：</text>
			<input type="text" v-model="info.name" class="input" />
		</view>
		<view class="phone">
			<text>手机号码：</text>
			<input type="text" v-model="info.phone" class="input" />
		</view>
		<view class="area">
			<text>所在地区：</text>
			<input type="text" v-model="info.area" class="input" />
		</view>
		<view class="address">
			<text>详细地址：</text>
			<input type="text" v-model="info.address" class="input" />
		</view>
		<view class="default-ars">
			<text>设为默认地址：</text>
			<switch color="#FE6901" @change="check" :checked="info.change"/>
		</view>
		<!-- 保存 -->
		<view class="save" >
			<text @tap="save">保存</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				info:{
					name:"",
					phone:"",
					area:"",
					address:"",
					change:false
				},
			}
		},
		methods: {
			save(){
				// uni.setStorageSync('info', JSON.stringify(this.info));
				uni.navigateTo({
					url:"addresslist?msg="+JSON.stringify(this.info)+""
				})
			},
			check(e){
				this.info.change=e.detail.value
			}
		},
		onLoad(e) {
			this.info=JSON.parse(e.newmsg)
			console.log(this.info)
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

	/* 地址信息 */
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
		display: flex;
		justify-content: space-between;
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

	.default-ars switch {
		float: right;
		margin-right: 17upx;
	}

	/* 保存 */
	.save text {
		display: block;
		margin: 30upx;
		height: 80upx;
		line-height: 80upx;
		background-color: #FF7200;
		text-align: center;
		color: white;
	}

	/* 输入 */
	.input {
		margin-top: 20upx;
		height: 60upx;
		width: 75%;
		text-indent: 0em;
		margin-right: 10upx;
	}

	.consignee .input {
		width: 77%;
	}
</style>
