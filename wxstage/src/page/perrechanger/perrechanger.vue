<template>
  <div class="perrechanger">
  	<el-row class="mrt">
  		<el-col :span="12" :offset="1">推广员编号:2061160</el-col>
  		<el-col :span="10" :offset="1">邀请码:011784</el-col>
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
	<el-col :span="22" :offset="1" class="search mrt"><el-button type="primary">查询</el-button></el-col>
	<el-table
	:key="tableH"
    :data="tableData"
    height="350"
    border>
    <el-table-column
      prop="date"
      align="center"
      label="日期">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tH:null
      }
    },
    computed:{
    	tableH(){
    		var self =this;
    		self.th=window.screen.availHeight/2+"px";
    		console.log(window.screen.availHeight);
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
