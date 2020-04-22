<template>
    <div class="dialog-body">
    <el-row>
    <el-col class="card-box" :span="24" v-for="(item, index) in data" :key="index" >
        <el-card class="box-card" v-if="isshowCard">
        <div slot="header" class="clearfix">
            <span class="card-title">第{{index+1}}题</span>
            <button class="card_btn" :data-id="index" @click="getFatherData" >添加备注</button>
        </div>
        <div class="card-main">{{item.value.value}}</div>
        </el-card>
        
    </el-col>
     <el-col class="card-box" :span="24" >
       <div v-if="!isshowCard" >
    <Editor class="CardModifyDataTestArea" v-on:input="GetinputData"  v-model="fatherData"></Editor>
    <button class="backCard" @click="BackCard">提交</button>
    </div>
    </el-col>
    </el-row>
    </div>
</template>

<script>
import  Editor from './editor';
export default {
    data() {
      return {
          NewDataForm:[],
          fatherData:'',
          dataId:null,
          isshowCard:true
      }
    },
    methods: {
      getFatherData(event){
        let target = event.target || window.event.srcElement
        let id = target.getAttribute('data-id')
        this.dataId = id
        this.isshowCard = false
        this.fatherData = (JSON.parse(JSON.stringify(this.data[id]))).value.value
      },
      onSubmit(data) {
        this.NewDataForm = data
        this.$emit('showSubjective','123')
        this.$store.state.isFromShow = false
      },
      GetinputData(data)
      {
        let dataOne = data.slice(3)
        let dataFina = dataOne.substring(0,dataOne.length-4)
        this.$set(this.data[this.dataId], this.data[this.dataId].value.value, dataFina)
        this.data[this.dataId].value.value = dataFina
      },
      BackCard(){
        console.log(this.data)
        this.isshowCard = true
      }
    },
    props:{
      data:{
        required:true
      }
    },
    mounted() {
      

    },
    updated() {
      
    },
    beforedestroyed() {
      window.addEventListener('load', function () {
        alert(this.$route.path)
      if (this.$route.path === '/Managerindex/subjectiveItem') { // /date 表示日期选择路由
          this.$router.replace('/Managerindex/index') // 列表页面的路由
      }
    })
    },
    components:{
      Editor:Editor
    }
  };
</script>

<style scoped>
.dialog-body{
    line-height: 30px;
    width: 100%;
    height: 100%;
}
.card-box{
    margin-top: 10px;
    text-align: left;
}   
.card-box:nth-of-type(1){
    margin-top: 0px;
}
.card-title{
    font-size: 14px;
    font-weight: 600;
}
.card-main{
    font-size: 16px;
}
.card_btn{
    float: right; 
    padding: 3px 0;
    background: none;
    border: none;
    outline: none;
    color: #409EFF;
    cursor: pointer;
}
.CardModifyDataTestArea{
  box-sizing: border-box;

}
.backCard{
  width: 80px;
}
.CardModifyTitle{
  color: #409EFF;
  font-size: 20px;
  font-weight: 600;
}
</style>