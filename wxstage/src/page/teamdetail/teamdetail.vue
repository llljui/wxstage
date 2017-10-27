<template>
  <transition name="fade" mode="in-out">
  <div class="teamdetail" v-loading="loading"> 
  	<el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2"  class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span='22' :offset="1" class="mart">
    	<el-input placeholder="请输入游戏ID" v-model="uids"></el-input>
    </el-col>
    <el-col :span='22' :offset="1" class="mart serbtn">
   		<el-button @click="searchinfo" class="btnser" type="primary">查询</el-button>
	</el-col>
<el-col :span="11" :offset="1" class="cusdetail" :style="{background:tabg1,color:col1}"><div @click="tabbg(1)">钻石消耗明细</div></el-col>
<el-col :span="11" class="recdetail" :style="{background:tabg2,color:col2}"><div @click="tabbg(2)">充值明细</div></el-col>
	<div v-show='isShow1'>
		<el-col :span="11" :offset="1" class="rechargeM">充值金额<br><span class="textb">{{chargemount}}</span></el-col>
		<el-col :span="11" class="returndetail">返利总额<br><span class="textb">{{rewardmount}}</span></el-col>
		 <el-table
		    :data="tableData3"
		    height="230"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="uid"
          min-width="100"
		      align="center"
		      label="游戏ID">
		    </el-table-column>
		    <el-table-column
		      prop="nickname"
          min-width="100"
		      align="center"
		      label="游戏昵称">
		    </el-table-column>
		    <el-table-column
		      prop="amount"
          min-width="100"
		      align="center"
		      label="充值金额">
		    </el-table-column>
		    <el-table-column
		      prop="paidTime"
          min-width="120"
		      align="center"
		      label="充值时间">
		    </el-table-column>
		 </el-table>
	</div>
	<div v-show='isShow2'>
	<el-col :span="22" :offset='1' class="mart brb">钻石消耗总额：<span class="textb">{{consumeall}}张</span></el-col>
	<el-table
		    :data="tableData2"
		    height="240"
		    border
		    style="width: 100%;">
		    <el-table-column
		      prop="uid"
            min-width="100"
		      align="center"
		      label="游戏ID">
		    </el-table-column>
		    <el-table-column
		      prop="nickname"
           min-width="100"
		      align="center"
		      label="游戏昵称">
		    </el-table-column>
		    <el-table-column
		      prop="amount"
            min-width="100"
		      align="center"
		      label="钻石消耗">
		    </el-table-column>
		    <el-table-column
		      prop="dateline"
		      align="center"
          min-width="120"
		      label="消耗时间">
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
       tabg1:"#20a0ff",
       tabg2:"white",
       col1:"white",
       col2:"#20A0FF",
        tableData3: [],
        tableData2: [],
        tabbg1:true,
        tabbg2:false,
        isShow1:true,
        isShow2:false,
        classshow:true,
        classshow2:true,
        consumeall:null,
        chargemount:null,
        rewardmount:null,
        uids:null,
        loading:false
    }
  },
  methods:{
  	 handleClick(tab, event) {
  	 	var self =this;
        console.log(tab, event);
      },
      tabbg(val) {
        self =this;
      	if (val==1) {
          console.log(self.isShow1);
          self.isShow2=true;
          self.isShow1=false;
          self.tabg1="#20A0FF";
          self.col1="white";
          self.tabg2="white";
          self.col2="#20A0FF";
      	}else if(val==2){
          console.log(self.isShow2);
          self.isShow1=true;
          self.isShow2=false;
          self.tabg2="#20A0FF";
          self.col2="white";
          self.tabg1="white";
          self.col1="#20A0FF";
      	}else{return;}
      },
      searchinfo:function(){
        var self =this ;
        var temp1=self.isShow1;
        var temp2=self.isShow2;
        self.isShow2=true;
        self.isShow1=true;
        self.loading=true;
        if (self.date1&&self.date2) {
           if (self.date2>=self.date1) {
       /* var params={'uid':self.uid,'startTime':self.date1,'endTime':self.date2,'cid':'2','channel':'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}
        axios.post('http://pay.queyoujia.com/user/charge/member',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                        console.log(res);
                        self.tableData3=[];
                      //self.consumeall=res.data.data.consumeTotal;
                      self.tableData3=res.data.data.charge;
                      self.chargemount=res.data.data.chargeTotal;
                      self.rewardmount=res.data.data.reward;
                      self.isShow2=temp2;
                      self.isShow1=temp1;
                      setTimeout(function(){self.loading=false;},500)
        }).catch(function (err) {
          console.log(err);
        })*/
         axios.get('http://pay.queyoujia.com/user/charge/member',{params:{'uid':self.uids,'startTime':self.date1,'endTime':self.date2,'cid':'2','channel':'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}}).then(function (res) {
                              console.log(res);
                        self.tableData3=[];
                      //self.consumeall=res.data.data.consumeTotal;
                      self.tableData3=res.data.data.charge;
                      self.chargemount=res.data.data.chargeTotal;
                      self.rewardmount=res.data.data.reward;
                      self.isShow2=temp2;
                      self.isShow1=temp1;
                      setTimeout(function(){self.loading=false;},500)
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        }); 
        axios.get('http://pay.queyoujia.com/user/consume/member',{params:{'uid':self.uids,'startTime':self.date1,'endTime':self.date2,'cid':'2','channel':'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}}).then(function (res) {
                            self.tableData2=[];
                            self.consumeall=res.data.data.consumeTotal;
                            self.tableData2=res.data.data.consume;
          console.log(res);
        }).catch(function (error) {
          console.log(error);
        }); 
        /* var params2={'uid':'2061160','startTime':self.date1,'endTime':self.date2,'cid':'2','channel':'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}
        axios.post('http://pay.queyoujia.com/user/consume/member',qs.stringify(params2),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                        console.log(res);
                        self.tableData2=[];
                        self.consumeall=res.data.data.consumeTotal;
                        self.tableData2=res.data.data.consume;
        }).catch(function (err) {
          console.log(err);
        })  */        
      }
      else{
         self.$message({
          title: '警告',
          message: '结束时间不能不开始时间早',
          type: 'warning'
        });
         self.loading=false;
      } 
      }
     else{
       self.$message({
        title: '警告',
        message: '结束时间不能不开始时间早',
        type: 'warning'
      });
       self.loading=false;
    }   
      }
  },
  mounted(){
    var self =this ;
  /*  var params={'uid':'2061160','startTime':self.date1,'endTime':self.date2,'cid':'2','channel':'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}
    axios.post('http://pay.queyoujia.com/user/charge/member',qs.stringify(params),{headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                  }}).then(function(res){
                      console.log(res);
                      self.tableData3=[];
                      //self.consumeall=res.data.data.consumeTotal;
                      self.tableData3=res.data.data.charge;
                      self.chargemount=res.data.data.chargeTotal;
                      self.rewardmount=res.data.data.reward;
    }).catch(function (err) {
      console.log(err);
    })*/
    /* var params2={'uid':'2061160','startTime':self.date1,'endTime':self.date2,'cid':'2','channel':'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}
    axios.post('http://pay.queyoujia.com/user/consume/member',qs.stringify(params2),{headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                  }}).then(function(res){
                    console.log(res);
                      self.tableData2=[];
                      self.consumeall=res.data.data.consumeTotal;
                      self.tableData2=res.data.data.consume;
    }).catch(function (err) {
      console.log(err);
    })*/
     axios.get('http://pay.queyoujia.com/user/charge/member?cid=2&channel=fuyang&sid=9c8104987b3e7c170121412bb6afd439&toid=1218482&token=vk92SYb6349245').then(function (res) {
                       self.tableData3=[];
                      //self.consumeall=res.data.data.consumeTotal;
                      self.tableData3=res.data.data.charge;
                      self.chargemount=res.data.data.chargeTotal;
                      self.rewardmount=res.data.data.reward;
                       console.log(res);
  }).catch(function (error) {
    console.log(error);
  }); 
    axios.get('http://pay.queyoujia.com/user/consume/member?cid=2&channel=fuyang&sid=9c8104987b3e7c170121412bb6afd439&toid=1218482&token=vk92SYb6349245').then(function (res) {
                      self.tableData2=[];
                      self.consumeall=res.data.data.consumeTotal;
                      self.tableData2=res.data.data.consume;
    console.log(res);
  }).catch(function (error) {
    console.log(error);
  }); 
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
.cusdetail{text-align: center;height: 6vh;margin-top: 2vh;border:1px solid #20a0ff;border-right: none;line-height: 6vh;}
.recdetail{text-align: center;height: 6vh;margin-top: 2vh;border:1px solid #20a0ff;border-left: none;line-height: 6vh;}
.returndetail,.rechargeM{text-align: center;background-color: #F9FAFC;height: 8vh;margin-top: 1vh;line-height: 4vh;border-bottom: 1px solid #ddd;margin-bottom: 1vh;}
.rechargeM{border-right:1px solid #ddd;}
.textb{color: #20A0FF;}
.bgtext{color: white;background-color:#20a0ff;}
.brb{border-bottom: 1px solid #ddd;padding-bottom: 1vh;margin-bottom: 1vh;}
.btnser{width: 100%;height: 6vh;line-height: 2vh}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>
