<template>
  <div class="myheader" :key="headerkey">
    <header v-html="nowheader"></header>
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.myheader{text-align: center;background: #1D8CE0;height:5vh;padding-top: 2%;color: white;}
</style>
