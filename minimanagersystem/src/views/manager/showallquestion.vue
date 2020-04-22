<template>
    <div class="showQuestions">
        <!-- 页头返回 -->
        <!-- <div class="page-header">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Managerindex/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/Managerindex/showallquestion' }">第一单元单元题</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <div class="questionTab">
        <el-row :gutter="20">
        <el-col :span="3">
            <span @click="showSingle('single_C1')">
           
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">

            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第一单元</span>
            </div>
        
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showSingle('single_C2')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">

            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第二单元</span>
            </div>
  
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showSingle('single_C3')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
   
            <div class="cardtitle"> 
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第三单元</span>
            </div>
 
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showSingle('single_C4_5')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
  
            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第四-五单元</span>
            </div>
    
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showSingle('single_C6')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">

            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第六单元</span>
            </div>
     
            </el-card>
            </span>
        </el-col>
       <el-col :span="3">
            <span @click="showSingle('single_C7')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">

            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第七单元</span>
            </div>
         
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showSingle('single_C10')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
          
            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第十单元</span>
            </div>
        
            </el-card>
            </span>
        </el-col>
       <el-col :span="3">
            <span @click="showSingle('single_C11')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
       
            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第十一单元</span>
            </div>
       
            </el-card>
            </span>
        </el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="3">
            <span @click="showvacancy('vacancy_C1')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
          
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第一单元</span>
            </div>
          
            </el-card>
            </span>
        </el-col>
       <el-col :span="3">
            <span @click="showvacancy('vacancy_C2')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第二单元</span>
            </div>
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showvacancy('vacancy_C3')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第三单元</span>
            </div>
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showvacancy('vacancy_C4_5')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第四-五单元</span>
            </div>
            </el-card>
            </span>
        </el-col>
       <el-col :span="3">
            <span @click="showvacancy('vacancy_C6')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第六单元</span>
            </div>
            </el-card>
            </span>
        </el-col>
       <el-col :span="3">
            <span @click="showvacancy('vacancy_C7')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第七单元</span>
            </div>
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showvacancy('vacancy_C10')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第十单元</span>
            </div>
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showvacancy('vacancy_C11')">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>填空</span>
            </div>
            <div class="cardChapter">
                <span>第十一单元</span>
            </div>
            </el-card>
            </span>
        </el-col>
        
        </el-row>
        <el-row :gutter="20">
        <el-col :span="3">
            <span @click="showdecide()">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>判断</span>
            </div>
            <div class="cardChapter">
                <span>综合</span>
            </div>
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
           <span @click="showApplicationQuestion()">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <div class="cardtitle">
                <span>应用</span>
            </div>
            <div class="cardChapter">
                <span>大题</span>
            </div>
            </el-card>
            </span>
        </el-col>   
        </el-row>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showQuestionData:false
        }
    },
    methods: {
    showSingle(questionType){
    this.$store.commit('changeNowQuestionType',questionType); 
    this.$store.dispatch('get_PageInfo_AJAX')
    this.$store.dispatch('get_listData_AJAX')
    this.showQuestionData = true
        this.$router.push('showTable')
    },
    showdecide(){
    this.$store.commit('changeNowQuestionType','decide'); 
    this.$store.dispatch('get_PageInfo_AJAX')
    this.$store.dispatch('get_listData_AJAX')
    this.showQuestionData = true
        this.$router.push('showTable')
    },
    showvacancy(questionType){
    this.$store.commit('changeNowQuestionType',questionType); 
    this.$store.dispatch('get_PageInfo_AJAX')
    this.$store.dispatch('get_listData_AJAX')
    this.showQuestionData = true
        this.$router.push('showTable')
    },
    showApplicationQuestion(){
    this.$store.commit('changeNowQuestionType','applicationQuestion'); 
    this.$store.dispatch('get_PageInfo_AJAX')
    this.$store.dispatch('get_listData_AJAX')
    this.showQuestionData = true
    this.$router.push('showTable')
    }
    },
    mounted() {
        
    },
    destroyed() {
        this.tableData = []
    },
}
</script>

<style>
.showQuestions{
    height: auto;
    width: 100%;
}
.el-input-group{
    float: left;
}
.serach_input{
    width: 100%;
    height: 40px;
}
.el-table__header tr,
.el-table__header th {
    padding: 0;
    height: 40px;
    line-height: 40px;
}
.el-table__body tr,
.el-table__body td {
    padding: 0;
    height: 40px;
    line-height: 40px;
}
.el-row {
margin-bottom: 20px;
}
.el-col {
border-radius: 4px;
}
.bg-purple-dark {
background: #99a9bf;
}
.bg-purple {
background: #d3dce6;
}
.bg-purple-light {
background: #e5e9f2;
}
.grid-content {
border-radius: 4px;
min-height: 36px;
}
.row-bg {
padding: 10px 0;
background-color: #f9fafc;
}
.showquestions_serch_add{
    margin-top: 20px;
}
.search_box{
    height: 40px;
}
.el-select .el-input {
width: 130px;
}
.input-with-select .el-input-group__prepend {
background-color: #fff;
}
.el-pagination{
    height: 30px;
}
.questionTab{
  box-sizing: border-box;
  padding-top:20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 1px;
}
.cardtitle,.cardChapter{
    width: 100%;
    height: 80px;
    line-height: 80px;
}
.dialog-bodybox{
    width: 700px;
    min-height: 400px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border:1px solid #eee;
    border-radius: 6px;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 99;
}
.dialog_body_header{
    width: 100%;
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #eee;
    cursor: move;
    position: relative;
}
.dialog_close{
    font-size: 16px;
}
.dialog_close_span{
    line-height: 25px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.dialog_close_title{
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 16px;
}
</style>