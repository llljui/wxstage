<template>
  <div class="member">
  	<el-col :span="14" :offset="1" class="mrt"><el-input placeholder=""></el-input></el-col>
  	<el-col :span="7" :offset="1" class="searchbtn"><el-button type="primary" style="width:100%">查询</el-button></el-col>
  	<el-table
  	  align="center"
  	class="tabt"
    :data="tableData3"
    height="330"
    border>
    <el-table-column
      prop="name"
      align="center"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      width="120"
      sortable
      label="昨日消耗">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      sortable
      width="120"
      label="昨日充值">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="操作">
      <template scope="scope">
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
   <div class="block">
    <el-pagination
     	small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name: 'member',
  data () {
    return {
     tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '100000'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '100000'
        }, {
          date: '2016-05-04',
          name: '王小虎',
           address: '100000'
        }, {
          date: '2016-05-01',
          name: '王小虎',
           address: '100000'
        }, {
          date: '2016-05-08',
          name: '王小虎',
           address: '100000'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '100000'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '100000'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    }
  },
  methods:{
  	handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
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
.mrt{margin-top: 2vh;}
.searchbtn{margin-top: 2vh;color: white;text-align: center;border-radius: 3px;margin-bottom: 3vh;}
.block{margin-top: 3vh;float: right;}
</style>