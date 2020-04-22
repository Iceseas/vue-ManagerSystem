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
        
    },
    created(){
			//在页面加载时读取sessionStorage里的状态信息
			if (sessionStorage.getItem("store") ) {
				this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
			}
			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload",()=>{
				sessionStorage.setItem("store",JSON.stringify(this.$store.state))
			})
    },
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
.showTable_box{
    width: 100%;
    height: 100%;
}
.addData_box{
    padding: 0;
    margin: 0;
    line-height: 0;
    text-align: left;
} 
</style>
