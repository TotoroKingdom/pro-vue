<template>
    <!--登录表单容器-->
    <div class="login_container">
        <!--登录区域-->
        <div class="login_box">
            <!--头像-->
            <div class="avatar_box">
                <img src="../assets/img/avatar.jpg">
            </div>
            <!--表单-->
            <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="0px" class="login_form">

                <el-form-item label="" prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>

                <el-form-item label="" prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>

                <el-form-item class="login_btn">
                    <el-button type="primary" @click="submitForm">登录</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                loginRules: {
                    username: [
                        { required: true, message: '请输入账户', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm() {
                let _this=this

                this.$refs.loginFormRef.validate(valid=>{
                    if(valid) {
                        axios.post('/login',{
                            username: this.loginForm.username,
                            password: this.loginForm.password
                        }).then(response =>{
                           if(response.status === 200){
                               alert('登陆成功');
                               _this.$store.commit('login', _this.loginForm)
                               let path = this.$route.query.redirect
                               this.$router.replace({path: path === '/' || path === undefined ? '/main' : path})

                           }
                        }).catch(failResponse=>{

                        })
                    } else{
                        this.$message.error('请输入所有字段！');
                        return false;
                    }
                })
            },
            resetForm() {
                this.$refs.loginFormRef.resetFields();
            }
        }

    }
</script>

<style scoped>
    .login_container{
        height: 100%;
        background-color: #2c3e50;
    }

    .login_box{
        width: 450px;
        height: 380px;
        background-color: #FFFFFF;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    .avatar_box{
        width: 130px;
        height: 130px;
        border: 1px solid #EEEEEE;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        margin: -65px auto;
        background-color: #FFFFFF;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #42b983;
    }

    .login_form{
        position: absolute;
        bottom: 50px;
        width: 100%;
        padding: 1px 20px;
        box-sizing: border-box;
    }

    .login_btn{
        display: flex;
        justify-content: center;
    }

</style>
