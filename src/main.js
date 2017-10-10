// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// import MuseUI from "muse-ui"
// import "muse-ui/dist/muse-ui.css"
// Vue.use(MuseUI);

/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */


// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
// import my from './components/Home.vue';
// import input from './components/input/input.vue';
// import clients from './components/clients/clients.vue';

const my = resolve => require(['./components/Home.vue'], resolve) 
const buy = resolve => require(['./components/buy/buy.vue'], resolve) 
// const clients = resolve => require(['./components/clients/clients.vue'], resolve) 
// const vpns = resolve => require(['./components/vpns/vpns.vue'], resolve) 
// const noAgencyApp = resolve => require(['./components/noAgencyApp/noAgencyApp.vue'], resolve) 
// const agencyApp = resolve => require(['./components/agencyApp/agencyApp.vue'], resolve) 
// 3.0.2 定义路由规则
var router1 = new vueRouter({
	linkActiveClass:'mui-active',  //改变路由激活时的class名称
	
	// scrollBehavior (to, from, savedPosition) {
	// 	// 如果你的連結是帶 # 這種
	// 	// to.hash 就會有值(值就是連結)
	// 	// 例如 #3
	// 	if (to.hash) {
	// 	  return {
	// 		// 這個是透過 to.hash 的值來找到對應的元素
	// 		// 照你的 html 來看是不用多加處理這樣就可以了
	// 		// 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
	// 		selector: to.hash
	// 	  }
	// 	}
	//   },
	routes:[
		{path:'/',redirect:'/my'},// 设置当服务器启动的时候默认进入 /my中
		{path:'/my',name:"my",component:my},//我的
		{path:'/recharge',name:"buy",component:buy},  // 购物车
		// {path:'/clients',name:"clients",component:clients},
		// {path:'/vpns',name:"vpns",component:vpns},
		// {path:'/noagencyapp',name:"noAgencyApp",component:noAgencyApp},
		// {path:'/agencyapp',name:"agencyApp",component:agencyApp}
	]
	});


// 4.0 注册mint-ui
// 导入mint-ui的css文件

// 导入mint-ui组件对象

// 5.0 注册mui的css样式


// 6.0 导入一个当前系统的全局基本样式

// import '../assets/web/assets/mobirise-icons/mobirise-icons.css';
// import '../assets/et-line-font-plugin/style.css';
// import '../assets/tether/tether.min.css';

// import '../assets/dropdown/css/style.css';
// import '../assets/animate.css/animate.min.css';
// import '../assets/theme/css/style.css';
// import '../assets/mobirise/css/mbr-additional.css';

// import '../vendor/layer/layer.js';
// import '../js/base.js';
// import '../assets/tether/tether.min.js';

// import '../assets/dropdown/js/script.min.js';
// import '../assets/viewport-checker/jquery.viewportchecker.js';
// import '../assets/jarallax/jarallax.js';
// import '../assets/theme/js/script.js';

// 7.0 将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax方法了
import vueResource from 'vue-resource';
Vue.use(vueResource);



// 5.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});