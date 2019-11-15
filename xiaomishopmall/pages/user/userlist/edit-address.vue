<template>
	<!-- 编辑收货地址页 -->
	<view id="editAddress">
		<form @submit="formSubmit">
			<view class="consignee">
				<text>收货人：</text>
				<input type="text" v-model="info.name" class="input" name="name" />
			</view>
			<view class="phone">
				<text>手机号码：</text>
				<input type="text" v-model="info.phone" class="input" name="phone" />
			</view>
			<view class="area">
				<text>所在地区：</text>
				<input type="text" v-model="info.area" class="input" name="area" />
				<!-- 地图 -->
				<text class="iconfont icon-dingwei" @click="chooseLocation"></text>
			</view>
			<view class="address">
				<text>详细地址：</text>
				<input type="text" v-model="info.address" class="input" name="address" placeholder="  如楼号 门牌号等"/>
			</view>
			<view class="default-ars">
				<text>设为默认地址：</text>
				<switch color="#FE6901" @change="check" :checked="info.change" name="change" />
			</view>
			<!-- 保存 -->
			<view class="save">
				<button form-type="submit" style="background-color: #FE6901;color: white;">保存</button>
			</view>
		</form>
	</view>
</template>
<script>
	import addlist from '../data/address.js';
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				info: {
					name: "", //收货人姓名
					phone: "", //电话
					area: "", //所在地区
					address: "", //详细地址
					change: false //是否设为默认地址
				},
				datalist: this.$store.state.list, //收货地址
				index: 0,//数据的下标
				svum: false,//提交条件
			}
		},
		computed:{
			...mapState(["list"])
		},
		methods: {
			// 地图定位
			chooseLocation() {
				let _this = this
				uni.chooseLocation({
					success: function(res) {
						_this.info.area = res.name
					}
				});
			},
			// 默认地址
			check(e) {
				this.info.change = e.detail.value
				//循环所有的地址
				for (let i = 0; i < this.datalist.length; i++) {
					//将所有的默认地址设为false
					this.datalist[i].change = false;
					if (this.datalist[i].change == this.info.change) {
						break;
					}
				}
			},
			// 提交地址
			formSubmit(e) {
				//获取到当前输入的值
				let datas = this.info;
				//获取到所有地址列表那边传过来的下标
				let index =this.index;
				//判断所有地址中的数据不能为空
				if (datas.name != "" && datas.phone != "" && datas.area != "" && datas.address != "") {
					    //判断提交条件
						if(this.svum){
							this.datalist.push(datas);
						}else{
							this.datalist[this.index]= datas;
						}
						uni.redirectTo({
							url: "addresslist"
						})
						return true;
				} else {
					uni.showModal({
						content: '信息不能为空'
					});
					return false;
				}

			},
		},
		onLoad(options) {
			//获取到所有地址列表那边传过来的下标
			this.index =parseInt(options.index);
			//判断传过来的下标是否等于null
			if(options.index != null){
				//不等于null就将当前编辑行赋给this.info
				this.info= this.datalist[this.index];
			}else{
				//等于null说明是点击新增进入,则将this.svum变为true
				this.svum = true;
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
	.save {
		margin: 30upx;
		text-align: center;
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

	.area {
		position: relative;
	}

	.icon-dingwei {
		position: absolute;
		top: 0upx;
		right: 70upx;
		color: #FD6801;
	}
</style>
