<template>
  <div :style="`height:${indexHeight}`">
    <Row>
      <Col span="24">
        <accessData></accessData>
      </Col>
    </Row>
    <Row :gutter="20" style="margin-top:20px">
      <Col span="8">
        <div class="userMouth">
          <p class="userouthalive_p">今日活跃用户</p>
          <span class="usermouthalive_Num">3</span>
          <span class="usermouthalive_Sum">人</span>
        </div>
      </Col>
      <Col span="8">
        <div class="userMouth">
          <p class="usermouthalive_p">本周活跃用户</p>
          <span class="usermouthalive_Num">3</span>
          <span class="usermouthalive_Sum">人</span>
        </div>
      </Col>
      <Col span="8">
        <div class="userMouth">
          <p class="usermouthalive_p">本月活跃用户</p>
          <span class="usermouthalive_Num">12</span>
          <span class="usermouthalive_Sum">人</span>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="8"> </Col>
      <Col span="8"> </Col>
      <Col span="8"> </Col>
    </Row>
    <Row :gutter="20" style="margin-top:20px">
      <Col span="12">
        <span class="cardTitle">成绩及数据率</span>
        <div
          id="userAccessEcharts"
          style="width: 100%;height:200px;box-sizing:border-box"
        ></div>
        <div
          id="listEcharts"
          style="width: 100%;height:300px;box-sizing:border-box;margin-left:-50px"
        ></div>
      </Col>
      <Col span="12">
        <span class="cardTitle">系统月访问用户</span>
        <userAccessLog></userAccessLog>
      </Col>
    </Row>
  </div>
</template>

<script>
import accessData from "@/views/home/managerSystemIndex/common/accessData.vue";
import userAccessLog from "@/views/home/managerSystemIndex/common/userAccessLog.vue";

export default {
  data() {
    return {
      indexHeight: 0,
    };
  },
  components: {
    accessData: accessData,
    userAccessLog: userAccessLog,
  },
  mounted() {
    this.userAccessEcharts();
    this.listEcharts();
    window.onresize = () => {
      this.$nextTick(() => {
        this.indexHeight = document.body.clientHeight - 155 + "px";
      });
    };
    this.$nextTick(() => {
      this.indexHeight = document.body.clientHeight - 155 + "px";
    });
  },
  methods: {
    userAccessEcharts() {
      let userAccessEcharts = this.$echarts.init(
        document.getElementById("userAccessEcharts")
      );
      userAccessEcharts.setOption({
        title: {
          text: "总体成绩",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["较差", "一般", "中等", "良好", "优秀"],
        },
        series: [
          {
            name: "成绩及数据率",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "较差" },
              { value: 310, name: "一般" },
              { value: 234, name: "中等" },
              { value: 135, name: "良好" },
              { value: 1548, name: "优秀" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    listEcharts() {
      let listEcharts = this.$echarts.init(
        document.getElementById("listEcharts")
      );
      listEcharts.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["考试及格率", 43.3, 85.8, 93.7],
            ["提交率", 83.1, 73.4, 55.1],
            ["访问率", 86.4, 65.2, 82.5],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      });
    },
  },
};
</script>

<style scoped>
.usermouthalive_Num {
  font-size: 40px;
}
.userMouth {
  box-shadow: 0 2px 7px rgba(0,0,0,.35);
  background: #2db7f5;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  padding: 10px 0;
  font-weight: 600;
}
</style>
