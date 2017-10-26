<template>
  <div class="diamondssold">
  	<el-col :span="22" :offset="1" class="soldcount">可售钻石：{{cansold}}</el-col>
  	<el-col :span="22" :offset="1" class="soldcount"><el-input placeholder="请输入游戏ID" v-model="uids"><template slot="append"><el-button @click="getid" v-html="seccode"></el-button></template></el-input></el-col>
  	<el-col :span="22" :offset="1" class="soldcount"><el-input placeholder="请输入钻石数量" type="number" v-model="count"></el-input></el-col>
  	<el-col :span="22" :offset="1" class="soldcount"><el-button type="primary" class="btnsure" @click="besure">确认</el-button></el-col>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'diamondssold',
  data () {
    return {
      cansold: 11,
      seccode:'验证ID',
      uids:null,
      count:null
    }
  },
  methods:{
  	 getid:function () {
  	 var self =this;
  	 console.log(33);
  	  var params={uid:self.uids,cid:'2',channel:'fuyang',token:"vkvvSY710d4ee8",told:'2061160',sid:'626b61d318811b48cfb7303e0c016e92'}//参数
          axios.post('http://pay.queyoujia.com/user/check',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
            console.log(res.data.data.nickname);
            if (!res.data.data.nickname) {
            	 self.$message({
		          message: '游戏ID不存在',
		          type: 'warning'
		        });
            }else{
            	 self.uids=res.data.data.nickname;
            }
          }).catch(function (err) {
            console.log(err);
          })
  },
  besure:function () {
  	var self =this;
  	 var params={uid:self.uids,cid:'2',channel:'fuyang',token:"vkvvSY710d4ee8",told:'2061160',sid:'626b61d318811b48cfb7303e0c016e92',amount:self.count}//参数
  	  axios.post('http://pay.queyoujia.com/user/transfer',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
            console.log(res.data.data.nickname);
            if (res.data.code=='0') {
            	 self.$message({
		          message: '出售成功',
		          type: 'success'
		        });
            }else{
            	self.$message({
		          message: res.data.message,
		          type: 'error'
		        });
            }
          }).catch(function (err) {
            console.log(err);
          })
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.soldcount{margin-top: 2vh;font-size: 1rem;font-family: '微软雅黑';font-weight: normal;color: #1f2d3d;}
.btnsure{width: 100%;font-size: 1rem;margin-top: 2vh;}
</style>