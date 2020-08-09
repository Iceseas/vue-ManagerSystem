<template>
  <Table :height="table.height" stripe border :columns="table.columns" :data="table.tableData">
    <template slot-scope="{ row }" slot="userimg">
      <Avatar :src="row.userimg" />
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button
        type="primary"
        size="small"
        style="margin-right: 5px"
        @click="showAcessUser(row, index)"
        >查看</Button
      >
    </template>
  </Table>
</template>

<script>
export default {
  data() {
    return {
      table: {
        height: '525',
        columns: [
          {
            title: "头像",
            align: "center",
            slot: 'userimg',
            key: 'userimg'
          },
          {
            title: "昵称",
            align: "center",
            key: 'niceName'
          },
          {
            title: "性别",
            align: "center",
            key: 'gender'
          },
          {
            title: "城市",
            align: "center",
            key: 'city'
          },
          {
            title: "时间",
            align: "center",
            tooltip: true,
            key: 'Date'
          },
          {
            title: "操作",
            slot: "action",
            width: 150,
            align: "center",
          },
        ],
        tableData: [
          {
            userimg:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584249876391&di=9d9db787fdb1eff6d3518c061728892b&imgtype=0&src=http%3A%2F%2Fpic3.zhimg.com%2F50%2Fv2-e22fa8a3c340c4647ff4f679ce64ef5c_hd.jpg",
            niceName: "王小虎",
            gender: "男",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584250329174&di=aaea33f4b1c9c09774e86878c71bb09c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F28%2F20181028170516_hnpsx.thumb.700_0.jpeg",
            niceName: "韩寒",
            gender: "男",
            city: "Changchun",
            Date: "2020-03-14 14:23:03",
          },
          {
            userimg:
              "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",
            niceName: "cc",
            gender: "女",
            city: "Ningxia",
            Date: "2020-03-11 11:23:03",
          },
          {
            userimg:
              "https://i.loli.net/2017/08/21/599a521472424.jpg",
            niceName: "小小",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
          {
            userimg:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2076373339,2173673275&fm=26&gp=0.jpg",
            niceName: "icesea",
            gender: "女",
            city: "Dalian",
            Date: "2020-03-02 17:23:03",
          },
        ],
      },
      search: "",
    };
  },
  methods: {
    showAcessUser(row, index) {
      console.log(row, index);
    },
  },
};
</script>

<style scoped>
.userAccessLog_body {
  width: 100%;
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
</style>
