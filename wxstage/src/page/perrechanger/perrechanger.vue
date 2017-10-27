<template>
  <div class="perrechanger" :key="table_r">
  	<el-row class="mrt">
  		<el-col :span="12" :offset="1">推广员编号:{{tgcode}}</el-col>
  		<el-col :span="10" :offset="1">邀请码:{{yqcode}}</el-col>
  	</el-row>
    <el-col :span="10" :offset="1" class="mrt">
	  	<div class="block">
	    <el-date-picker
	      v-model="value1"
	      type="date"
	      placeholder="选择日期"
	      style="width: 100%;"
	      :picker-options="pickerOptions0">
	    </el-date-picker>
	  </div>
	</el-col>
	<el-col :span="10" :offset="2" class="mrt">
	  <div class="block">
	    <el-date-picker
	      v-model="value2"
	      align="right"
	      type="date"
	      style="width: 100%;"
	      placeholder="选择日期"
	      :picker-options="pickerOptions1">
	    </el-date-picker>	
	  </div>
	</el-col>
	<el-col :span="22" :offset="1" class="search mrt"><el-button type="primary" @click="submit">查询</el-button></el-col>
	<el-table
	:key="tableH"
    :data="tableData"
    height="300"
    border>
    <el-table-column
      prop="date"
      align="center"
      label="充值金额">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="充值时间">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'perrechanger',
  data () {
    return {
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        tableData: [],
        tH:null,
        tgcode:null,
        yqcode:null
      }
    },
    computed:{
    	tableH(){
    		var self =this;
    		self.th=window.screen.availHeight/2+"px";
    		console.log(window.screen.availHeight);
    	}
    },
    mounted(){
      var self =this ;
        //console.log(self.date1);
            var params={startTime:self.date1,endTime:self.date2,cid:'2',channel:'fuyang',sid:'0b2a8fd90acf4cfc1dad7b1a9e831a79'}
          axios.post('http://pay.queyoujia.com/user/charge/person',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data);
                        self.tableData=[];
                        self.yqcode=res.data.data.no;
                        self.tgcode=res.data.data.uid;
                        self.tableData=res.data.data.list;
                      }).catch(function (err) {
                        console.log(err);
                      })    
    },
    methods:{
      submit:function () {
        var self =this ;
        //console.log(self.date1);
            var params={startTime:self.date1,endTime:self.date2,cid:'2',channel:'fuyang',sid:'0b2a8fd90acf4cfc1dad7b1a9e831a79'}
          axios.post('  http://pay.queyoujia.com/user/charge/person',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data);
                        self.tableData=[];
                       // self.yqcode=res.data.data.no;
                        //self.tgcode=res.data.data.uid;
                        self.tableData=res.data.data.list;
                      }).catch(function (err) {
                        console.log(err);
                      })  
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 2vh; font-size: 0.9rem;color:   #1F2D3D}
.search{border-color: #20a0ff;padding: 7px 9px;font-size: 1rem;border-radius: 4px;margin-bottom: 2vh;text-align: center;}
.search button{width: 100%;}
</style>
