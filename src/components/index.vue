<template>
    <div>
        <!-- index! -->
        <!-- 头部logo栏 -->
        <el-row>
            <el-col :span="18" :offset="3" class="head-container">
                <router-link to="/index"><img src="../assets/imgs/logo.png" alt="" class="logo"></router-link>
                <el-input
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="userSearch" size="small" class="userinput">
                </el-input>
                <ul class="header-ul">
                  <li><router-link to="">客服中心</router-link></li>
                  <li><router-link to="">招纳贤士</router-link></li>
                  <li><router-link to="">会员中心</router-link></li>
                  <li>|</li>
                </ul>
                <el-button type="primary" size="small" @click="toLogin" v-show="!islogin">登录</el-button>
                <el-button size="small" @click="toRegister" v-show="!islogin">注册</el-button>
                <!-- <a href="#" @click="exitLogin" v-show="islogin" class="exitlogin">注销</a> -->
                <!-- <div class="welcome" v-show="islogin">欢迎回来, {{userInputPhone}}</div> -->
                <span class="userName" v-show="islogin" @mouseover="showUserList" @mouseout="unshowUserList">{{userInputPhone}}</span>
                <div class="user-img" v-show="islogin" @mouseover="showUserList" @mouseout="unshowUserList"></div>
                <!-- 用户功能框 -->
                <div class="user-list" :style="userList" @mouseover="showUserList" @mouseout="unshowUserList">
                  <i class="el-icon-arrow-up arrow-up"></i>
                  <div class="userMain" @click="toUserMain"><i class="el-icon-setting"></i>个人账号</div>
                  <div class="dislogin" @click="exitLogin"><i class="el-icon-upload2"></i>退出登录</div>
                </div>
            </el-col>
        </el-row>
        <!-- nav导航栏 -->
        <el-row>
          <el-col :span="24" class="nav-container">
            <el-menu
               :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               background-color="#2C323B"
               text-color="#9bbbbb"
               active-text-color="#FFFFFF">
               <el-menu-item index="1" @click="toMain">首页</el-menu-item>
               <el-menu-item index="2" @click="toBangdan">榜单</el-menu-item>
               <el-menu-item index="3" @click="toDownload">下载</el-menu-item>
               <el-submenu index="4">
                 <template slot="title">更多</template>
                 <el-menu-item index="4-1" @click="toAudio">电台</el-menu-item>
                 <el-menu-item index="4-2" @click="toMV">MV</el-menu-item>
                 <el-menu-item index="4-3" @click="toSongList">歌单</el-menu-item>
                 <el-menu-item index="4-4" @click="toSinger">歌手</el-menu-item>
               </el-submenu>
            </el-menu>
            <ul class="link-container">
              <li><i class="el-icon-star-off"></i> <a href="#"> 音乐直播</a></li>
              <li><i class="el-icon-mobile-phone"></i> <a href="#"> 酷狗LIVE</a></li>
              <li><i class="el-icon-service"></i> <a href="#"> 音乐人</a></li>
              <li><i class="el-icon-goods"></i> <a href="#"> 商城</a></li>
            </ul>
          </el-col>
        </el-row>
        <!-- 路由内容 -->
        <el-row>
          <el-col :span="24" :style="{minHeight:minHeight+'px'}">
            <transition enter-active-class="fadeInLeft" leave-active-class="fadeOutLeft" mode="out-in">
              <router-view class="animated" @sendActive="getActive" @footerShow="getFooter" :up="userInputPhone" :us="userSex"></router-view>
            </transition>
          </el-col>
        </el-row>
        <!-- 尾部 -->
        <div class="footer-view" v-show="footerShow">
          <el-row>
            <el-col :span="24" class="footer-container">
              <ul class="footerul-container">
                <li><a href="#">关于酷狗</a></li>
                <li>|</li>
                <li><a href="#">监督举报</a></li>
                <li>|</li>
                <li><a href="#">广告服务</a></li>
                <li>|</li>
                <li><a href="#">版权指引</a></li>
                <li>|</li>
                <li><a href="#">隐私政策</a></li>
                <li>|</li>
                <li><a href="#">用户服务协议</a></li>
                <li>|</li>
                <li><a href="#">推广合作</a></li>
                <li>|</li>
                <li><a href="#">酷狗音乐人</a></li>
                <li>|</li>
                <li><a href="#">酷狗音乐推</a></li>
                <li>|</li>
                <li><a href="#">招聘信息</a></li>
                <li>|</li>
                <li><a href="#">客服中心</a></li>
                <li>|</li>
                <li><a href="#">用户体验提升计划</a></li>
              </ul>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="footer-text">
              <div>
                <p>我们致力于推动网络正版音乐发展，相关版权合作请联系copyrights@kugou.com</p>
                <p>不良信息举报邮箱：jubao_music@kugou.net    客服邮箱：kefu@kugou.com</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 登录弹窗 -->
        <div class="login-container" v-show="loginShow">
          <div class="login-window">
            <h3>登录酷狗音乐</h3>
            <i class="close el-icon-close" @mousedown="closeLogin"></i>
            <div class="login-phone-input">
              <span>账号:</span><input type="text" class="login-input input-kuang" placeholder="用户名/手机/邮箱" v-model="userInputPhone">
            </div>
            <div class="login-pwd-input">
              <span>密码:</span><input type="text" class="login-input input-kuang" placeholder="请输入密码" v-model="userInputPwd">
            </div>
            <div class="al">
              <input type="checkbox"><span class="auto-login"> 下次自动登录</span>
            </div>
            <router-link to="/register" class="registerRightNow">立即注册</router-link>
            <el-button type="primary" class="login-btn" @click="loginConfirm">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import "../assets/css/base.css";
