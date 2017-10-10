<template>
	<div id="tmpl">
	     <section id="menu-0">
        <nav class="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
            <div class="container">

                <div class="mbr-table">
                    <div class="mbr-table-cell">
                        <div class="navbar-brand">
                            <a href="index.html" class="navbar-logo"><img src="img/128.png" alt="Mobirise"></a>
                            <a class="navbar-caption" href="index.html">磐石大数据助手</a>
                        </div>
                    </div>

                    <div class="mbr-table-cell">
                        <button class="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                            <div class="hamburger-icon"></div>
                        </button>
                        <ul class="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                            <li class="nav-item">
                                <a class="nav-link link" href="index.html"></a>
                            </li>
                            <li class="nav-item"><a class="nav-link link" href="#panshi-features" aria-expanded="false">特征</a></li>
                            <li class="nav-item"><a class="nav-link link" href="#panshi-use" aria-expanded="false">用途</a></li>
                            <li class="nav-item"><a class="nav-link link" href="#pricing-table2-4" aria-expanded="false">价目</a></li>

                            <router-link class="nav-item" to="/recharge">
                                          <span class="nav-link link" href="recharge.html" aria-expanded="false">购买</span>
                                    </router-link>
                           


                            <li class="nav-item"><a class="nav-link link" href="faq.html" aria-expanded="false">FAQ<br></a></li>

                            <li class="nav-item nav-btn is_anonymous"><a class="nav-link btn btn-white btn-white-outline" href="register.html">注册</a></li>
                            <li class="nav-item nav-btn is_anonymous"><a class="nav-link btn btn-white btn-white-outline" href="login.html">登陆</a></li>

                            <li class="nav-item nav-btn is_authenticated" style="display: none;"><a id="login_name" class="nav-link btn btn-white btn-white-outline" href="dashboard.html">用户中心</a></li>
                            <li class="nav-item nav-btn is_authenticated" style="display: none;"><a class="nav-link btn btn-white btn-white-outline" onclick="logout()">安全退出</a></li>

                        </ul>
                        <button hidden="" class="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                            <div class="close-icon"></div>
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    </section>
	</div>
</template>

<script>

	import common from '../../kits/common.js';



	export default{
		components:{
			
		},
		computed:{

		},
		data(){
			return {
				value1: [],
				value2: [],
				value3: '',
				title:'设置'

			}
		},
		created(){
			
		},
		methods:{


		}
	}
</script>

<style scoped>
.mint-field-core {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border-radius: 0;
    border: 1px solid rgba(0, 0, 0, .2);
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    outline: 0;
    line-height: 1.6;
    font-size: inherit;
    width: 100%;
}
</style>