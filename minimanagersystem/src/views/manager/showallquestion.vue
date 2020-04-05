<template>
    <div class="showQuestions">
        <!-- 页头返回 -->
        <div class="page-header">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Managerindex/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/Managerindex/showallquestion' }">第一单元单元题</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="questionTab" v-if="!showQuestionData">
        <el-row :gutter="20">
        <el-col :span="3">
            <span @click="showSingle_C1()">
           
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <router-link tag="span" to="/Managerindex/showallquestion/showTable">
            <div class="cardtitle">
                <span>单选</span>
            </div>
            <div class="cardChapter">
                <span>第一单元</span>
            </div>
            </router-link>
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <span @click="showdecide()">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            <router-link tag="span" to="/Managerindex/showallquestion/showTable">
            <div class="cardtitle">
                <span>判断</span>
            </div>
            <div class="cardChapter">
                <span>综合</span>
            </div>
            </router-link>
            </el-card>
            </span>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        <el-col :span="3">
            <el-card :body-style="{padding:'0px',cursor: 'pointer'}" shadow="always">
            鼠标悬浮时显示
            </el-card>
        </el-col>
        </el-row>
    </div>
        <router-view v-if="showQuestionData"></router-view>
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
    showSingle_C1(){
    console.log('进入C1')
    this.$store.commit('changeNowQuestionType','single_C1'); 
    this.$store.dispatch('get_PageInfo_AJAX')
    //调用store中的请求数据
    this.$store.dispatch('get_listData_AJAX')
    this.showQuestionData = true
    },
    showdecide(){
    console.log('进入de')
    this.$store.commit('changeNowQuestionType','decide'); 
    this.$store.dispatch('get_PageInfo_AJAX')
    //调用store中的请求数据
    this.$store.dispatch('get_listData_AJAX')
    this.showQuestionData = true
    },
    },
    mounted() {
        this.$store.commit('getVuethis',(this)); 
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