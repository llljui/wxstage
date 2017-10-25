<template>
  <div class="login">
  	<el-col :span="24"><header>微信登录</header></el-col>
  	<img src="../../assets/logo.jpg" alt="" class="logo" width="30%">
  	<el-col :span="24" class="title">
	  	<h5>微信登录</h5>
  	</el-col>
  	<h5 class="shouquan">网页由该公总号开发，请确认授权以下信息</h5>
  	<ul>
  		<li class="getinfo">· 获得你的公开信息（昵称，头像等）</li>
  	</ul>
  	<el-button class="loginbtn" type="primary" @click="login">登录</el-button>
  </div>
</template>
<script>
import '../../assets/wx.js';
/*import geturlpara from '../../geturlkey.js'*/
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
      var cid = null;
      var channel = null;
      if (location.search.indexOf('cid=1')!=-1) {
        cid='1';
        channel='hz'
        localStorage['cid'] = cid;
        localStorage['channel'] = channel;
        window.location.href = 'http://' + window.location.host + '/auth/login/weixinV2?cid=' + cid + '&channel=' + channel;
      }else if(location.search.indexOf('cid=2')!=-1){
        cid='2';
        channel='fuyang'
        localStorage['cid'] = cid;
        localStorage['channel'] = channel;
        window.location.href = 'http://' + window.location.host + '/auth/login/weixinV2?cid=' + cid + '&channel=' + channel;
      }else{
        return;
      }
  	 
    
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
