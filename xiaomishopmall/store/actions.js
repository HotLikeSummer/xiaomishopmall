export default {
	allCheck(context) { //全选方法
		context.commit('allCheck')
	},
	delGoods(context) { //删除方法
		context.commit('delGoods')
	},
	jointoCart(context, obj) { //加入购物车方法
		context.commit('jointoCart', obj)
	},
	goLogin(context) {
		context.commit('goLogin')
	},
	getProduct(context,i) {
		uni.request({
				url: 'http://ceshi3.dishait.cn/api/goods/'+(25+i)
			})
			.then(data => {
				var [error, res] = data;
				context.commit('getProduct',res.data.data)
			})
	}
}
