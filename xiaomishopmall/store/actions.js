export default{
	allCheck(context){//全选方法
		context.commit('allCheck')
	},
	delGoods(context){//删除方法
		context.commit('delGoods')
	},
	jointoCart(context,obj){//加入购物车方法
		context.commit('jointoCart',obj)
	}
}