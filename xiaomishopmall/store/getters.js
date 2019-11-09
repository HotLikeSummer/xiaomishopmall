export default{
	total(state){//计算总价
		let sum=0;
		state.goodInfo.forEach(item=>{
			if (item.checked) {
				sum+=item.price*item.num
			}
		})
		return state.total=sum
	}
}