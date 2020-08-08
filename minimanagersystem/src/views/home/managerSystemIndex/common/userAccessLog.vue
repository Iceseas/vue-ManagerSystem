<template>
  <div class="userAccessLog_body">
    <span class="userAccessLog_span">访问用户列表</span>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="" type="index"> </el-table-column>
      <el-table-column label="头像" prop="userimg">
        <template slot-scope="scope">
          <el-avatar :src="scope.row.userimg"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="昵称" prop="niceName"> </el-table-column>
      <el-table-column label="性别" prop="gender"> </el-table-column>
      <el-table-column label="城市" prop="city"> </el-table-column>
      <el-table-column label="时间" prop="Data"> </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >拷贝 Open ID</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          userimg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584249876391&di=9d9db787fdb1eff6d3518c061728892b&imgtype=0&src=http%3A%2F%2Fpic3.zhimg.com%2F50%2Fv2-e22fa8a3c340c4647ff4f679ce64ef5c_hd.jpg",
          niceName: "王小虎",
          gender: "男",
          city: "Dalian",
          Data: "2020-03-02 17:23:03",
        },
        {
          userimg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584250329174&di=aaea33f4b1c9c09774e86878c71bb09c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F28%2F20181028170516_hnpsx.thumb.700_0.jpeg",
          niceName: "韩寒",
          gender: "男",
          city: "Changchun",
          Data: "2020-03-14 14:23:03",
        },
        {
          userimg:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",
          niceName: "cc",
          gender: "女",
          city: "Ningxia",
          Data: "2020-03-11 11:23:03",
        },
        {
          userimg:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1512824571,1166042350&fm=11&gp=0.jpg",
          niceName: "小小",
          gender: "女",
          city: "Dalian",
          Data: "2020-03-02 17:23:03",
        },
      ],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
.userAccessLog_body {
  width: 100%;
  height: 100%;
}
.userAccessLog_span {
  display: block;
  line-height: 30px;
  height: 30px;
  width: 100%;
  padding: 0px 10px;
  box-sizing: border-box;
  text-align: left;
  background: #fff;
  border-bottom: 1px solid #eee;
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
  height: 30px;
  line-height: 30px;
}
</style>
