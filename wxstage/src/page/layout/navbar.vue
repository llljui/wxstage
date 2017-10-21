<template>
  <div class="mynavbar" :key="keys">
      <el-dropdown trigger="click">
            <el-button type="text">
              数据统计
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link to="/teamrechanger">团队充值统计</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/perrechanger">个人充值明细</router-link></el-dropdown-item>
            </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click">
        <el-button type="text">
            会员管理
          </el-button>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item><router-link to="/diamondssold" @click.once="menahid">钻石出售</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/member">我的会员</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/promoter">我的推广员</router-link></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click">
          <el-button type="text">
            个人中心
          </el-button>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item><router-link to="/commission">提成结算</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/usercenter">个人账户</router-link></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      menashow:false
    }
    },
    methods:{
      menahid:function () {
       var self=this;
       self.menashow=false;
      },
      ifshow:function () {
        console.log(5255);
      }
      },
   computed:{
    keys(){
      console.log(window.screen);
    }
   },
   mounted(){

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mynavbar{position: absolute;bottom:0;width: 100%;border-top: 1px solid #EFF2F7;background:#EFF2F7;padding-left: 0.6%;height: 10vh;}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color:#475669;
}
.mynavbar div{}
nav{margin:0 auto;display: block;width: 90%;}
nav ul li{display: inline-block; width: 30%;text-align: center;height: 10vh;padding-top: 5%;color: #8492A6;}
.el-dropdown{width: 32%;margin:0;}
.el-dropdown button{width: 100%;border:none;height: 10vh;}
</style>