<template>
  <transition name="fade" mode="in-out">
  <div class="teamdetail">
  	<el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2"  class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span='22' :offset="1" class="mart">
    	<el-input placeholder="请输入游戏ID"></el-input>
    </el-col>
    <el-col :span='22' :offset="1" class="mart serbtn">
   		<el-button @click="searchinfo" class="btnser" type="primary">查询</el-button>
	</el-col>
<el-col :span="11" :offset="1" class="cusdetail" v-bind:class="{bgtext:tabbg1}" ><div @click="tabbg(1)">钻石消耗明细</div></el-col>
<el-col :span="11" class="recdetail" v-bind:class="{bgtext:tabbg2}"><div @click="tabbg(2)">充值明细</div></el-col>
	<div v-show='isShow1' :style="{display:showbg1}">
		<el-col :span="11" :offset="1" class="rechargeM">充值金额<br><span class="textb">1200</span></el-col>
		<el-col :span="11" class="returndetail">返利总额<br><span class="textb">1200</span></el-col>
		 <el-table
		    :data="tableData3"
		    height="250"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="date"
		      align="center"
		      label="游戏ID">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      align="center"
		      label="游戏昵称">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      align="center"
		      label="充值金额">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      align="center"
		      label="充值时间">
		    </el-table-column>
		 </el-table>
	</div>
	<div v-show='isShow2'>
	<el-col :span="22" :offset='1' class="mart brb">钻石消耗总额：<span class="textb">10000元</span></el-col>
	<el-table
		    :data="tableData2"
		    height="250"
		    border
		    style="width: 100%;">
		    <el-table-column
		      prop="date"
            min-width="100"
		      align="center"
		      label="游戏ID">
		    </el-table-column>
		    <el-table-column
		      prop="name"
           min-width="100"
		      align="center"
		      label="游戏昵称">
		    </el-table-column>
		    <el-table-column
		      prop="address"
            min-width="100"
		      align="center"
		      label="充值金额">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      align="center"
          min-width="100"
		      label="充值时间">
		    </el-table-column>
		 </el-table>
	</div>
  </div>
</transition>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'teamdetail',
  data () {
    return {
       activeName: 'second',
       date1:null,
       date2:null,
        tableData3: [{
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2201616',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016747',
          name: '王小虎',
          address: '10000'
        }],
        tableData2: [{
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016744',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2201616',
          name: '王小虎',
          address: '10000'
        }, {
          date: '2016747',
          name: '王小虎',
          address: '10000'
        }],
        tabbg1:true,
        tabbg2:false,
        isShow1:false,
        isShow2:false,
        showbg1:'block',
        showbg2:'none'
    }
  },
  methods:{
  	 handleClick(tab, event) {
  	 	var self =this;
        console.log(tab, event);
      },
      tabbg(val) {
      	if (val==1) {
          console.log(self.isShow1);
      		self.tabbg1=true;
      		self.tabbg2=false;
      		self.isShow1=true;
      		self.isShow2=false;
      	}else if(val==2){
          console.log(self.isShow2);
		    	self.tabbg1=false;
          self.tabbg2=true;
      	  self.isShow1=false;
          self.isShow2=true;
      	}else{return;}
      },
      searchinfo:function(){
        var self =this ;
        var params={'uid':'2061160','startTime':'','endTime':'','cid':'2','channel':'fuyang'}
        axios.post('http://pay.queyoujia.com/user/charge/member',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                        console.log(res);
        }).catch(function (err) {
          console.log(err);
        })
         var params2={'uid':'2061160','startTime':'','endTime':'','cid':'2','channel':'fuyang'}
        axios.post('http://pay.queyoujia.com/user/consume/member',qs.stringify(params2),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                        console.log(res);
        }).catch(function (err) {
          console.log(err);
        })          
      }
  },
  mounted(){
    var self =this ;
    self.isShow1=false;
    self.isShow2=true;
    self.tabbg1=true;
    self.tabbg2=false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mart{margin-top: 2vh;text-align: center;}
.serbtn{color: #fff;background-color: #50bfff;border-color: #50bfff;height:5vh;line-height:5vh;border-radius: 5px;}
.serbtn:active{background-color: #20a0ff;}
.cusdetail{text-align: center;height: 6vh;margin-top: 1vh;border:1px solid #20a0ff;border-right: none;line-height: 6vh;}
.recdetail{text-align: center;height: 6vh;margin-top: 1vh;border:1px solid #20a0ff;border-left: none;line-height: 6vh;}
.returndetail,.rechargeM{text-align: center;background-color: #F9FAFC;height: 8vh;margin-top: 1vh;line-height: 4vh;border-bottom: 1px solid #ddd;}
.rechargeM{border-right:1px solid #ddd;}
.textb{color: #20A0FF;}
.bgtext{color: white;background-color:#20a0ff;}
.brb{border-bottom: 1px solid #ddd;padding-bottom: 1vh;margin-bottom: 1vh;}
.btnser{width: 100%;height: 5vh;line-height: 2vh}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>
