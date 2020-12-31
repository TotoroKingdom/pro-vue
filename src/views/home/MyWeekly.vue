<template>
    <div>
        <div class="content-header">
            <el-button type="primary" size="medium" @click="handleAdd">新增周报</el-button>
        </div>
        <div>
            <el-table
                    :data="myWeeklyData"
                    border
                    style="width: 100%;height: 600px">
                <el-table-column
                        prop="weeklyContent"
                        label="周报内容"
                        width="500">
                </el-table-column>
                <el-table-column
                        prop="empName"
                        label="姓名"
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
        name: "MyWeekly",

        data(){
            return{
                myWeeklyData:[]
            }
        },

        mounted() {
            axios.get("weeklyView")
                .then(response=>(this.myWeeklyData=response.data))
        }


    };

</script>

<style scoped>

</style>
