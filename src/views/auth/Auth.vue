<template>
    <div class="Auth">
        <h3>权限列表</h3>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>权限列表</el-breadcrumb-item>
        </el-breadcrumb>
        <br>

        <!--卡片视图-->
        <el-card>
            123
        </el-card>

        <!--<el-table
                :data="userList"
                border
                style="width: 100%;height: 430px">
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
                <el-button type="warning" icon="el-icon-edit" size="mini">修改</el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            </el-table-column>
        </el-table>-->

        <!--分页区域-->
        <!--<el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageInfo.pageNum"
                :page-sizes="[1,2,5,10]"
                :page-size="pageInfo.pageSize"
                layout="total,sizes,prev, pager, next,jumper"
                :total="total">
        </el-pagination>-->

    </div>
</template>

<script>

    import axios from 'axios'
    import { get } from '../../utils/request'


    export default {
        name: "Auth",
        data(){
          return{
              //权限列表
              permissionList:[],
              userList:[],
              pageInfo:{
                  pageNum: 1,
                  pageSize: 8
              },
              total:10
          }
        },
        methods:{

            getPermissionList(){
                axios.post("getPermissionList"
                ).then(response=>(this.permissionList=response.data))
            },




            //分页获取用户列表
            getPageUser(){
                axios.get("getPageUser",{
                    params: this.pageInfo
                }).then(response=>(this.userList=response.data.list
                    ,this.total=response.data.total))

            },

            //监听 pagesize 改变的事件  每一页显示的数量
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
        created(){
            //this.getUserList();
            this.getPageUser();
            this.getPermissionList();
        }
    }
</script>

<style scoped>

</style>
