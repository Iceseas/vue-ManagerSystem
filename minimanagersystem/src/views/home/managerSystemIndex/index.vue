<template>
  <div :style="`height:${indexHeight}`" class="index_body">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple index-header">
          <accessData></accessData>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content index-echarts">
          <StackedAreaChar></StackedAreaChar>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content index-echarts">
          <roseEchart class="aa"></roseEchart>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content index-echarts">
          <DynamicData></DynamicData>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <usermouthalive></usermouthalive>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple index-access">
          <userAccessLog></userAccessLog>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import roseEchart from "@/views/home/managerSystemIndex/common/Nightingale-rose-chart.vue";
import StackedAreaChar from "@/views/home/managerSystemIndex/common/Stacked-area-char.vue";
import DynamicData from "@/views/home/managerSystemIndex/common/DynamicData.vue";
import accessData from "@/views/home/managerSystemIndex/common/accessData.vue";
import userAccessLog from "@/views/home/managerSystemIndex/common/userAccessLog.vue";
import usermouthalive from "@/views/home/managerSystemIndex/common/usermouthalive.vue";

export default {
  data() {
    return{
      indexHeight: 0
    }
  },
  components: {
    roseEchart: roseEchart,
    StackedAreaChar: StackedAreaChar,
    DynamicData: DynamicData,
    accessData: accessData,
    userAccessLog: userAccessLog,
    usermouthalive: usermouthalive,
  },
  mounted() {
    window.onresize = () => {
      this.$nextTick(() => {
        this.indexHeight = document.body.clientHeight - 155 + "px";
      });
    };
    this.$nextTick(() => {
      this.indexHeight = document.body.clientHeight - 155 + "px";
    });
  },
};
</script>

<style scoped>
.index_body {
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.index-header {
  height: 100px;
  padding: 0 10px;
  line-height: 45px;
}
.index-echarts {
  height: 300px;
  width: 100%;
  background: #99a9bf;
}
</style>
