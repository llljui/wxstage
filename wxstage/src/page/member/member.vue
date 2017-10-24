<template>
  <div class="member">
  	<el-col :span="14" :offset="1" class="mrt"><el-input placeholder=""></el-input></el-col>
  	<el-col :span="7" :offset="1" class="searchbtn"><el-button type="primary" style="width:100%">查询</el-button></el-col>
  	<el-table
    :key="tabheight"
    :height="tabH"
  	align="center"
  	class="tabt"
    :data="tableData3"
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
      <template slot-scope="scope">
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">明细</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      class="pagetab"
      small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
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
  },
  computed:{
   tabheight(){
      var self =this;
      var device_type = navigator.userAgent;
      console.log(window.screen.availHeight);
      if (device_type.indexOf('Nexus')!=-1) {
        console.log('Nexus');
        self.tabH=(window.screen.availHeight-500+(560/window.screen.availHeight)*250);
        console.log(self.tabH);
      }else{
        if (window.screen.availHeight<570) {
          self.tabH='350';
        }else{
          self.tabH=(window.screen.availHeight-500+((560/window.screen.availHeight)*320));    
          console.log(device_type);
        }
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 2vh;}
.searchbtn{margin-top: 2vh;color: white;text-align: center;border-radius: 3px;margin-bottom: 3vh;}
.block{margin-top: 3vh;float: right;}
.pagetab{position: absolute;bottom:10vh;}
.el-pagination{margin-left: -2.8vw;}
.tablesc{width: 100%;}
</style>