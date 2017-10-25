<template>
  <div class="myheader" :key="headerkey" :style="{paddingRight:pdr}">
   <header><i class="el-icon-fa el-icon-fa-home el-icon-fa-5x homeleft" @click="gohome"></i>{{nowheader}}<span class="rts" v-text="rightt"></span></header>
  </div>
</template>
<script>
export default {
  name: 'myheader',
  data () {
    return {
      nowheader:null,
      rightt:'',
      pdr:null
    
    }},
    computed:{
      headerkey(){
        var self=this;
        console.log(self.$route.name);
        self.nowheader=self.$route.name;
        if (self.$route.name=='提现结算'||self.$route.name=='我的会员'||self.$route.name=='我的会员') {
            self.rightt='钻石剩余:35';
             self.pdr='10vw';
        }else if(self.$route.name=='我的推广员'){
             self.rightt='推广员列表:40人';
             self.pdr='10vw';
        }else{
          self.rightt=null;
            self.pdr='10vw';
        }
      }
    
  },
  methods:{
    gohome:function () {
      this.$router.push({path: '/teamrechanger'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{font-size: 1.1rem;font-family: '微软雅黑';line-height: 6vh;display: block;}
.myheader{text-align: center;background: #1D8CE0;height:7vh;padding-top: 2%;color: white;line-height: 5vh;}
.homeleft{float: left;margin-left: 3vw;}
.el-icon-fa-home:before{font-size:1.9rem;}
.rts{text-align: right;float: right;font-size: 0.7rem;position: absolute;top: 2vh;right: 5vw;}
</style>
