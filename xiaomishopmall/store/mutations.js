export default {
	allCheck(state){//全选
		state.allChecked=!state.allChecked
	},
	delGoods(state){//删除
		for (let i=state.goodInfo.length;i>0;i--) {//倒序循环
			let item=state.goodInfo[i-1];
			if(item.checked){//删除选中的商品
				state.goodInfo.splice(item,1)
			}
		}
	},
	jointoCart(state,obj){//加入购物车
		if (state.logined) {//判断是否登录
			let goodsName=[];//定义数组接收商品名称信息
			state.goodInfo.forEach(item=>goodsName.push(item.name));//添加商品名称
			//判断商品名称是否已存在
			if(goodsName.indexOf(obj.name)!=-1&&obj.kind==state.goodInfo[goodsName.indexOf(obj.name)].kind){
				//如果已存在，并且配置一致的话，只改变其数量
				state.goodInfo[goodsName.indexOf(obj.name)].num=obj.num
			} else{//否则新添加一条商品数据
				state.goodInfo.push(obj)
			}
		}else{//否则请先登录
			console.log("请先登录")
		}
	},
	getgood(state,good){
		state.good=good;
	},
	gettoken(state,e){//改变登录令牌的值，允许登录
		state.token=e
	},
	logout(state){//退出登录
		state.token=""
	}
}