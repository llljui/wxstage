<template>
  <div class="mynavbar" :key="keys">
      <el-dropdown trigger="click">
            <el-button type="text">
              数据统计
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><router-link to="/teamrechanger">团队充值统计</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/perrechanger">个人充值明细</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/parsearch">合伙人充值概况</router-link></el-dropdown-item>
               <!-- <el-dropdown-item><router-link to="/perdetail">合伙人充值查询</router-link></el-dropdown-item> -->
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
            <el-dropdown-item><router-link to="/authorize">代理授权</router-link></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click">
          <el-button type="text">
            个人中心
          </el-button>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item><router-link to="/diamondsbuy">钻石购买</router-link></el-dropdown-item>
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
      //console.log(window.screen);
    }
   },
   mounted(){
    var self=this;
   /* if (location.search.indexOf('cid=1')!=-1&&location.search.indexOf('channel=hz')!=-1) {
      document.title="全民大冶后台";
    }else if(location.search.indexOf('cid=2')!=-1&&location.search.indexOf('channel=fuyang')!=-1){
      document.title="八道雀神后台";
    }else{console.log('其他标题')}
    var arr,reg=new RegExp("(^| )"+'sid'+"=([^;]*)(;|$)");
    if (arr=document.cookie.match(reg)) {
      console.log('身份存在');
      //console.log(unescape(arr[2]));
      self.$router.push({path:'/teamrechanger'});
    }else{
      console.log('身份不存在');
      self.$router.push({path:'/login'});
    }*/
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
nav{margin:0 auto;display: block;width: 90%;}
nav ul li{display: inline-block; width: 30%;text-align: center;height: 10vh;padding-top: 5%;color: #8492A6;}
.el-dropdown{width: 32%;margin:0;}
.el-dropdown button{width: 100%;border:none;height: 10vh;color: #1F2D3D;}
</style>