<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item timestamp="2022/1/2" placement="top">
                <el-card>
                    <h4>返回地球</h4>
                    <p>小鹏 提交于 2022/1/2 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2021/4/3" placement="top">
                <el-card>
                    <h4>登上月球</h4>
                    <p>老刘 提交于 2021/4/3 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/1/1" placement="top">
                <el-card>
                    <h4>火箭发射</h4>
                    <p>小王 提于 2020/1/1 20:46</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "Milestone"
    }
</script>

<style scoped>

</style>
