<template>
  <div class="layout">
    <Layout>
      <Header :style="{ borderBottom: '1px solid #17233d' }">
        <headerNav></headerNav>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <asideNav></asideNav>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content
            :style="{ minHeight: '280px' }"
          >
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import headerNav from "@/components/nav/headernav";
import asideNav from "@/components/nav/asideNav";
export default {
  data() {
    return {
      mainHeight: 0,
    };
  },
  components: {
    headerNav: headerNav,
    asideNav: asideNav,
  },
  methods: {},
  mounted() {
    this.$store.commit("getVuethis", this);
  },
};
</script>

<style>
.clickdiv {
  width: 50px;
  height: 50px;
  background: burlywood;
}
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
