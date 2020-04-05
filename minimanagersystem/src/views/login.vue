<template>
    <div class="login_body">
        <transition name="showlogin">
        <div v-if="isshowlogin" class="middlelogin_body">
            <div class="middlelogin_body_left">
                <div class="login_title_positon">
                   <p class="login_title">欢迎使用</p> 
                     <p class="login_title">IceseaMini小程序后台管理平台</p>
                    </div>
            </div>
            <div v-if="!isshowreg" class="middlelogin_body_right login_item">
                <form>
                <label class="login_username_lable" for="login_username">Username:</label>
                <div class="login_username">
                    <i class="el-icon-s-custom"></i>
                    <input class="login_username_input" id="login_username" v-model="managerCount" type="text" placeholder="请输入您的用户名">
                </div>
                <label class="login_username_lable" for="login_TeacherID">TeacherID:</label>
                <div class="login_username">
                    <i class="el-icon-suitcase-1"></i>
                    <input class="login_username_input" id="login_TeacherID" v-model="TeacherID" type="text" placeholder="请输入您的教师工号">
                </div>
                <label class="login_username_lable" for="login_password">Userpassword:</label>
                <div class="login_username">
                    <i class="el-icon-s-cooperation"></i>
                    <input class="login_username_input" id="login_password" v-model="managerpassword" type="password" autocomplete="off" placeholder="请输入您的密码">
                </div>
                <div class="login_isremember">
                    <el-radio v-model="radio" label="1">记住密码</el-radio>
                </div>
                </form>
                    <button class="login_button" @click="handleLogin()"><i class="el-icon-switch-button button_icon"></i></button>
                <span class="closelogin" @click="handleCloselogin()"><i class="el-icon-error"></i></span>
            
            </div>
            <div v-if="isshowreg" class="middlelogin_body_right reg_item"></div>
        </div>
        </transition>
        <transition name="deleteloginimg">
        <span v-if="ishowimg" @click="handleShowLogin()" class="user_img">
            <img :src="userimg">  
        </span>
        </transition>
    </div>
</template>

<script>
import userimg from '../assets/user.png'
import axios from 'axios'
export default {
    data(){
        return{
            userimg:userimg,
            ishowimg:true,
            isshowlogin:false,
            isshowreg:false,
            radio: '0',
            TeacherID:'',
            managerCount:'',
            managerpassword:''
        }
    },
    methods: {
        handleShowLogin(){
            this.ishowimg = !this.ishowimg
            setTimeout(()=>{
                this.isshowlogin = !this.isshowlogin
            },600)
        },
        handleCloselogin(){
            this.isshowlogin = !this.isshowlogin
            setTimeout(()=>{
                this.ishowimg = !this.ishowimg
            },600)
        },
        handleLogin(){
            let that = this
            axios({
                    url: 'http://localhost:3000/ManagerCount/api/checkLogin',
                    method: 'POST',
                    data: {
                        "TeacherID": this.TeacherID,
                        "managerCount": this.managerCount,
                        "managerpassword": this.managerpassword
                    }
                })
                .then(res => {
                    if (res.data.error == 0) {
                        alert(res.data.msg)
                        this.$store.commit('nowLoginUserCount',(that.managerCount)); 
                        this.$router.push('/Managerindex')
                    }
                    else{
                        alert(res.data.msg)
                    }
                })
                .catch(err => {
                    console.log(err)
                })  
        },
    },
}
</script>

