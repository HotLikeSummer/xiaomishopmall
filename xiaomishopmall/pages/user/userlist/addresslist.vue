<template>
	<!-- 地址列表页 -->
	<view id="addresslist">
		<ul class="ui-list" v-if="Info.length>0">
			<li class="ui-list-item" v-for="(item,index) in Info">
				<view class="identity">
					<view class="username">{{item.name}}</view>
					<view class="phone">{{item.phone}}<text v-if="item.change==true">[默认]</text></view>
					<view class="btn-delete" @tap="del(index)">删除</view>
				</view>
				<view class="edit" @tap="update(index)">
					<view class="address">
						<view class="area">{{item.area}}</view>
						<view class="detail">{{item.address}}</view>
					</view>
					<view class="icon"><text class="iconfont icon-you"></text></view>
				</view>
			</li>
		</ul>
	</view>
</template>
<script>
	import addlist from '../data/address.js';
	export default {
		components: {
			addlist
		},
		data() {
			return {
				Info:addlist.list,
			}
		},
		onNavigationBarButtonTap() {
			// 跳到地址编辑
			uni.navigateTo({
				url: "edit-address"
			})
		},
		onLoad(e) {			
// 			let _userInfo=uni.getStorageSync("info");
			let userInfo=JSON.parse(e.msg);
			if (this.Info.indexOf(userInfo)==-1) {
				this.Info.push(userInfo)
			}
			console.log(this.Info)
		},
		methods: {
			del(index) {
				//uni.removeStorageSync("info");
				this.Info.splice(index,1)
			},
			update(index){
				uni.navigateTo({
					url: "edit-address?newmsg="+JSON.stringify(this.Info[index])+""
				})
			}
		},
	}
</script>
<style>
	ul,li{
		margin: 0upx;
		padding: 0upx;
	}
	li{
		list-style: none;
	}
	.ui-list{
		margin: 20upx;
		border: 1upx solid #FAFAFA;
	}
	.ui-list-item{
		margin: 0upx 20upx;
	}
	.identity{
		display: flex;
		justify-content: space-between;
		height: 70upx;
		line-height: 70upx;
		border-bottom: 1upx solid #FAFAFA;
		padding: 0upx 20upx;
	}
	.edit{
		display: flex;
		justify-content: space-between;
		font-size: 15upx;
		padding: 0upx 20upx;
	}
	.address{
		padding: 10upx 0upx;
		height: 92upx;		
	}
	.icon{
		height: 92upx;
		line-height: 92upx;
		text-align: center;
		padding: 10upx 0upx;
	}
	.area,.detail{
		height: 46upx;
		line-height: 46upx;
	}
	.username,.phone,.btn-delete{
		height: 70upx;
		line-height: 70upx;
	}
	.username{
		color: #FF6600;
	}
	.btn-delete,.icon{
		color: #B5B5B5;
	}
</style>
