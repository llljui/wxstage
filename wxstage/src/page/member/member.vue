<template>
  <transition name="fade" mode="in-out">
  <div class="member">
  	<el-col :span="14" :offset="1" class="mrt"><el-input placeholder="请输入用户ID" v-model="userid"></el-input></el-col>
  	<el-col :span="7" :offset="1" class="searchbtn"><el-button type="primary" style="width:100%" @click="searchmember">查询</el-button></el-col>
  	<el-table
    :key="tabheight"
    :height="tabH"
  	align="center"
  	class="tabt"
    :data="tableData3"
    border>
    <el-table-column
      prop="nickname"
      align="center"
      min-width="100"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="consume"
      align="center"
      min-width="120"
      sortable
      label="昨日消耗">
    </el-table-column>
    <el-table-column
      prop="payment"
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
    <!-- <el-pagination
      class="pagetab"
      small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev,next, jumper"
        :total="1000">
      </el-pagination> -->
  </div>
</transition>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'member',
  data () {
    return {
     tableData3: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        userid:null
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
        var self =this ;
        sessionStorage.memberuid=row.uid;
        //console.log(sessionStorage.memberuid);//http://pay.queyoujia.com/user/member/list?uid=&cid=2&channel=fuyang
        self.$router.push({path:'/memberdetail'})
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      searchmember:function () {
        var self =this;
        var params={uid:self.userid,cid:'2',channel:'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}
        axios.post('http://pay.queyoujia.com/user/member/list',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res);
                        self.tableData3=[];
                        self.tableData3=res.data.data.list;
                      }).catch(function (err) {
                        console.log(err)
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
    var params={cid:'2',channel:'fuyang',sid:'9c8104987b3e7c170121412bb6afd439',toid:'1218482',token:'vk92SYb6349245'}
    axios.post('http://pay.queyoujia.com/user/member/list',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        console.log(res);
                        self.tableData3=res.data.data.list;
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
/* .el-pagination{margin-left: -2.8vw;} */
.tablesc{width: 100%;}
.fade-enter-active, .fade-leave-active {
          transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
</style>