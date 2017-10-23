<template>
  <div class="login">
  	<el-col :span="24"><header>微信登录</header></el-col>
  	<img src="../../assets/logo.png" alt="" class="logo" width="30%">
  	<el-col :span="24" class="title">
	  	<h5>八道雀神</h5>
  	</el-col>
  	<h5 class="shouquan">网页由该公总号开发，请确认授权以下信息</h5>
  	<ul>
  		<li class="getinfo">· 获得你的公开信息（昵称，头像等）</li>
  	</ul>
  	<el-button class="loginbtn" type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	login:function () {
  		var self=this;
  		/*'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect '*/
  		var params={appid:'APPID',redirect_uri:'REDIRECT_URI',response_type:'code',scope:'SCOPE',state:'STATE#wechat_redirect'};
  		axios.post('https://open.weixin.qq.com/connect/oauth2/authorize',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                      	console.log(res);
                      }).catch(function (err) {
                      	console.log(err);
                      })
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{text-align: center;background-color: #20A0FF;color: white;height: 5vh;line-height: 170%;}
.logo,.title{margin:auto;display: block;position: absolute;top: -50vh;left: 0;right: 0;bottom: 0;}
.title{top:-25vh;height: 5vh;text-align: center;}
.title>h5{color: #1F2D3D;margin-top:0vh;font-size: 1.1rem;font-family: '微软雅黑';color: #324057;}
.loginbtn{width: 90%;margin:0 auto;height: 6vh;top:68vh;left: 0;right: 0;bottom: 0;position: absolute;color: white;background-color: #13CE66;border:1px solid #3cb973;font-size: 1rem;padding-bottom: 25px;}
.loginbtn:active{background-color: #00CC33;}
.shouquan{position: absolute;top: 45vh;left: 0;right: 0;bottom: 0;display: block;text-align: center;font-size:0.9rem;}
.getinfo{position: absolute;top: 50vh;left: 0;right: 0;bottom: 0;display: block;text-align: center;color:#8492A6;}
</style>
