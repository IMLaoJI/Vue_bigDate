<template>
	<div id="tmpl">
	
		<div class="bg-gray">
    <!-- Fixed navbar -->
    <div class="navbar-bg">
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    
                    <a class="brand" href="index.html"><img src="img/64.png" alt="磐石大数据助手"></a>
                    <a class="brand-caption" href="index.html"><strong>磐石大数据助手</strong></a>
                </div>
                <!--/.navbar-header -->

                <div id="navbar" class="navbar-collapse collapse" aria-expanded="true">
                    <ul class="nav navbar-nav navbar-right">


                    
                         <li><a aria-expanded="false" role="button" ><strong>特性</strong></a></li>
                   
                                    


                       
                        <li><a aria-expanded="false" role="button" href="index-2.html#panshi-use"><strong>用途</strong></a></li>
                        <li><a aria-expanded="false" role="button" href="index-2.html#pricing-table2-4"><strong>价目</strong></a></li>
                        <li><a aria-expanded="false" role="button" href="recharge.html"><strong>购买</strong></a></li>
                        <li><a aria-expanded="false" role="button" href="FAQ-2.html"><strong>FAQ</strong></a></li>

                        <li><a class="is_anonymous" aria-expanded="false" role="button" href="register.html">注册</a></li>
                        <li><a class="is_anonymous" aria-expanded="false" role="button" href="login.html">登陆</a></li>


                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </nav>
    </div>

    <div class="page">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading clearfix">
                        <h5 class="panel-title pull-left">购买</h5>
                        <!-- <div class="panel-tools pull-right">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                        </div> -->
                    </div>
                    <div class="panel-body">
                        <form id="recharge_form" method="post" class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">套餐时间</label>
                                <div class="col-sm-8">
                                    <select id="product_id" class="form-control" name="product_id" required="">
                                        <option value="1">包天</option>
                                        <option value="30">包月</option>
                                        <option value="90">包季度</option>
                                        <option value="180">包半年</option>
                                        <option value="365">包年</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">支付方式</label>
                                <div id="pay_platform" class="col-sm-8 pay-type">
                                    <div class="zhifubao active" data-value="alipay"></div>
                                    <div class="weixin" data-value="weixin"></div>
                                </div>
                                <input type="hidden" name="pay_platform">
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">账单合计</label>
                                <div class="col-sm-8">
                                    <p id="price" class="form-control-static"></p>
                                    <input type="hidden" name="price">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-2">
                                    <button id="buy_btn" class="btn btn-primary" type="button" onclick="buy(this)">确认购买</button>
                                    <!-- 《button class="btn btn-white" type="button" onclick="cancel(this)">取消</button> -->
                                </div>
                            </div>
                        </form>
                        <div class="col-sm-4 col-sm-offset-2">
                            <div id="qrcode"></div>
                            <div id="qrcode_tips"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


   <!-- <div class="container-fluid navbar-bg"> -->
    <footer id="footer" class="navbar-fixed-bottom">
        <div class="row">
            <div class="container">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div style="text-align:left"><img src="img/128.png"></div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h1>关于</h1>
                    <ul>
                        <li><a href="about.html">关于磐石</a></li>
                        <li><a href="privacy.html">隐私政策</a></li>
                        <li><a href="law.html">法律申明</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h1>资源</h1>
                    <ul>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <h1>联系</h1>
                    <ul>
                        <li><a href="#">QQ：86576791</a></li>
                        <li><a href="mailto:#" target="_blank">邮箱：i@istone.io</a></li>
                        <li><a href="tel:+8617817057389">电话：+86 17817057389</a></li>
                        <li><a href="#">地址：广州市越秀区水荫路119号星光映景16层0198号</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  
  
   
   
</div>
	</div>
</template>

<script>

    
   
   

	import Myfooter from '../common/footer.vue';
export default{
		 components:{
			Myfooter
        },
		data(){
		return {
			list:[],
			title:"代理程序"
			}
		},
		created(){
		
		},
		methods:{
		
		}
	}

</script>

<style scoped>
  /*图片详情样式*/
@import url(../../../vendor/font-awesome/css/font-awesome.min.css);
@import url(../../../vendor/bootstrap/css/bootstrap.min.css);
@import url(../../../themes/default/css/site.css);
@import url(../../../css/base.css);
@import url(./recharge.css);
@import url(./base.css);

.page {
    padding-top: 10%;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>