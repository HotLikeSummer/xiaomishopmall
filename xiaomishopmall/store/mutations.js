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
		// if (state.token) {//判断是否登录
			 let idindex=state.goodInfo.map(item=>item.id).indexOf(obj.id)
			 if(idindex==-1){
				 state.goodInfo.push(obj)
			 }
			 else{
				 let colors=state.goodInfo[idindex].kind.color==obj.kind.color
				 let cintains=state.goodInfo[idindex].kind.cintain==obj.kind.cintain
				 let suits=state.goodInfo[idindex].kind.suit==obj.kind.suit
				 if(colors && cintains && suits){
					 state.goodInfo[idindex].num=obj.num
				 }else{
					 state.goodInfo.push(obj)
				 }
			 }
			uni.showToast({
			    title: '添加成功',
			    duration: 1000
			});
		// }else{//否则请先登录
		// 	uni.showToast({
		// 	    title: '请先登录',
		// 	    duration: 1000,
		// 		icon:"none"
		// 	});
		// }
	},
	getgood(state,good){
		state.good=good;
	},
	numChange(state,arr){
		state.goodInfo[arr[1]].num=arr[0]
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