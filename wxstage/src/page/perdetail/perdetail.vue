<template>
<transition name="fade" mode="in-out">
  <div class="perdetail" >
	    <el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
	    <el-col :span="22" :offset="1"><el-button type="primary" @click="onSubmit" class="btnser mart">查找</el-button></el-col>
	<el-table
    :data="tableData"
    height="300"
    border
    style="width: 100%">
    <el-table-column
      prop="nickName"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="number"
      width="120"
      label="绑定玩家数">
    </el-table-column>
    <el-table-column
      prop="charge"
      label="总充值">
    </el-table-column>
    <el-table-column
      prop="pNickName"
      width="100"
      label="上级代理">
    </el-table-column>
  </el-table>
  </div>
  </transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'perdetail',
  data () {
    return {
      value6:'',
      date1:null,
      date2:null,
      tableData:[]
    }
  },
  methods:{
  	  onSubmit() {
        var self =this ;
        var params={cid:'2',channel:"fuyang",sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245','page':1,startTime:self.date1,endTime:self.date2}
        axios.post('      http://pay.queyoujia.com/user/team/infoPartner',qs.stringify(params),{headers: {
                              'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          console.log(res);
                          self.tableData=[];
                          self.tableData=res.data.data.list;
                        }).catch(function (err) {
                          console.log(err);
                        })
      }
  },
  mounted(){
     /* var self =this ;
      var now = new Date();
      now.setHours('00', '00', '00', '0');*/
      /*self.yesdate=now.getTime()/1000-86400;
      self.todaydate=now.getTime()/1000;//获取凌晨时间*/
      var params={cid:'2',channel:"fuyang",sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245','page':1}
      axios.post('      http://pay.queyoujia.com/user/team/infoPartner',qs.stringify(params),{headers: {
                              'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          console.log(res);
                          self.tableData=[];
                          self.tableData=res.data.data.list;
                        }).catch(function (err) {
                          console.log(err);
                        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnser{width: 100%;margin-bottom: 2vh;}
.mart{margin-top: 2vh;text-align: center}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>
