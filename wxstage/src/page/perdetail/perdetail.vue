<template>
<transition name="fade" mode="in-out">
  <div class="perdetail">
  	<el-form ref="form" :model="form" class="mart">
	   <el-date-picker
      v-model="value6"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
     <el-date-picker
      v-model="value6"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
	  <el-form-item>
	    <el-col :span="22" :offset="1"><el-button type="primary" @click="onSubmit" class="btnser">查找</el-button></el-col>
	  </el-form-item>
	</el-form>
	<el-table
    :data="tableData"
    height="300"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="name"
      width="120"
      label="绑定玩家数">
    </el-table-column>
    <el-table-column
      prop="address"
      label="总充值">
    </el-table-column>
    <el-table-column
      prop="address"
      width="100"
      label="上级代理">
    </el-table-column>
  </el-table>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'perdetail',
  data () {
    return {
      value6:''
    }
  },
  methods:{
  	  onSubmit() {
        console.log('submit!');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnser{width: 100%;}
.mart{margin-top: 2vh;text-align: center}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>
