<template>
    <div>
        <el-table
                :data="taskData"
                border
                style="width: 100%;height: 430px">
            <el-table-column
                    prop="任务ID"
                    label="taskID"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="projectName"
                    label="项目名称"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="taskName"
                    label="任务名称"
                    width="500">
            </el-table-column>
            <el-table-column
                    prop="releasePerson"
                    label="发布者"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="taskStatus"
                    label="任务状态"
                    width="100">
            </el-table-column>
            <el-table-column
                    label="操作">
                <el-button type="warning" icon="el-icon-edit" size="mini" @click="showEditDialog()">修改</el-button>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>

    export default {
        name: "MyTask",


    };

</script>

<style scoped>

</style>
