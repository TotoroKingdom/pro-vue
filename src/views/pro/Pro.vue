<template>
    <div>
        <div class="content-header">
            <el-button type="primary" size="medium" @click="">创建项目</el-button>
        </div>
        <br>
        <div id="echartContainer" style="width:900px; height:500px"></div>
    </div>
</template>

<script>
    import axios from "axios"
    var echarts = require('echarts')

    export default {
        name: "Pro",
        data(){
            return{

            }
        },
        mounted() {
            axios.get("findAllProject")
                .then(response=>(this.pojectData=response.data))

            var myChart = echarts.init(document.getElementById('echartContainer'));

            myChart.setOption({
                title: {
                    text: '世界人口总量',
                    subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    projectName: []
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]


            });
        }


    }
</script>

<style scoped>

</style>
