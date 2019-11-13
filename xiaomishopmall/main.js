import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'


// 封装js方法,切记this指向问题
//滑动事件
async function tabChange(e, that) {
	//console.log(e, 1)
	//取到下标
	let index = e.target.current;
	let tabBar = await this.getElSize('tab-bar'),
		tabBarScrollLeft = tabBar.scrollLeft;
	//元素宽度
	let width = 0;
	for (let i = 0; i < index; i++) {
		let result = await this.getElSize(that.tabBars[i].id);
		width += result.width;
	}
	//宽度计算
	//屏幕总宽度
	let winWidth = uni.getSystemInfoSync().windowWidth,
		nowElement = await this.getElSize(that.tabBars[index].id),
		nowWidth = nowElement.width;
	if (width + nowWidth - tabBarScrollLeft > winWidth) {
		that.scrollLeft = width + nowWidth - winWidth;
	}
	if (width < tabBarScrollLeft) {
		that.scrollLeft = width;
	}
	//index赋值
	that.tabIndex = index;
	//console.log(that.tabIndex,index,8)
}
//得到元素的size
function getElSize(id) {
	return new Promise((res, rej) => {
		//获取到绑定的id
		uni.createSelectorQuery().select('#' + id).fields({
				size: true,
				scrollOffset: true
			},
			data => {
				//拿到数据
				res(data);
			}
		).exec();
	});
}

//点击事件
async function tabtap(e, that) {
	//console.log(e, 2)
	//绑定index
	that.tabIndex = e.currentTarget.dataset.current;
	//console.log(that.tabIndex ,4)
	let tabBar = await this.getElSize("tab-bar"),
		//点击的时候记录并设置scrollLeft
		tabBarScrollLeft = tabBar.scrollLeft;
	//console.log(tabBarScrollLeft)
	that.scrollLeft = tabBarScrollLeft;
}
Vue.prototype.$store = store
// 挂载 Vue.prototype
Vue.prototype.$func = {
	tabChange,
	getElSize,
	tabtap
}
const app = new Vue({
	store,
	...App
})
app.$mount()
