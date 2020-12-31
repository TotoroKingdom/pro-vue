<template>
    <el-container class="main_container">
        <el-header>
            <div class="left_box">
                <img src="../assets/img/logo.png">
                <span>项目管理系统</span>
            </div>

            <div class="right_box">
                <el-button type="info" @click="logout()">退出登录</el-button>
            </div>
        </el-header>

        <el-container>
            <!--侧边栏-->
            <el-aside width="200px">
                <el-menu
                        background-color="#409EFF"
                        text-color="white"
                        active-text-color="white"
                        :router="true">
                        <MenuTree :menuList="this.MenuList"></MenuTree>
                </el-menu>
            </el-aside>

            <el-main>
                <!--路由视图-->
                <router-view>

                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

    import MenuTree from "../components/MenuTree";
    export default {
        name: "Main",
        data() {
            return  {
                MenuList: [
                    {
                        "id": 1,
                        "parentId": 0,
                        "menuName": "我的主页",
                        "url": "",
                        "icon": "el-icon-user-solid",
                        "orderNum": 1,
                        "open":1,
                        "disabled": false,
                        "perms": null,
                        "type": 0,
                        "children":[
                            {
                                "id": 11,
                                "parentId": 1,
                                "menuName": "我的项目",
                                "url": "/myPro",
                                "icon": "el-icon-user-solid",
                                "orderNum": 1,
                                "open":0,
                                "disabled": false,
                                "perms": "",
                                "type": 0,
                                "children":[],
                            },
                            {
                                "id": 12,
                                "parentId": 1,
                                "menuName": "我的任务",
                                "url": "/myTask",
                                "icon": "el-icon-user-solid",
                                "orderNum": 2,
                                "open":0,
                                "disabled": false,
                                "perms": null,
                                "type": 0,
                                "children":[]
                            },
                            {
                                "id": 13,
                                "parentId": 1,
                                "menuName": "我的周报",
                                "url": "/myWeekly",
                                "icon": "el-icon-user-solid",
                                "orderNum": 3,
                                "open":0,
                                "disabled": false,
                                "perms": null,
                                "type": 0,
                                "children":[]
                            },
                        ]
                    },
                    {
                        "id": 2,
                        "parentId": 0,
                        "menuName": "项目管理",
                        "url": "",
                        "icon": "el-icon-user-solid",
                        "orderNum": 2,
                        "open":0,
                        "disabled": false,
                        "perms": null,
                        "type": 0,
                        "children":[
                            {
                                "id": 21,
                                "parentId": 2,
                                "menuName": "项目及任务",
                                "url": "/pro",
                                "icon": "el-icon-user-solid",
                                "orderNum": 1,
                                "open":0,
                                "disabled": false,
                                "perms": null,
                                "type": 0,
                                "children":[]
                            },
                            {
                                "id": 22,
                                "parentId": 2,
                                "menuName": "周报管理",
                                "url": "/weekly",
                                "icon": "el-icon-user-solid",
                                "orderNum": 2,
                                "open":0,
                                "disabled": false,
                                "perms": null,
                                "type": 0,
                                "children":[]
                            },
                            {
                                "id": 23,
                                "parentId": 2,
                                "menuName": "里程碑",
                                "url": "/milestone",
                                "icon": "el-icon-user-solid",
                                "orderNum": 3,
                                "open":0,
                                "disabled": false,
                                "perms": null,
                                "type": 0,
                                "children":[]
                            },
                        ]
                    },
                    {
                        "id": 3,
                        "parentId": 0,
                        "menuName": "用户管理",
                        "url": "/user",
                        "icon": "el-icon-user-solid",
                        "orderNum": 3,
                        "open":0,
                        "disabled": false,
                        "perms": null,
                        "type": 0,
                        "children":[]
                    },
                    {
                        "id": 4,
                        "parentId": 0,
                        "menuName": "权限管理",
                        "url": "/auth",
                        "icon": "el-icon-user-solid",
                        "orderNum": 4,
                        "open":0,
                        "disabled": false,
                        "perms": null,
                        "type": 0,
                        "children":[]
                    },
                    {
                        "id": 5,
                        "parentId": 0,
                        "menuName": "文件管理",
                        "url": "/document",
                        "icon": "el-icon-user-solid",
                        "orderNum": 5,
                        "open":0,
                        "disabled": false,
                        "perms": null,
                        "type": 0,
                        "children":[]
                    }
                ]

            }
        },
        components:{
            MenuTree
        },
        methods:{
            logout(){
                window.sessionStorage.clear()
                this.$route.push("/login")
            }
        },
    }

</script>

<style lang="less" scoped>
    /*整个容器的高度*/
    .main_container{
        height: 100%;
    }

    /*头部布局*/
    .el-header{
        background-color: #409EFF;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        color: #FFFFFF;
        align-items: center;
        font-size: 20px;

        /*左边logo和标题*/
        .left_box{
            display: flex;
            align-items: center;

            img{
                width: 60px;
                height: 60px;
                margin: 10px 10px 10px 15px;
            }
        }

        /*标题*/
        span{
            margin-left: 50px;
        }

        /*退出登录按钮*/
        .right_box{
            .el-dropdown>img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: #FFFFFF;
                margin: 15px 50px 10px;
            }
        }
    }

    /*左边栏细节*/
    .el-menu{
        border-right: none;
    }
    /*侧边栏*/
    .el-aside {
        background-color: #409EFF;
        color: #333;
        line-height: 200px;
    }

    /*主体*/
    .el-main {
        background-color: #FFFFFF;
    }

    /*右边下拉菜单*/
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }


</style>