import "../assets/css/animate.css";
import "../assets/js/jquery";
export default {
  data() {
    return {
      userSearch: "",
      activeIndex: "1",
      minHeight: 0,
      loginShow: false,
      userInputPhone: "",
      userInputPwd: "",
      userSex: "",
      footerShow: true,
      islogin: false,
      userList: {
        height: "0px",
        visibility: "hidden"
      }
    };
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    toMain() {
      this.activeIndex = "1";
      this.$router.push("/index/main");
    },
    toBangdan() {
      this.activeIndex = "2";
      this.$router.push("/index/bangdan");
    },
    toDownload() {
      this.activeIndex = "3";
      this.$router.push("/index/downloadapp");
    },
    toAudio() {
      this.activeIndex = "5";
      this.$router.push("/index/audio");
    },
    toMV() {
      this.activeIndex = "5";
      this.$router.push("/index/MV");
    },
    toSongList() {
      this.activeIndex = "5";
      this.$router.push("/index/songlist");
    },
    toSinger() {
      this.activeIndex = "5";
      this.$router.push("/index/singer");
    },
    getActive(val) {
      this.activeIndex = val;
    },
    toLogin() {
      this.loginShow = true;
      $("body").css("overflow", "hidden");
    },
    closeLogin() {
      this.loginShow = false;
      $("body").css("overflow", "auto");
      this.userInputPhone = "";
      this.userInputPwd = "";
    },
    loginConfirm() {
      if (
        this.userInputPhone == "" ||
        parseInt(this.userInputPhone.length) != 11 ||
        typeof parseInt(this.userInputPhone) != "number"
      ) {
        this.$message.error("手机号码格式错误!");
      } else if (this.userInputPwd == "") {
        this.$message.error("用户密码不能为空!");
      } else {
        this.$http
          .get(
            "http://127.0.0.1/KugouSrc/login.php?uphone=" +
              this.userInputPhone +
              "&upwd=" +
              this.userInputPwd
          )
          .then(data => {
            // console.log(data);
            if (data.data.code == 0) {
              this.islogin = false;
              this.$message({
                message: "用户名或密码错误!",
                type: "warning"
              });
            } else if (data.data.code == 1) {
              this.islogin = true;
              this.$message({
                message: "登录成功!",
                type: "success"
              });
              this.loginShow = false;
              this.$http
                .get(
                  "http://127.0.0.1/KugouSrc/getInfo.php?uphone=" +
                    this.userInputPhone
                )
                .then(data => {
                  this.userSex = data.data[0].sex;
                })
                .catch(() => {
                  alert("网络配置错误!");
                });
              $("body").css("overflow", "auto");
            }
          })
          .catch(() => {
            alert("网络配置错误!");
          });
      }
    },
    exitLogin() {
      this.islogin = false;
      this.userInputPhone = "";
      this.userInputPwd = "";
      this.unshowUserList();
      this.$message("已退出登录状态!");
      this.$router.push("/index");
    },
    showUserList() {
      this.userList.height = "69px";
      this.userList.visibility = "visible";
    },
    unshowUserList() {
      this.userList.height = "0px";
      this.userList.visibility = "hidden";
    },
    toUserMain() {
      this.$router.push("/index/userMain");
      this.activeIndex = "5";
    },
    getFooter(val) {
      this.activeIndex = "6";
    }
  },
  components: {},
  computed: {},
  watch: {
    activeIndex() {
      if (this.activeIndex == "6") {
        this.footerShow = false;
      } else {
        this.footerShow = true;
      }
    }
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 314;
    window.onresize = () => {
      this.minHeight = document.documentElement.clientHeight - 314;
    };
  }
};
</script>

