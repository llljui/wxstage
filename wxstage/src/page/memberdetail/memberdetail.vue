<template>
  <div class="memberdetail">
  	<el-col :span="11" :offset="1" class="mumbername">
  		<div class="ote"><span>会员：</span><span class="ttcc">{{username}}</span></div>
  	</el-col>
  	<el-col :span="10" :offset="1" class="lost">
  		<span>剩余钻石：</span><span>{{mydias}}</span>
  	</el-col>
  	<el-col :span="11" :offset="1" class="bor1" :style="{background:bg1,color:co1}">
  		<div @click="tab(1)">钻石消耗明细</div>
  	</el-col>
  	<el-col :span="11" class="bor2" :style="{background:bg2,color:co2}">
  		<div @click="tab(2)">充值明细</div>
  	</el-col>
  	<el-col :span="22" :offset="1" v-show="content1">
  		<h5 class="textc">消耗总额：{{consume}}</h5>
  		<el-table
  		height="350"
  		align="center"
      :data="tableData1"
      style="width: 100%">
      <el-table-column
        prop="consume"
        align="center"
        label="消耗钻石">
      </el-table-column>
      <el-table-column
        prop="day"
        align="center"
        label="消耗时间">
      </el-table-column>
    </el-table>
  	</el-col>
  	<el-col :span="22" :offset="1" v-show="content2">
		<h5 class="textc">充值总额：{{recharge}}</h5>
		<el-table
		height="350"
		align="center"
      :data="tableData2"
      style="width: 100%">
      <el-table-column
        prop="charge"
        align="center"
        label="充值钻石">
      </el-table-column>
      <el-table-column
        prop="day"
        align="center"
        label="充值时间">
      </el-table-column>
    </el-table>
  </el-col>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'memberdetail',
  data () {
    return {
      username:null,
      mydias:null,
      content1:true,
      content2:false,
      bg1:"#20A0FF",
      bg2:"white",
      co1:"white",
      co2:"black",
      tableData1: [],
       tableData2: [],
          consume:null,
          recharge:null
    }
  },
  mounted(){
  	var self =this ;
  	var params={uid:sessionStorage.memberuid,cid:sessionStorage.cid,channel:sessionStorage.channel}
  	axios.post('http://pay.queyoujia.com/user/member/detail',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                      	console.log(res);
                      	self.tableData1=[];
                      	self.tableData2=[];
                      	self.username=res.data.data.nickname+'('+res.data.data.uid+')';
                      	self.mydias=res.data.data.diamond;
                      	self.consume=res.data.data.consume;
                      	self.recharge=res.data.data.charge;
                      	self.tableData1=res.data.data.list;
                      	self.tableData2=res.data.data.list;
                      }).catch(function (err) {
                      	console.log(err);
                      })
  },
  methods:{
  	tab:function (val) {
  		var self =this;
  		if (val=='1') {
  			self.content1=true;
  			self.bg1="#20A0FF";
  			self.co1="white";
  			self.bg2="white";
  			self.co2="black";
  			self.content2=false;
  		}else if(val=='2'){
  			self.content1=false;
  			self.bg1="white";
  			self.co1="black";
  			self.bg2="#20A0FF";
  			self.co2="white";
  			self.content2=true;
  		}else{return}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mumbername,.lost{
	font-family: '微软雅黑';
	font-size: 1rem;
	font-weight: lighter;
	margin-top: 2vh;
	color: #324057;
  display: inline-block;
  height: 2vh;
}
.lost{font-family: '微软雅黑';
	font-size: 1rem;
	font-weight: lighter;
	margin-top: 2vh;
	color: #324057;
 display: inline-block;
  height: 2vh;}
.bor1{border:1px solid #ddd;border-right: 0;height: 6vh;margin-top: 4vh;text-align: center;line-height: 6vh;}
.bor2{border:1px solid #ddd;height: 6vh;margin-top: 4vh;text-align: center;line-height: 6vh;}
.textc{font-size: 1rem;font-weight: lighter;font-family: '微软雅黑';margin-top:2vh; margin-bottom: 2vh;}
.ote{width: 100%;height:3.6vh;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.ttcc{display: inline-block;width: 3vw;}
</style>
