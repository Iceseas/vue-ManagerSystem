<template>
  <div class="DynamicData" ref="DynamicData"></div>
</template>

<script>
export default {
  mounted() {
    let app = new Object();
    const DynamicData = this.$echarts.init(this.$refs.DynamicData);
    let options = {
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#283b56",
          },
        },
      },
      legend: {
        data: ["最新访问量", "点击量"],
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: (function() {
            var now = new Date();
            var res = [];
            var len = 10;
            while (len--) {
              res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
              now = new Date(now - 2000);
            }
            return res;
          })(),
        },
        {
          type: "category",
          boundaryGap: true,
          data: (function() {
            var res = [];
            var len = 10;
            while (len--) {
              res.push(10 - len - 1);
            }
            return res;
          })(),
        },
      ],
      yAxis: [
        {
          type: "value",
          scale: true,
          name: "访问数",
          max: 30,
          min: 0,
          boundaryGap: [0.2, 0.2],
        },
        {
          type: "value",
          scale: true,
          name: "频率",
          max: 1200,
          min: 0,
          boundaryGap: [0.2, 0.2],
        },
      ],
      series: [
        {
          name: "预购队列",
          type: "bar",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: (function() {
            var res = [];
            var len = 10;
            while (len--) {
              res.push(Math.round(Math.random() * 1000));
            }
            return res;
          })(),
        },
        {
          name: "最新成交价",
          type: "line",
          data: (function() {
            var res = [];
            var len = 0;
            while (len < 10) {
              res.push((Math.random() * 10 + 5).toFixed(1) - 0);
              len++;
            }
            return res;
          })(),
        },
      ],
    };
    app.count = 11;
    setInterval(function() {
      var axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");

      var data0 = options.series[0].data;
      var data1 = options.series[1].data;
      data0.shift();
      data0.push(Math.round(Math.random() * 1000));
      data1.shift();
      data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

      options.xAxis[0].data.shift();
      options.xAxis[0].data.push(axisData);
      options.xAxis[1].data.shift();
      options.xAxis[1].data.push(app.count++);

      DynamicData.setOption(options);
    }, 2100);
  },
};
</script>

<style scoped>
.DynamicData {
  width: 100%;
  height: 100%;
}
</style>
