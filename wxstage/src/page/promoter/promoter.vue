<template>
  <transition name="fade" mode="in-out">
  <div class="promoter">
  	<el-col :span="14" :offset="1" class="mrt"><el-input placeholder="请输入推广员ID" v-model="prouid"></el-input></el-col>
  	<el-col :span="7" :offset="1" class="searchbtn"><el-button type="primary" style="width:100%" @click="searchinfo">查询</el-button></el-col>
  	<el-table
    :key="tabheight"
    	 align="center"
    	 class="tabt"
      :data="tableData3"
      :height="tabH"
    border>
    <el-table-column
      prop="uid"
      width="120"
      align="center"
      label="推广员ID">
    </el-table-column>
    <el-table-column
      prop="nickname"
      align="center"
      width="100"
      sortable
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="dateline"
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
        type="primary"
          size="small"
          @click="handleEdit(scope.$index, scope.row)">明细</el-button>
      </template>
    </el-table-column>
  </el-table>
     <!--  <el-pagination
       class="pagetab"
       small
     @size-change="handleSizeChange"
     @current-change="handleCurrentChange"
     :current-page.sync="currentPage3"
     :page-size="100"
     layout="prev, next, jumper"
     :total="1000">
         </el-pagination> -->
         <div class="rts">推广员列表:{{pormember}}</div>
  </div>
</transition>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'promoter',
  data () {
    return {
      tableData3: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tabH:null,
        prouid:null,
        pormember:null
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
        var self =this ;
          sessionStorage.promoterid=row.uid;
          self.$router.push({path:'/promoterdetail'})
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      searchinfo:function () {
        var self =this ;
        var params={uid:self.prouid,cid:'2',channel:'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}
        axios.post('http://pay.queyoujia.com/user/promoter/agent',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data.list);
                        self.tableData3=[];
                        self.tableData3=res.data.data.list;
                      }).catch(function (err) {
                        console.log(err);
                      })
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
  },
  mounted(){
    var self =this ;
    var params={cid:'2',channel:'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'};
    axios.post('http://pay.queyoujia.com/user/promoter/agent',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res.data.data.number);
                        self.tableData3=[];
                        self.tableData3=res.data.data.list;
                        self.pormember=res.data.data.number;
                        //Event.$emit('pros_end',res.data.data.number)
                        //sessionStorage.pormember=res.data.data.number;
                      }).catch(function (err) {
                        console.log(err);
                      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 2vh;}
.searchbtn{margin-top: 2vh;color: white;text-align: center;border-radius: 3px;margin-bottom: 3vh;}
.block{margin-top: 3vh;float: right;}
.pagetab{position: absolute;bottom:10vh;}
/* .el-pagination{margin-left: -2vw;} */
.pagetab{position: absolute;bottom:10vh;}
.tablesc{width: 100%;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
.rts{text-align: right;font-size: 0.7rem;position: absolute;top: 2vh;right: 5vw;padding-top: 2%;color: white;line-height: 4vh;}
</style>