<style scoped>
* {
  text-decoration: none;
  color: black;
  box-sizing: border-box;
}
.head-container {
  height: 78px;
  line-height: 78px;
  position: relative;
}
.logo {
  vertical-align: middle;
}
.head-container .el-input {
  margin-left: 30px;
}
.userinput {
  position: absolute;
}
.header-ul {
  width: 262px;
  height: 19.2px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  right: 250px;
  top: 0px;
  list-style-type: none;
  /* border: 1px solid #e6e6e6; */
}
.header-ul li {
  color: #e6e6e6;
}
.header-ul li .router-link-active {
  font-size: 13px;
  color: #777777;
}
.header-ul li .router-link-active:hover {
  color: #009af3;
}
.head-container .el-button--primary {
  position: absolute;
  right: 150px;
  top: 50%;
  margin-top: -14px;
}
.head-container .el-button--default {
  position: absolute;
  right: 85px;
  top: 50%;
  margin-top: -14px;
}
.head-container .el-button--primary span {
  color: white;
}
.head-container .el-input {
  width: 265px;
  height: 34px;
}
.nav-container {
  position: relative;
  background: #2c323b;
}
.el-menu-demo,
.el-menu-item,
.el-menu--horizontal > .el-menu-item {
  height: 55px;
  line-height: 55px;
}
.el-menu-demo {
  width: 437px;
  margin-left: 12%;
}
.link-container {
  width: 369px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 18%;
  top: 50%;
  margin-top: -10px;
}
.link-container li i,
.link-container li a {
  font-size: 13px;
  color: #9bbbbb;
}
.link-container li a:hover {
  color: #009af3;
}
.el-menu--horizontal {
  border-bottom: 0px;
}
.el-menu--horizontal > .el-menu-item {
  width: 92px;
  text-align: center;
  font-size: 16px;
}
.footer-container {
  background: #2c323b;
  height: 48px;
  line-height: 48px;
}
.footerul-container {
  display: flex;
  justify-content: space-around;
  width: 1000px;
  margin: 0 auto;
}
.footerul-container li,
.footerul-container li a {
  color: #b1b3b9;
  font-size: 12px;
}
.footerul-container li a:hover {
  color: #009af3;
}
.footer-text {
  border-top: 1px solid #3d424a;
  background: #2c323b;
  text-align: center;
  height: 100%;
}
.footer-text div {
  margin-top: 50px;
  margin-bottom: 50px;
}
.footer-text div p {
  font-size: 12px;
  color: #b1b3b9;
}
.login-container {
  position: absolute;
  bottom: 0px;
  top: 0px;
  right: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}
.login-window {
  width: 440px;
  height: 378px;
  background: white;
  border: 1px solid black;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -220px;
  margin-top: -189px;
  z-index: 1001;
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.login-window h3 {
  font-size: 22px;
  color: #333;
  position: absolute;
  top: 30px;
  left: 30px;
}
.input-kuang {
  outline: none;
}
.login-phone-input {
  width: 368px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f6f6f6;
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -189px;
}
.login-pwd-input {
  height: 38px;
  width: 368px;
  border-radius: 5px;
  line-height: 38px;
  border: 1px solid #ccc;
  background: #f6f6f6;
  position: absolute;
  top: 145px;
  left: 50%;
  margin-left: -189px;
}
.login-phone-input span,
.login-pwd-input span {
  font-size: 12px;
  margin-right: 8px;
  margin-left: 10px;
}
.login-input {
  height: 34px;
  line-height: 34px;
  background: #f6f6f6;
  border: 0px;
  width: 320px;
  margin-top: -3px;
  padding: 2px;
  box-sizing: border-box;
}
.al {
  position: absolute;
  top: 190px;
  left: 30px;
}
.auto-login {
  font-size: 12px;
}
.registerRightNow {
  position: absolute;
  top: 195px;
  left: 350px;
  font-size: 12px;
}
.registerRightNow:hover {
  color: #009af3;
}
.login-btn {
  width: 368px;
  position: absolute;
  bottom: 80px;
  left: 50%;
  margin-left: -189px;
}
.user-img {
  float: right;
  background: url("../assets/imgs/index/userImg.jpg");
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-top: 25px;
  cursor: pointer;
}
.userName {
  float: right;
  margin-left: 10px;
  color: #777777;
  font-size: 14px;
  margin-right: 100px;
  cursor: pointer;
}
.user-list {
  width: 127px;
  height: 69px;
  border: 1.5px solid #dcdcdc;
  z-index: 1003;
  background: white;
  position: absolute;
  right: 90px;
  top: 65px;
  transition: all 0.2s linear;
}
.arrow-up {
  color: #dcdcdc;
  font-size: 23px;
  position: absolute;
  top: -15px;
  left: 25px;
  background: white;
}
.userMain {
  width: 117px;
  height: 28px;
  line-height: 28px;
  position: absolute;
  top: 8px;
  left: 5px;
  color: #777777;
  font-size: 14px;
  cursor: pointer;
}
.dislogin {
  width: 117px;
  height: 28px;
  line-height: 28px;
  position: absolute;
  top: 35px;
  left: 5px;
  color: #777777;
  font-size: 14px;
  cursor: pointer;
}
.dislogin:hover,
.userMain:hover {
  background: #f4f4f4;
}
.userMain i,
.dislogin i {
  color: #777777;
  padding-left: 5px;
  padding-right: 8px;
}
</style>
<style>
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 55px !important;
  line-height: 55px !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  background: #0c8ed9 !important;
  border-bottom-color: #0c8ed9 !important;
}
</style>
