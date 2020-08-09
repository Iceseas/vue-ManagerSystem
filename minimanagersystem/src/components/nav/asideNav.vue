<template>
  <div class="asideNav_body">
    <Menu theme="dark" :active-name="activeName">
      <MenuGroup  title="首页" name="1">
        <MenuItem name="index" to="/Managerindex/index">
          <Icon type="md-heart" />
            首页
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="题库管理">
        <MenuItem name="subjectiveItem" to="/Managerindex/subjectiveItem">
          <Icon type="md-heart" />
            主观题
        </MenuItem>
        <MenuItem name="showallquestion" to="/Managerindex/showallquestion">
          <Icon type="md-leaf" />
            其他题型
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="系统设置">
        <MenuItem name="4">
          <Icon type="md-heart" />
          基本设置
        </MenuItem>
        <MenuItem name="5">
          <Icon type="md-leaf" />
          系统日志
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="管理员">
        <MenuItem name="6">
          <Icon type="md-heart" />
          权限管理
        </MenuItem>
        <MenuItem name="7">
          <Icon type="md-leaf" />
          用户管理
        </MenuItem>
        <MenuItem name="accesslog" to="/Managerindex/accesslog">
          <Icon type="md-leaf" />
            访问记录
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: ''
    };
  },
  mounted() {
    this.activeName = this.$route.name
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

<style scoped>
.asideNav_body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: left;
  overflow: hidden;
}
>>>.ivu-menu{
  height: 100%;
}
</style>
