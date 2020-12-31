<template>
<div>
    <div>

        <el-table
                :data="weeklyList"
                border
                style="width: 100%;height: 430px">
            <el-table-column
                    prop="weeklyContent"
                    label="周报内容"
                    width="500">
            </el-table-column>
            <el-table-column
                    prop="empName"
                    label="提交者"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="startTime"
                    label="周报开始时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="endTime"
                    label="周报结束时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    label="操作">
                <el-button type="warning" icon="el-icon-edit" size="mini" @click="showEditDialog()">修改</el-button>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>

    import axios from "axios"

    export default {
        name: "Weekly",

        data(){
            return{
                weeklyList:[]
            }
        },

        mounted() {
            axios.get("weeklyView")
                .then(response=>(this.weeklyList=response.data))
        }

    }
</script>

<style scoped>

</style>
