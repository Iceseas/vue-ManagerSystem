<template>
    <div class="StackedAreaChar" ref="StackedAreaChar"></div>
</template>

<script>
export default {
    mounted() {
        const StackedAreaChar = this.$echarts.init(this.$refs.StackedAreaChar);
        let options = {
            textStyle: {
                color: 'rgba(255, 255, 255, 1)'
            },
                tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(31, 35, 34,0.8)'
                    }
                }
            },
            legend: {
                data: ['今日访问', '请求次数', '容量', 'DCN流量', '函数使用量'],
                textStyle: {
                color: 'rgba(255, 255, 255, 1)'
                },
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    textStyle:'#fff'
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        },
                    },
                    areaStyle: {},
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
            ]
        };
        StackedAreaChar.setOption(options);
    },
}
</script>

<style>
.StackedAreaChar{
    width: 100%;
    height: 100%;
}
</style>