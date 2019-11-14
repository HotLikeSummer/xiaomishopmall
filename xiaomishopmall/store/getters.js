export default {
	total(state) { //计算总价
		let sum = 0; //初始化总价
		state.goodInfo.forEach(item => { //循环
			if (item.ischeck) { //判断该商品是否勾选
				sum += item.min_price * item.num //将选中的商品价格与数量相乘，并循环累加
			}
		})
		return state.total = sum.toFixed(2) //返回总价并赋值
	},
	payingPrice(state){
		let payMoney = 0; //初始化总价
		state.payingList.forEach(item => { //循环
			if (item.status===2) { //判断该商品是否勾选
				payMoney += item.min_price * item.num //将选中的商品价格与数量相乘，并循环累加
			}
		})
		return state.payingPrice = payMoney.toFixed(2) //返回总价并赋值
	}
}
