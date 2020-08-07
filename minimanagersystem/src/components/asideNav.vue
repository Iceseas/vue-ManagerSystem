<template>
  <div class="asideNav_body">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <router-link
          tag="span"
          replace
          class="WidthHeight100"
          to="/Managerindex/index"
        >
        首页
        </router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>题库管理</span>
        </template>
        <el-menu-item index="2-1" @click="showSubjective_Problem">
          <router-link
            tag="span"
            replace
            class="WidthHeight100"
            to="/Managerindex/subjectiveItem"
          >
            评分中心
          </router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link
            tag="span"
            replace
            class="WidthHeight100"
            to="/Managerindex/showallquestion"
          >
            查看题库
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item index="3-1">基本设置</el-menu-item>
        <el-menu-item index="3-2">系统日志</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>管理员</span>
        </template>
        <el-menu-item index="4-1">权限管理</el-menu-item>
        <el-menu-item index="4-2">用户管理</el-menu-item>
        <el-menu-item index="4-3">
          <router-link
            tag="span"
            replace
            class="WidthHeight100"
            to="/Managerindex/accesslog"
          >
            访问记录
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showSubjective_Problem() {
      this.$store.commit("changeNowQuestionType", "subjective_publish");
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
    },
  },
};
</script>

<style>
.asideNav_body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
}
</style>
