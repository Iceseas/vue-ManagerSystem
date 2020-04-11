<template>
<div class="System_body">
<router-view class="login_res_body"></router-view>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    components:{
        
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.System_body{
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.login_res_body{
    width: 100%;
    height: 100%;
}
.cut_off_line{
    display: inline-block;
    height: 60px;
    width: 1px;
    background: #eee;
    margin-top: 20px;
}
.WidthHeight100{
    width: 100%;
    height: 100%;
    display: inline-block;
}
</style>
