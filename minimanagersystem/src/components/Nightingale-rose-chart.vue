<template>
    <div class="roseEchars" id="roseEchars" ref="roseEchars"></div>
</template>

<script>
export default {
    mounted() {
        const roseEchars = this.$echarts.init(this.$refs.roseEchars);
        let options ={
             textStyle: {
                color: 'rgba(255, 255, 255, 1)'
            },
                        title: {
                            text: 'Customized Pie',
                            left: 'center',
                            top: 20,
                            textStyle: {
                                color: '#fff'
                            }
                        },

                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },

                        visualMap: {
                            show: false,
                            min: 80,
                            max: 600,
                            inRange: {
                                colorLightness: [0, 1]
                            }
                        },
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '50%'],
                                data: [
                                    {value: 335, name: '今日访问'},
                                    {value: 310, name: '请求次数'},
                                    {value: 274, name: '容量'},
                                    {value: 235, name: 'DCN流量'},
                                    {value: 400, name: '函数使用量'}
                                ].sort(function (a, b) { return a.value - b.value; }),
                                roseType: 'radius',
                                label: {
                                    color: 'rgba(255, 255, 255, 1)'
                                },
                                labelLine: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                },
                                itemStyle: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },

                                animationType: 'scale',
                                animationEasing: 'elasticOut',
                                animationDelay: function () {
                                    return Math.random() * 200;
                                }
                            }
                        ]
                }
        roseEchars.setOption(options);
    },
}
</script>

<style>
.roseEchars{
    width: 100%;
    height: 100%;
}  
</style>