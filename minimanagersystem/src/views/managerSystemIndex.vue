<template>
<div class="manager_body">
<el-container class="el-container">
  <el-header><headerNav></headerNav></el-header>
  <el-container>
    <el-aside width="210px">
      <asideNav></asideNav>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
import headerNav from '../components/headernav'
import asideNav from '../components/asideNav'
export default {
  data(){
    return{
    }
  },
  components:{
    headerNav:headerNav,
    asideNav:asideNav
  },
  methods: {
    
  },
}
</script>

<style>
.clickdiv{
  width: 50px;
  height: 50px;
  background: burlywood;
}
html,
body,
.manager_body,
.el-container{
  height: 100%;
  width: 100%;
  min-width: 1000px;
}
.manager_body{
  background:url(https://w.wallhaven.cc/full/ym/wallhaven-ym5d1x.jpg)no-repeat; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  box-shadow: 0 0 10px #fff;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  background: rgba(99, 110, 114,0.8);
}

.el-main {
  background-color: #e5e9f2;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>