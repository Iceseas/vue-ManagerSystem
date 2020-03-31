<template>
<div class="questionTab">
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
</template>

<script>
export default {
    methods: {
    showSingle_C1(){
    this.$store.state.nowQuestionType = 'single_C1'
    this.$store.dispatch('get_PageInfo_AJAX')
    //调用store中的请求数据
    this.$store.dispatch('get_listData_AJAX')
    },
    showdecide(){
    this.$store.state.nowQuestionType = 'decide'
    this.$store.dispatch('get_PageInfo_AJAX')
    //调用store中的请求数据
    this.$store.dispatch('get_listData_AJAX')
    },
},
}
</script>

<style scoped>
    
</style>