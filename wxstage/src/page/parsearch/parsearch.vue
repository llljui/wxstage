<template>
  <div class="parsearch">
  	<el-row>
	  	<el-col :span="11" :offset="1" class="mart">
	  		<h5>总推广代理</h5>
	  		<span>0</span>
	  	</el-col>
	  	<el-col :span="11"  class="mart">
	  		<h5>总用户</h5>
	  		<span>0</span>
	  	</el-col>
	</el-row>
	<el-row class="marb">
	  	<el-col :span="11" :offset="1" class="mart">
	  		<h5>总充值</h5>
	  		<span>0</span>
	  	</el-col>
	  	<el-col :span="11"  class="mart">
	  		<h5>净利润</h5>
	  		<span>0</span>
	  	</el-col>
	</el-row>
<!--   <el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span="22" :offset="1" class="search"><el-button @click="searchinfo" type="primary">查询</el-button></el-col>
    <el-col :span="11" :offset="1" class="mart">
      <h5>今日充值</h5>
      <span>0</span>
    </el-col>
    <el-col :span="11"  class="mart">
      <h5>今日净利润</h5>
      <span>0</span>
    </el-col>
    <el-col :span="11" :offset="1" class="mart">
      <h5>今新增代理</h5>
      <span>0</span>
    </el-col>
    <el-col :span="11"  class="mart">
      <h5>今新增用户</h5>
      <span>0</span>
    </el-col> -->
<div class="tablesc" style="display:block">
	<el-table
	:key="tabheight"
    :data="tableData"
    border
    stripe
    :height="tabH"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="name"
      width="110"
      label="绑定玩家数">
    </el-table-column>
    <el-table-column
      prop="address"
      label="总金额">
    </el-table-column>
    <el-table-column
      prop="address"
      width="95"
      label="上级代理">
    </el-table-column>
  </el-table>
</div>
<!--   <div class="block">
   <el-pagination
     class="pagetab"
     small
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage3"
    :page-size="100"
    layout="prev,next, jumper"
    :total="1000">
  </el-pagination>
</div> -->
 </div>
</template>

<script>
export default {
  name: 'parsearch',
  data () {
    return {
      msg: 'p',
      date1:null,
      date2:null,
      tableData: [{
          date: '2016',
          name: '王小虎',
          address: '1518'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1517'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1519'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }, {
          date: '2016',
          name: '王小虎',
          address: '1516'
        }],
        currentPage3: 1,
        btns:[1,2,3,4,5,6,7,8,9],
        lastp:null,
        nowp:null,
        wpage:null,
        tabH:null
    }
  },
  methods:{
  	searchinfo:function () {
  		console.log(22);
  	},
  	handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      go:function (index) {
      	console.log(index);
      },
      scrolltab:function () {
        console.log(222);
      }
  },
  mounted(){
  	var self =this;
  	self.lastp=self.btns.length;

  },
  computed:{
  	tabheight(){
  		var self =this;
  		var device_type = navigator.userAgent;
  		console.log(window.screen.availHeight);
  		if (device_type.indexOf('Nexus')!=-1) {
  			console.log('Nexus');
  			self.tabH=(window.screen.availHeight-500-(560/window.screen.availHeight)*40);
  		}else{
  			if (window.screen.availHeight<570) {
  				self.tabH='350';
  			}else{
  				self.tabH=(window.screen.availHeight-500+((560/window.screen.availHeight)*30));		
  				console.log(device_type);
  			}
  		}
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mart{text-align: center;margin-top: 2vh;}
.mart span{color: #58B7FF;}
.search button{width: 100%;margin-top: 2vh;}
.block{margin-top:1vh;}
.block ul li button{display: inline-block;float: left;margin-left: 1vw;}
.block ul li:active{background-color: blue;}
.gopage{font-size: 0.8rem;line-height: 200%;float: right;}
.goes{display: inline-block;width:10vw;margin-left: 3vw;border: 1px solid #50bfff;border-radius: 3px;margin-right:1vw;}
.goes[data-v-f5c28124] input{width:2vw;height:3vh!important;}
/* .el-pagination{margin-left: -2vw;} */
.pagetab{position: absolute;bottom:10vh;}
.tablesc{width: 100%;}
.marb{margin-bottom: 5px;}
</style>