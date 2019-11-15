export default {
	allCheck(state) { //全选
		state.allischeck = !state.allischeck
	},
	delGoods(state) { //删除
		for (let i = state.goodInfo.length; i > 0; i--) { //倒序循环
			let item = state.goodInfo[i - 1];
			if (item.ischeck) { //删除选中的商品
				state.goodInfo.splice(item, 1)
			}
		}
		uni.showToast({
			title: '删除成功',
			duration: 1000
		});
	},
	jointoCart(state, obj) { //加入购物车
		if (state.token) {//判断是否登录
		let idindex = state.goodInfo.map(item => item.id).indexOf(obj.id)//映射ID数组
		if (idindex == -1) {//判断ID是否已存在
			state.goodInfo.push(obj)//如果没有则在商品数组中新增一条
		} else {//如果有则判断配置
			let colors = state.goodInfo[idindex].kind.color == obj.kind.color
			let cintains = state.goodInfo[idindex].kind.cintain == obj.kind.cintain
			let suits = state.goodInfo[idindex].kind.suit == obj.kind.suit
			if (colors && cintains && suits) {//配置一致时改变数量
				state.goodInfo[idindex].num = obj.num
			} else {//不一致则新增一条
				state.goodInfo.push(obj)
			}
		}
		uni.showToast({
			title: '添加成功',
			duration: 1000
		});
		}else{//否则请先登录
			uni.showToast({
			    title: '请先登录',
			    duration: 1000,
				icon:"none"
			});
		}
	},
	getgood(state, good) {//传输点击商品信息
		state.good = good;
	},
	numChange(state, arr) {//改变商品数量
		state.goodInfo[arr[1]].num = arr[0]
	},
	gettoken(state, e) { //改变登录令牌的值，允许登录
		state.token = e
	},
	logout(state) { //退出登录
		state.token = ""
	},
	goLogin(state) {
		uni.navigateTo({ //跳转登录页面
			url: '/pages/userlogin/userlogin',
		});
	},
	getProduct(state, data) {//获取端口商品信息
		let idInd = state.productsList.map(item => item.id).indexOf(data.id)
		if (idInd == -1) {
			data.kind = {
				color: "火焰红",
				capacity: "64GB",
				suit: "标配"
			}
			data.num = 1
			state.productsList.push(data)//添加数据
		}
	},
	statusUp(state, i) {
		state.payingList.forEach(item => {//状态切换
			if (item.status === i) {
				item.status++
			}
		})
	},
	paying(state, e) { //本订单
		state.payingList = e
	},
	getnowlist(state, e) { //本订单对象
		state.nowlist = e
	},
	getnowpay(state) { //确认支付
		state.nowlist.pay = true;
	},
	topays(state, indexs) { //改变付款状态
		state.nowlist = state.alllist[indexs]
	},
	togoods(state, indexs) { //改变收货状态
		state.alllist[indexs].takegoods = true;
	},
	toevalete(state, indexs) { //改变评价状态
		state.alllist[indexs].evalute = true;
	},
	gettypelist(state) { //获取评价
		state.evldata = state.alllist.filter(items => items.pay && items.takegoods && !items.evalute);
		state.takedata = state.alllist.filter(items => items.pay && !items.takegoods && !items.evalute);
		state.paydata = state.alllist.filter(items => !items.pay && !items.takegoods && !items.evalute);
	}
}
