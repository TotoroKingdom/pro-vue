<template>
    <div>
        <div class="content-header">
            <el-button type="primary"
                       size="medium"
                       @click="addDialogVisible=true">新增周报</el-button>
        </div>
        <!--列表区域-->
        <div>
            <!--周报列表-->
            <el-table
                    :data="myWeeklyList"
                    border
                    style="width: 100%;height: 550px">
                <el-table-column
                        prop="weeklyContent"
                        label="周报内容"
                        width="750">
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
                    <template slot-scope="scope">
                        <el-button type="warning"
                                   icon="el-icon-edit"
                                   @click="showEditDialog(scope.row.weeklyID)"
                                   size="mini">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!--添加周报-->
            <el-dialog
                    :visible.sync="addDialogVisible"
                    title="添加周报">
                <el-row :gutter="15">
                    <el-form ref="elForm" :model="addForm" :rules="rules" size="medium" label-width="100px">
                        <el-col :span="24">
                            <el-form-item label="用户ID" prop="userID">
                                <el-input v-model="addForm.userID" placeholder="请输入你的用户ID" show-word-limit clearable
                                          prefix-icon='el-icon-user' :style="{width: '100%'}"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="周报内容" prop="weeklyContent">
                                <el-input v-model="addForm.weeklyContent" type="textarea" placeholder="请输入周报内容" :maxlength="5000"
                                          show-word-limit :autosize="{minRows: 1, maxRows: 10}"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="开始时间" prop="startTime">
                                <el-date-picker v-model="addForm.startTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                                                :style="{width: '100%'}" placeholder="请选择周报开始时间" clearable></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="结束时间" prop="endTime">
                                <el-date-picker v-model="addForm.endTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                                                :style="{width: '100%'}" placeholder="请选择周报结束时间" clearable></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-row>
                <div slot="footer">
                    <el-button @click="addDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addWeekly">确 定</el-button>
                </div>
            </el-dialog>

            <!--修改周报-->
            <el-dialog
                    title="修改周报"
                    :visible.sync="editDialogVisible"
                    width="50%">
                <!--内容主体区域-->
                <el-form :model="editForm"
                         ref="editFormRef"
                         label-width="70px">
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
        name: "MyWeekly",

        data(){
            return{
                //周报列表数据
                myWeeklyList:[],

                //分页信息
                pageInfo:{
                    userID: 1,//当前用户
                    pageNum: 1,//当前页
                    pageSize: 5//每页展示的用户数
                },

                //总用户数
                total: 0,

                //添加周报数据
                addForm:{
                    weeklyID: "",
                    userID: "",
                    weeklyContent: "",
                    startTime: "",
                    endTime: ""
                },

                //验证规则
                rules: {
                    userID: [{
                        required: true,
                        message: '请输入你的用户ID',
                        trigger: 'blur'
                    }],
                    weeklyContent: [{
                        required: true,
                        message: '请输入周报内容',
                        trigger: 'blur'
                    }],
                    startTime: [{
                        required: true,
                        message: '请选择周报开始时间',
                        trigger: 'change'
                    }],
                    endTime: [{
                        required: true,
                        message: '请选择周报结束时间',
                        trigger: 'change'
                    }],
                },

                //编辑周报信息
                editForm:{},

                //添加周报对话框的显示与隐藏
                addDialogVisible: false,

                //编辑周报对话框的显示与隐藏
                editDialogVisible: false,

            }
        },

        methods: {

            //分页获取我的周报列表
            getPageMyWeekly(){
                axios.get("getWeeklyByUserID",{
                    params: this.pageInfo
                }).then(response=>(this.myWeeklyList=response.data.list
                    ,this.total=response.data.total))
            },

            addWeekly(){
              axios.post("addWeekly",this.addForm).then(response=>(this.addForm=response.data))

              this.$message.success('添加周报成功')
              this.addDialogVisible = false

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


            //监听 pagesize 改变的事件
            handleSizeChange(newSize){
                this.pageInfo.pageSize = newSize
                this.getPageMyWeekly()
            },

            //监听 页码值 改变的事件
            handleCurrentChange(newPage){
                this.pageInfo.pageNum = newPage
                this.getPageMyWeekly()
            },

        },

        created() {
            this.getPageMyWeekly();
        }


    };

</script>

<style scoped>

</style>
