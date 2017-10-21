<template>
  <div class="teamrechanger">
  	<el-col :span="22" class="sharecode" v-html="yqcode"></el-col>
	<el-col :span="8" >
		<div class="brb">
			直属会员
			<h5 class="member">22</h5>
		</div>
	</el-col>
	<el-col :span="8" ><div class="brb brrl">
			下级推广员
			<h5 class="member">222</h5>
		</div></el-col>
	<el-col :span="8" ><div class="brb">
			返利总额
			<h5 class="member">2222</h5>
	</div>
	</el-col>
    <el-col :span="10" :offset="1" class="mart">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
    </el-col>
     <el-col :span="2" class="mart">-</el-col>
    <el-col :span="10" class="mart tablet">
        <el-date-picker type="date" placeholder="选择日期" v-model="date2" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span="22" :offset="1" class="search">查询</el-col>
    <el-col :span="10" :offset="1" class="tablet">充值总额：<span>1000</span>元</el-col>
    <el-col :span="10" :offset="2" class="tablet">返现总额：<span>1000</span>元</el-col>
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    align="center"
    width="100"
      label="代理级别">
      <template scope="scope">
      {{scope.row.dl}}
      </template>
    </el-table-column>
    <el-table-column
      label="充值总额"
      width="100"
      align="center">
      <template scope="scope">
       
      </template>
    </el-table-column>
    <el-table-column
    align="center"
    width="100"
      label="钻石消耗">
      <template scope="scope">
        
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template scope="scope">
        <el-button
        type="primary"
          size="small"
          @click="handleEdit(scope.$index, scope.row)">明细</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'teamrechanger',
  data () {
    return {
      input1:null,
      yqcode:'邀请码：011784',
      date1:null,
      date2:null,
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          dl:'直属团队(返45%)',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          dl:'二级团队(返10%)',
        }]     
    }
  },
  methods:{
  	handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{text-align: center;}
.sharecode{margin:2vh 5vw;height: 5vh;border:1px solid #C0CCDA;background: #EFF2F7;border-radius: 3px;text-align: center;color: #475669;font-family: '微软雅黑';font-weight: lighter;padding-top: 1%;}
.brb{border-bottom: 1px solid #dddddd;margin-top: 1vh;height: 8vh;color:#1F2D3D;font-size: 0.9rem;font-weight: lighter;font-family: '微软雅黑';}
.brrl{border-right:1px solid #dddddd; border-left:1px solid #dddddd;}
.member{margin-top: 1vh;width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #20A0FF;font-weight: normal;}
.mart{margin-top: 2vh;}
.tablet{margin-bottom: 2vh;color: #1F2D3D;font-size: 0.9rem;font-weight: normal;}
.search{color: #fff;background-color: #20a0ff;border-color: #20a0ff;padding: 7px 9px;font-size: 12px;border-radius: 4px;margin-bottom: 2vh;}
.search:active{background-color: #58B7FF;}
</style>