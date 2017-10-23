<template>
  <div class="commission">
  	<el-col :span="11" :offset="1">
		<div class="brb">
			累计提现
			<h5 class="member" v-html="members"></h5>
		</div>
	</el-col>
	<el-col :span="11" ><div class="brb brrl">
			当前可提现
			<h5 class="member" v-html="agent"></h5>
		</div></el-col>
  	<el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">－</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span="22" :offset="1" class="searchbtn"><div @click="searchinfo" class="searchbtn">查询</div></el-col>
	<el-table
	height="330"
		class="mart"
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
	    align="center"
	      prop="date"
	      label="昵称">
	    </el-table-column>
	    <el-table-column
	      align="center"
	      prop="name"
	      label="金额">
	    </el-table-column>
	    <el-table-column
	      align="center"
	      prop="address"
	      label="奖金">
	    </el-table-column>
	     <el-table-column
	      align="center"
	      prop="address"
	      label="总金额">
	    </el-table-column>
	     <el-table-column
	      align="center"
	      prop="status"
	      label="状态">
	    </el-table-column>
  	</el-table>
  	<div class="block">
    <el-pagination
    class="pagtab"
    small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name: 'commission',
  data () {
    return {
      members:'6666',
      agent:'1111',
      date1:null,
      date2:null,
      currentPage3: 5,
	  tableData: [{
	      date: '2016',
	      name: '王小虎',
	      address: '1000',
	      status:'审核中'
	    }, {
	      date: '2016-05-04',
	      name: '王小虎',
	      address: '10',
	      status:'已到账'
	    }, {
	      date: '2016-05-01',
	      name: '王小虎',
	      address: '12121',
	      status:'返现'
	    }, {
	      date: '2016-05-03',
	      name: '王小虎',
	      address: '66565',
	      status:'返现'
	    }],

    }
  },
  methods:{
  	searchinfo:function () {
  		console.log(222);
  	},
  	handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sharecode{margin:2vh 5vw;height: 5vh;border:1px solid #C0CCDA;background: #EFF2F7;border-radius: 3px;text-align: center;color:#1f2d3d;font-family: '微软雅黑';font-weight: lighter;line-height: 5vh; border-radius: 12px;}
.brb{border-bottom: 1px solid #dddddd;margin-top: 1vh;height: 10vh;color:#1F2D3D;font-size: 1rem;font-weight: bold;font-family: '微软雅黑';text-align: center;}
.brrl{ border-left:1px solid #dddddd;}
.member{margin-top: 1vh;width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #20A0FF;font-weight: normal;color: #20A0FF;font-size: 1rem;}
.mart{margin-top: 2vh;text-align: center;}
.tablet{margin-bottom: 2vh;color: #1F2D3D;font-size: 0.9rem;font-weight: bold;}
.search{color: #fff;background-color: #50bfff;border-color: #20a0ff;padding: 7px 9px;font-size: 14px;border-radius: 4px;margin-bottom: 2vh;}
.search:active{background-color: #58B7FF;}
.detailbtn{color:#50bfff;border:1px solid #50bfff;}
.searchbtn{text-align:center;background-color: #58B7FF;height: 6vh;color: white;line-height: 6vh;border-radius: 5px;margin-bottom: 2vh;}
.searchbtn:active{background-color: #20A0FF;}
.pagtab{float: right;position: absolute;right: 0;right:1vw;margin-top:2vh;}
</style>