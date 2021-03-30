<template>
<div>

    <!--列表区域-->
    <div>
        <!--周报列表-->
        <el-table
                :data="weeklyList"
                border
                style="width: 100%;height: 550px">
            <el-table-column
                    prop="weeklyContent"
                    label="周报内容"
                    width="750">
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
                <template slot-scope="scope">
                    <el-button type="warning"
                               icon="el-icon-edit"
                               @click="showEditDialog(scope.row.weeklyID)"
                               size="mini">修改</el-button>
                    <el-button type="danger"
                               icon="el-icon-delete"
                               @click="removeWeeklyByID(scope.row.weeklyID)"
                               size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--修改周报-->
        <el-dialog
                title="修改周报"
                :visible.sync="editDialogVisible"
                width="50%">
            <!--内容主体区域-->
            <el-form :model="editForm"
                     ref="editFormRef"
                     label-width="70px">
                <el-form-item label="周报ID" prop="weeklyID">
                    <el-input v-model="editForm.weeklyID"></el-input>
                </el-form-item>
                <el-form-item label="周报内容" prop="weeklyContent">
                    <el-input v-model="editForm.weeklyContent"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" prop="startTime">
                    <el-input v-model="editForm.startTime"></el-input>
                </el-form-item>
                <el-form-item label="结束时间" prop="endTime">
                    <el-input v-model="editForm.endTime"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateWeekly">确 定</el-button>
            </span>
        </el-dialog>

        <!--分页区域-->
        <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageInfo.pageNum"
                :page-sizes="[5,6,8,10]"
                :page-size="pageInfo.pageSize"
                layout="total,sizes,prev, pager, next,jumper"
                :total="total">
        </el-pagination>

    </div>
</div>
</template>

<script>

    import axios from "axios"

    export default {
        name: "DisplayControllerWeekly",

        data(){
            return{

                //周报列表数据
                weeklyList:[],

                //分页信息
                pageInfo:{
                    pageNum: 1,//当前页
                    pageSize: 5//每页展示的用户数
                },

                //总用户数
                total: 0,

                //编辑周报信息
                editForm:{},

                //编辑周报对话框的显示与隐藏
                editDialogVisible: false,

            }
        },

        methods: {
            //分页获取周报列表
            getPageWeekly(){
                axios.post("getDisplayControlWeekly",this.pageInfo
                ).then(response=>(this.weeklyList=response.data.list
                    ,this.total=response.data.total))
            },

            //展示编辑周报对话框
            showEditDialog(weeklyID){
                console.log(weeklyID)
                axios.post("getWeeklyByWeeklyID",{
                    weeklyID: weeklyID
                }).then(response=>(this.editForm=response.data))
                this.editDialogVisible = true
            },

            //修改周报
            updateWeekly(){
                axios.post("updateWeekly",this.editForm).then(response=>(this.editForm=response.data))
                this.editDialogVisible = false
                this.$message.success('修改周报成功')
            },

            //删除用户
            removeWeeklyByID(weeklyID) {
                const confirmResult = this.$confirm('此操作将永久删除该周报, 是否继续?', '提示'
                    , {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                    axios.post("deleteWeekly", {
                        weeklyID: weeklyID
                    }).then(response => (this.remove = response.data))
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },


            //监听 pagesize 改变的事件
            handleSizeChange(newSize){
                this.pageInfo.pageSize = newSize
                this.getPageWeekly()
            },

            //监听 页码值 改变的事件
            handleCurrentChange(newPage){
                this.pageInfo.pageNum = newPage
                this.getPageWeekly()
            },
        },

        created() {
            this.getPageWeekly();
        }

    }
</script>

<style scoped>

</style>
