<template>
    <div id="app">
        <!--创建一个echarts的容器-->
        <div id="echartContainer" style="width:900px; height:500px"></div>
    </div>
</template>

<script>

    import axios from "axios"
    var echarts = require('echarts')

    export default {
        name: "MyPro",
        data(){
            return{
                projectData:[]
            }
        },
        mounted() {
            axios.get("findAllProject")
                .then(response=>(this.projectData=response.data));

            var myChart = echarts.init(document.getElementById('echartContainer'));

            const projectNames = this.projectData.map((item)=>{
                    return item.projectName
                });

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
                    data: projectNames
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

    };

</script>

<style scoped>

</style>
