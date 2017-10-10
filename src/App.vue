<!-- 以后项目的根组件 -->
<template>
	<div>
		<!-- 1.0 利用mint-ui中的header组件实现整个系统的头部 -->
	
			
		<!-- 2.0 利用vue-router的 <router-view>进行占位 -->
		<router-view></router-view>

		<!-- 3.0 利用mui中的tabbar组件实现系统的底部 -->
		
	</div>
</template>

<script>

	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				isShow : false,
				isShow2:true,
				title:"主页"
			}
		},
	watch:{
			//监控当前的路由对象 $route ，如果url中的路由规则发生了改变，那么就会触发这个方法
			'$route':function(newval,oldval){
			var archor =String(newval.query.name);
			
			}
		},
		methods:{
			goAnchor(selector) {
				console.log(selector);
				var temp="#anchor-"+selector;
					console.log(temp);
        var anchor = this.$el.querySelector(temp)
			console.log(anchor);
        document.body.scrollTop = anchor.offsetTop; // chrome
        document.documentElement.scrollTop = anchor.offsetTop; // firefox
    }

		},
		created(){
			
			
		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/


</style>