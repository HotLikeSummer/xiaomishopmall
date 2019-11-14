export default {
	allCheck(state){//全选
		state.allischeck=!state.allischeck
	},
	delGoods(state){//删除
		for (let i=state.goodInfo.length;i>0;i--) {//倒序循环
			let item=state.goodInfo[i-1];
			if(item.ischeck){//删除选中的商品
				state.goodInfo.splice(item,1)
			}
		}
		uni.showToast({
		    title: '删除成功',
		    duration: 1000
		});
	},
	jointoCart(state,obj){//加入购物车
		if (state.token) {//判断是否登录
			let goodsName=[];//定义数组接收商品名称信息
			state.goodInfo.forEach(item=>goodsName.push(item.name));//添加商品名称
			//判断商品名称是否已存在
			if(goodsName.indexOf(obj.name)!=-1&&obj.kind==state.goodInfo[goodsName.indexOf(obj.name)].kind){
				//如果已存在，并且配置一致的话，只改变其数量
				state.goodInfo[goodsName.indexOf(obj.name)].num=obj.num
			} else{//否则新添加一条商品数据
				state.goodInfo.push(obj)
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
	getgood(state,good){
		state.good=good;
	},
	gettoken(state,e){//改变登录令牌的值，允许登录
		state.token=e
	},
	logout(state){//退出登录
		state.token=""
	},
	goLogin(state) {
		uni.navigateTo({ //跳转登录页面
			url: '/pages/userlogin/userlogin',
		});
	},
	getProduct(state,data){
		let names=[]
		state.productsList.forEach(item=>{
			names.push(item.title)
		})
		if(names.indexOf(data.title)==-1){
			data.kind={
				color: "火焰红",
				capacity: "64GB",
				suit: "标配"
			}
			data.num=1
			state.productsList.push(data)
		}
	},
	statusUp(state,i){
		state.payingList.forEach(item=>{
			if (item.status===i) {
				item.status++
			}
		})
	}
}