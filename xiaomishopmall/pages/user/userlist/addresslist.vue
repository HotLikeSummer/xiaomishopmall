<template>
	<!-- 地址列表页 -->
	<view id="addresslist">
		<ul class="ui-list" v-if="Info.length>0">
			<li class="ui-list-item" v-for="(item,index) in Info" :key="index" @tap="selectSite" :data-index="index">
				<view class="identity">
					<view class="username">{{item.name}}</view>
					<!-- 当item.change==true则将他设为默认 -->
					<view class="phone">{{item.phone}}<text v-if="item.change==true"> [默认]</text></view>
					<view class="btn-delete" @tap.stop="del(index)">删除</view>
				</view>
				<!-- @tap.stop="update(index)" -->
				<view class="edit">
					<view class="address">
						<view class="area">{{item.area}}</view>
						<view class="detail">{{item.address}}</view>
					</view>
					<!-- <text class="iconfont icon-you"></text> -->
					<view class="icon" @tap.stop="update" :data-index="index">编辑</view>
				</view>
			</li>
		</ul>
	</view>
</template>
<script>
	
	// import addlist from '../data/address.js';
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				Info: [], //存放所有地址
				id: 0,
			}
		},
		onNavigationBarButtonTap() {
			// 跳到地址编辑
			uni.navigateTo({
				url: "edit-address"
			})
		},
		onLoad(options) {
			this.Info = this.list
			this.id = parseInt(options.id);
		},
		computed: {
			...mapState(["list"])
		},
		methods: {
			//删除
			del(index) {
				let datas = this.Info;
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					success: function(res) {
						if (res.confirm) {
							datas.splice(index, 1);
							setTimeout(() => {
								uni.navigateTo({
									url: "/pages/user/userlist/addresslist"
								})
							}, 1000)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});


			},
			// 编辑
			update(e) {
				//获取到当前行点击的下标
				let index = e.currentTarget.dataset.index;
				// this.index= index;
				//判断当前点击下标是否等于NAN,等于则表示新增,否则则是从编辑页进去的
				if (index == null) {
					uni.navigateTo({
						url: "/pages/user/userlist/edit-address"
					})
				} else {
					uni.navigateTo({
						url: "/pages/user/userlist/edit-address?index=" + index + ""
					})
				}
			},
			// 选择地址
			selectSite(e) {
				let index = e.currentTarget.dataset.index;
				for (let i in this.Info) {
					if (i == index) {
						this.Info[i].chek = true
					} else {
						this.Info[i].chek = false
					}
				}
				uni.navigateBack({
					delta: 1,
				});
			}
		},
		
	}
</script>
<style>
	ul,
	li {
		margin: 0upx;
		padding: 0upx;
	}

	li {
		list-style: none;
	}

	.ui-list {
		margin: 20upx;
		border: 1upx solid #FAFAFA;
	}

	.ui-list-item {
		margin: 0upx 20upx;
	}

	.identity {
		display: flex;
		justify-content: space-between;
		height: 40upx;
		line-height: 40upx;
		border-bottom: 1upx solid #FAFAFA;
		padding: 0upx 20upx;
	}

	.edit {
		display: flex;
		justify-content: space-between;
		font-size: 15upx;
		padding: 0upx 20upx;
	}

	.address {
		padding: 10upx 0upx;
		height: 92upx;
	}

	.icon {
		height: 92upx;
		line-height: 92upx;
		text-align: center;
		padding: 10upx 0upx;
	}

	.area,
	.detail {
		height: 46upx;
		line-height: 46upx;
	}

	.username {
		color: #FF6600;
	}

	.btn-delete,
	.icon {
		color: #B5B5B5;
	}
</style>
