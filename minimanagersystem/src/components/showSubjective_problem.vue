<template>
    <div class="dialog-body">
    <el-row>
    <el-col class="card-box" :span="24" v-if="isshowCard">
      <div class="gradevalue" >
         <label>评分：(也可以在输入框内输入分数)</label>
        <el-slider
          v-model="data.grade"
          show-input>
        </el-slider>
      </div>
      <div>
        <label for="remarkinput">添加评语：</label>
      <el-input style="font-size:16px" id="remarkinput" v-model="data.remark" :value="data.remark" autosize :data-id="dataId" type="textarea" placeholder="请输入内容" maxlength="300" show-word-limit>
      </el-input>
      </div>
        <el-card class="box-card" v-for="(item, index) in data.problemsAnswer" :key="index" >
        <div slot="header" class="clearfix">
            <span class="card-title">第{{index+1}}题</span>
            <button class="card_btn" :data-id="index" @click="getFatherData" >添加备注</button>
        </div>
        <div class="card-main">{{item}}</div>
        </el-card>
        <div class="subBtn" v-if="isshowCard">
        <el-button type="primary" class="cardSubmit" @click="onSubmit(data)">提交</el-button>
    </div>
    </el-col>
     <el-col class="card-box" :span="24" v-if="!isshowCard">
       
    <div>
      <label class="CardModifyDatalable">添加备注：</label>
    <Editor class="CardModifyDataTestArea" v-on:input="GetinputData"  v-model="fatherData"></Editor>
    <el-button type="primary" class="backCard" @click="BackCard">提交</el-button>
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
          NewDataForm:null,
          fatherData:'',
          dataId:null,
          isshowCard:true,
      }
    },
    methods: {
      getFatherData(event){
        let target = event.target || window.event.srcElement
        let id = target.getAttribute('data-id')
        this.dataId = id
        this.isshowCard = false
        this.remark = this.data.remark[this.dataId]
        if(this.data.grade[this.dataId]=="")
        {
          this.gradevalue = 0
        }
        else{
          this.gradevalue = this.data.grade[this.dataId]
        }
        this.fatherData = this.data.problemsAnswer[id]
      },
      onSubmit(data) { 
        this.NewDataForm = data
        console.log('提交',this.NewDataForm)
        this.$emit('showSubjective',this.NewDataForm)
        this.$store.state.isFromShow = false
      },
      GetinputData(data)
      {
        let dataOne = data.slice(3)
        let dataFina = dataOne.substring(0,dataOne.length-4)
        this.data.problemsAnswer[this.dataId]= dataFina
      },
      BackCard(){
        for(let i = 0;i<this.data.problemsAnswer.length;i++)
        {
          this.data.problemsAnswer[i] = this.data.problemsAnswer[i].replace(/\<.*?\>/g,'')
        }
        console.log(this.data)
        this.isshowCard = true
      },
    },
    props:{
      data:{
        required:true
      }
    },
    mounted() {
      console.log(this.data.problemsAnswer)
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
  margin-top: 10px;
}
.CardModifyTitle{
  color: #409EFF;
  font-size: 20px;
  font-weight: 600;
}
.subBtn{
  width: 100%;
  text-align: right;
}
.gradevalue{
  width: 100%;
  box-sizing: border-box;

}
.CardModifyDatalable{
  margin-top: 20px;
  display: block;
}
.cardSubmit{
  margin-top: 10px;
}
</style>