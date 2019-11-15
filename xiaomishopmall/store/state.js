export default {
	editing: false, //编辑状态
	allischeck: 0, //全选状态,
	goodInfo: [{ //商品信息
		id: 0,
		title: "华为matax210", //商品名
		cover: "/static/images/demo/list/1.jpg",
		kind: { //商品配置
			color: "火焰红",
			capacity: "64GB",
			suit: "标配"
		},
		min_price: 3541, //价格
		num: 1, //数量
		ischeck: 1, //选中状态
		status: 1
	}],
	total: 0, //合计金额
	logined: false, //登录状态
	good: "", //详情页接口数据信息
	picTextList: [{
			pic: "/static/images/demo/list/1.jpg",
			id: 25,
			title: "小米MIX3 6GB+128GB",
			text: "磁动力全面滑动屏/前后期间AI双摄/四曲面彩色陶瓷机身/高校10w无线充电",
			sales: "1564",
			price: "3299",
			review: "89"
		},
		{
			pic: "/static/images/demo/list/2.jpg",
			id: 26,
			title: "小米MIX3 6GB+128GB",
			text: "磁动力全面滑动屏/前后期间AI双摄/四曲面彩色陶瓷机身/高校10w无线充电",
			sales: "3666",
			price: "1098",
			review: "88"
		},
		{
			pic: "/static/images/demo/list/3.jpg",
			id: 27,
			title: "小米MIX3 6GB+128GB",
			text: "磁动力全面滑动屏/前后期间AI双摄/四曲面彩色陶瓷机身/高校10w无线充电",
			sales: "2789",
			price: "1999",
			review: "87"
		},
		{
			pic: "/static/images/demo/list/4.jpg",
			id: 28,
			title: "小米MIX3 6GB+128GB",
			text: "磁动力全面滑动屏/前后期间AI双摄/四曲面彩色陶瓷机身/高校10w无线充电",
			sales: "1267",
			price: "1698",
			review: "90"
		},
		{
			pic: "/static/images/demo/list/5.jpg",
			id: 29,
			title: "小米MIX3 6GB+128GB",
			text: "磁动力全面滑动屏/前后期间AI双摄/四曲面彩色陶瓷机身/高校10w无线充电",
			sales: "1999",
			price: "2399",
			review: "98"
		}
	],
	token: "", //登录令牌
	nickname: "游客",
	productsList: [],
	payingList: [],
	alllist: [], //全部订单
	evldata: [], //评价
	paydata: [], //支付
	takedata: [], //收货
	nowlist: "", //当前订单对象
	payingPrice: 0,
	//地址列表数据
	list: [{
		name: "李先生",
		phone: '13538888888',
		area: "广东省深圳市龙岗区",
		address: "日月时创科技有限科技园",
		change: true, //默认
		chek: true
	}],
	//默认地址
	ckAddress: {},
}
