<template>
  <div class="Layout">
  	    <myheader></myheader>
          <mycontent><router-view/></mycontent>
        <navbar></navbar>
  </div>
</template>
<script>
import navbar from './navbar'
import mycontent from './content'
import myheader from './header'
export default {
  name: 'Layout',
  components:{navbar,mycontent,myheader},
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
