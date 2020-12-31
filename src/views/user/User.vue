<template>
<div class="User">
    <!--头部区域-->
    <div class="content-header">
        <el-button type="primary"
                   size="medium"
                   @click="addDialogVisible=true">添加用户</el-button>
    </div>
    <!--列表区域-->
    <div>
        <!--用户列表-->
        <el-table
                :data="userList"
                border
                style="width: 100%;height: 580px">
            <el-table-column
                    prop="userID"
                    label="ID"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="empName"
                    label="姓名"
                    width="110">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="账号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="department"
                    label="部门"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="post"
                    label="职务"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="warning"
                               icon="el-icon-edit"
                               @click="showEditDialog(scope.row.userID)"
                               size="mini">修改</el-button>
                    <el-button type="danger"
                               icon="el-icon-delete"
                               @click="removeUserByID(scope.row.userID)"
                               size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--添加用户-->
        <el-dialog
                title="添加用户"
                :visible.sync="addDialogVisible"
                width="50%">
            <!--内容主体区域-->
            <el-form :model="addForm"
                     ref="addFormRef"
                     label-width="70px">
                <el-form-item label="ID" prop="userID">
                    <el-input v-model="addForm.userID"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="empName">
                    <el-input v-model="addForm.empName"></el-input>
                </el-form-item>
                <el-form-item label="账户" prop="username">
                    <el-input v-model="addForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addForm.password"></el-input>
                </el-form-item>
                <el-form-item label="部门" prop="department">
                    <el-input v-model="addForm.department"></el-input>
                </el-form-item>
                <el-form-item label="职务" prop="post">
                    <el-input v-model="addForm.post"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser">确 定</el-button>
  </span>
        </el-dialog>

        <!--修改用户-->
        <el-dialog
                title="修改用户"
                :visible.sync="editDialogVisible"
                width="50%">
            <!--内容主体区域-->
            <el-form :model="editForm"
                     ref="editFormRef"
                     label-width="70px">
                <el-form-item label="ID" prop="userID">
                    <el-input v-model="editForm.userID"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="empName">
                    <el-input v-model="editForm.empName"></el-input>
                </el-form-item>
                <el-form-item label="账户" prop="username">
                    <el-input v-model="editForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="editForm.password"></el-input>
                </el-form-item>
                <el-form-item label="部门" prop="department">
                    <el-input v-model="editForm.department"></el-input>
                </el-form-item>
                <el-form-item label="职务" prop="post">
                    <el-input v-model="editForm.post"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="updateUser">确 定</el-button>
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

    import {get, post} from '../../utils/request'
    import axios from 'axios'

    export default {
        name: "User",
        data(){
            return{

                //用户列表数据
                userList:[],

                //分页信息
                pageInfo:{
                    pageNum: 1,//当前页
                    pageSize: 10//每页展示的用户数
                },

                //总用户数
                total: 0,

                //添加用户数据
                addForm:{
                    userID:"",
                    empName:"",
                    username:"",
                    password:"",
                    department:"",
                    post:""

                },

                //编辑用户数据
                editForm:{},

                //添加用户对话框的显示与隐藏
                addDialogVisible: false,

                //编辑用户对话框的显示与隐藏
                editDialogVisible: false,
            }
        },
        methods: {

            //分页获取用户列表
            getPageUser(){
                axios.get("getPageUser",{
                    params: this.pageInfo
                }).then(response=>(this.userList=response.data.list
                    ,this.total=response.data.total))

            },


            //添加用户
            addUser(){
                post("addUser",this.addForm).then(response=>(this.addForm=response.data))
                this.$message.success('添加用户成功')
                this.addDialogVisible = false
            },

            //展示编辑用户对话框
            showEditDialog(userID){
                console.log(userID)
                get('getUserByID?userID=' + userID)
                    .then(response=>(this.editForm=response.data))
                this.editDialogVisible = true
            },

            //修改用户
            updateUser(){
                post("updateUser",this.editForm).then(response=>(this.editForm=response.data))
                this.editDialogVisible = false
                this.$message.success('修改用户成功')
            },

            //删除用户
            removeUserByID(userID){
                const confirmResult =  this.$confirm('此操作将永久删除该用户, 是否继续?', '提示'
                    , {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    get("deleteUser?userID=" + userID).
                    then(response=>(this.remove=response.data))
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
                this.getPageUser()
            },

            //监听 页码值 改变的事件
            handleCurrentChange(newPage){
                this.pageInfo.pageNum = newPage
                this.getPageUser()
            },


        },
        created() {
            this.getPageUser();
        }


    }

</script>

<style scoped>

</style>
