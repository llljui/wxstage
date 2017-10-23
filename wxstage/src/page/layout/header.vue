<template>
  <div class="myheader" :key="headerkey">
   <header><i class="el-icon-fa el-icon-fa-home el-icon-fa-5x homeleft" @click="gohome"></i>{{nowheader}}</header>
  </div>
</template>
<script>
export default {
  name: 'myheader',
  data () {
    return {
      nowheader:null
    
    }},
    computed:{
      headerkey(){
        var self=this;
        console.log(self.$route.name);
        self.nowheader=self.$route.name;
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
header{font-size: 1.1rem;font-family: '微软雅黑';line-height: 5vh;display: block;}
.myheader{text-align: center;background: #1D8CE0;height:6vh;padding-top: 2%;color: white;padding-right: 10vw;line-height: 5vh;}
.homeleft{float: left;margin-left: 3vw;}
.el-icon-fa-home:before{font-size:1.9rem;}
</style>
