<template>
    <div class="headernav_body">
        <div class="headernav_title">ManagerSystem</div>
        <div class="headernav_menu">
            <ul class="headernav_menu_ul">
                <li class="headernav_menu_ul_li">
                    <el-dropdown class="el-dropdown">
                    <span class="el-dropdown-link">
                        菜单1<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                        <el-dropdown-item command="b">狮子头</el-dropdown-item>
                        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="headernav_menu_ul_li">
                    <el-dropdown class="el-dropdown">
                    <span class="el-dropdown-link">
                        菜单2<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                        <el-dropdown-item command="b">狮子头</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="headernav_menu_ul_li">
                    <el-dropdown class="el-dropdown">
                    <span class="el-dropdown-link">
                        菜单3<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                        <el-dropdown-item command="b">狮子头</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="headernav_menu_ul_li">
                    <el-dropdown class="el-dropdown">
                    <span class="el-dropdown-link">
                        菜单4<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                        <el-dropdown-item command="b">狮子头</el-dropdown-item>
                        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item command="d" >双皮奶</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
            <ul class="headernav_ShowUserMsg_ul">
                <li class="headernav_ShowUserMsg_li">欢迎您：宋老师{{this.$store.state.nowLoginUserCount}}</li>
                <li class="headernav_ShowUserMsg_li"><i class="el-icon-s-custom"></i></li>
                <li class="headernav_ShowUserMsg_li"><i class="el-icon-message"></i></li>
                <li class="headernav_ShowUserMsg_li"><i class="el-icon-download exiticon"></i></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex: '1',
            activeIndex2: '1',
            welcomeManager:''
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    //   handleCommand(command) {
    //     this.$message('click on item ' + command);
    //   }
    },
    mounted() {
        console.log(this.$store.state.nowLoginUserCount)
    },
}
</script>

<style scope>
.el-dropdown-link,
.el-dropdown{
    width: 100%;
    height: 100%;
    z-index: 2;
    box-sizing: border-box;
}
.el-dropdown-link {
    display: block;
    cursor: pointer;
    color: #f7f1e3;
    font-weight: 600;
}
.el-dropdown:hover{
    transition: 0.3s;
    border-bottom: 3px solid #ffd04b;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.headernav_menu_ul{
    display: inline-block;
    height: 100%;

}
.headernav_menu_ul_li{
    float: left;
    padding: 0 10px;
    width: 100px;
    min-width: 90px;
    list-style: none;
    color: #f7f1e3;
    text-align: center;
    box-sizing: border-box;
}
.headernav_body{
    display: flex;
    overflow: hidden;
}
.headernav_title{
    text-align: center;
    font-size: 20px;
    font-family:Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    font-weight: 600;
    background-color: rgba(31, 35, 34,1);
    min-width: 200px;
    color: #f7f1e3;
}

.headernav_menu{
    text-align: left;
    background-color: rgba(31, 35, 34,1);
    flex-grow: 1;
    padding-left: 100px;
    box-sizing: border-box;
}
.headernav_body,
.header_logo{
    width: 100%;
    height: 100%;
}
.headernav_ShowUserMsg_ul{
    height: 100%;
    float: right;
    list-style: none;
    margin-right: 20px;
    width: 600px;
    display: flex;
}
.headernav_ShowUserMsg_li{
    height: 100%;
    color: #fff;
    float: left;
    text-align: center;
    box-sizing: border-box;
    font-size: 14px;
}
.headernav_ShowUserMsg_li:nth-of-type(1){
    width: 300px;
    font-weight: 600;
}
.headernav_ShowUserMsg_li:nth-of-type(2)
,.headernav_ShowUserMsg_li:nth-of-type(3)
,.headernav_ShowUserMsg_li:nth-of-type(4){
    flex: 1;
    font-size: 20px;
    cursor: pointer;
}
.exiticon{
    transform: rotate(-90deg);
}
</style>
