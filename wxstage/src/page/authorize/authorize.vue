<template>
  <div class="authorize">
  	<el-col :span="14" :offset="1"><el-input placeholder="输入推广员ID/邀请码" type="number" class="mrt" @change="inputin"></el-input></el-col>
  	<el-col :span="7"  :offset="1"><el-button class="mrt btnw" type="primary" @click="searchinfo">查询</el-button></el-col>
  	<el-col :span="22" :offset="1" class="bgtext mrt">{{nickname}}</el-col>
  	<el-col :span="22" :offset="1" class="sq mrt"><div class="sq" @click="promoter">授权</div></el-col>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'authorize',
  data () {
    return {
      nickname:'--',
      uids:null
    }
  },
  methods:{
  	promoter:function () {
  		console.log(454);
  		var self =this;
  		var params={hz:'hz',uid:self.uids,token:"vkvvSY710d4ee8",told:'2061160',sid:'626b61d318811b48cfb7303e0c016e92',cid:'2',channel:'fuyang'}
  		axios.post('http://pay.queyoujia.com/user/promoter/auth',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res);
                      }).catch(function (err) {
                        console.log(err);
                      }); 
  	},
  	inputin:function (val) {
  		var self =this;
  		console.log(val);
  		self.uids=val;
  	},
  	searchinfo:function () {
  		var self =this;
  		var params={hz:'hz',uid:self.uids,token:"vkvvSY710d4ee8",told:'2061160',sid:'626b61d318811b48cfb7303e0c016e92',cid:'2',channel:'fuyang'}
  		axios.post('http://pay.queyoujia.com/user/member/list',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res);
                        if (true) {

                        }else{

                        }
                        //self.uids=res.data.data;
                      }).catch(function (err) {
                        console.log(err);
                      }); 
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top:2vh;}
.btnw{width: 100%;}
.bgtext{background-color: #EdF2F7;height: 5vh;text-align: center;line-height: 5vh;color: #324057;font-family: "Times New Roman";border-radius: 5px;font-weight:bold;font-size: 1rem;}
.sq{background-color: #20A0FF;color: white;text-align: center;height: 7vh;line-height: 7vh;border-radius: 5px;}
.sq:active{background-color: #58B7FF;}
</style>