<style scoped>
.login_body{
    background:url(https://w.wallhaven.cc/full/ym/wallhaven-ym5d1x.jpg)no-repeat; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
    padding: 10% 20%;
    box-sizing: border-box;
    position: relative;
}
.middlelogin_body{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    display: flex;
    min-width: 1000px;
    min-height: 560px;
    border-radius: 10px;
    overflow: hidden;
}
.middlelogin_body_left,
.middlelogin_body_right{
    width: 50%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
.middlelogin_body_left{
    background:rgba(31, 35, 34,0.7);
    position: relative;
}
.login_title_positon{
    width: 400px;
    height: 400px;
    position:absolute;
    padding: 100px 0;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
}
.middlelogin_body_right{
    background:rgba(31, 35, 34,0.7);
    padding: 100px 60px;
    box-sizing: border-box;
    position:relative;
}
.closelogin{
    top: 10px;
    right: 10px;
    position: absolute;
    height: 40px;
    width: 40px;
    text-align: center;
    cursor: pointer;
}
.closelogin i{
    font-size: 40px;
    color: #f7f1e3;
    opacity: 0.9;
}
.closelogin i:hover{
    color: #fff;
    transition: 0.5s;
    transform: scale(1.1);
}
.user_img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: inline-block;
    width: 200px;
    height: 200px;
    opacity: 0.5;
    cursor: pointer;
}
.user_img:hover{
    opacity: 0.8;
    transition: 1s;
}
.user_img>img{
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px #212121;
    border-radius: 100%;
}
.deleteloginimg-enter-active, .deleteloginimg-leave-active {
  transition: opacity 0.2s;
}
.deleteloginimg-enter, .deleteloginimg-leave-to {
  opacity: 0;
}
.showlogin-enter-active, .showlogin-leave-active {
  transition: opacity 1s;
}
.showlogin-enter, .showlogin-leave-to {
  opacity: 0;
}
.login_title{
    font-family:Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    font-size: 20px;
    color: rgba(247, 241, 227,1.0);
    font-weight: 600;
    text-shadow: 0 0 20px #000;
    opacity: 0.9;
}
.login_title:nth-of-type(1)
{
    font-size: 40px;
    margin-bottom: 20px;
}
.login_title:nth-of-type(2){
    font-weight: 600;
}
.login_username,
.login_password{
    box-sizing: border-box;
    height: 40px;
}
.login_username,
.login_password i{
    font-size: 20px;
    color: #f7f1e3;
    opacity: 0.9;
    text-shadow: 0 0 20px #000;
}
.login_username_input,
.login_password_input{
    min-width: 250px;
    border-radius: 10px;
    background: rgba(72, 84, 96,0.9);
    color: #f7f1e3;
    outline: none;
    border: none;
    padding-left: 10px;
    height: 100%;
    margin-left: 20px;
    opacity: 0.9;
}

input::-webkit-input-placeholder{
  color:#f7f1e3;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
  color:#f7f1e3;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
  color:#f7f1e3;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
  color:#f7f1e3;
}
.login_username_input:focus,
.login_password_input:focus{
    opacity: 1;
}
.login_username_lable,
.login_password_lable{
    color: #f7f1e3;
    text-shadow: 0 0 20px #000;
    line-height: 30px;
    font-weight: 600;
    height: 30px;
    display: block;
    font-size: 16px;
    opacity: 0.9;
}
.login_password_lable{
    margin-top: 20px;
}
.login_isremember{
    margin-top: 30px;
    color:#f7f1e3;
    font-size:14px;
    font-weight: 600;
    font-family:Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    text-shadow: 0 0 20px #000;
    opacity: 0.9;
}
.login_button{
    margin-top: 60px;
}
.login_button_body{
    min-width:200px ;
}
.login_button{
    width: 60px;
    height: 60px;
    outline: none;
    border: none;
    border-radius: 100%;
    background:rgba(31, 35, 34,0.5);
    cursor: pointer;
    box-sizing: border-box;
}
.button_icon{
    font-size: 50px;
    color: #f7f1e3;
    text-shadow: 0 0 20px #000;
    opacity: 0.9;
}
.button_icon:hover{
    color: #fff;
    opacity: 1;
    transform: scale(1.1);
    transition: 1s;
}
.button_icon:active{
    color: #fff;
    transform: scale(1.1);
    transition: 1s;
}
</style>
