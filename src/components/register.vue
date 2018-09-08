<template>
    <div class="all-container">
        <!-- register -->
        <!-- 头部 -->
        <el-row>
            <el-col :span="24">
                <!-- part1 -->
                <el-row>
                    <el-col :span="16" :offset="4" class="hp1-container">
                        <img src="../assets/imgs/register/header_bg.jpg" alt="" class="lf">
                        <el-tooltip content="您的购物车为空哦!" placement="bottom" effect="light">
                            <div class="cart rf p1-img"></div>
                        </el-tooltip>
                        <div class="rf p1-text">|</div>
                        <div class="rf p1-text">登录</div>
                        <div class="rf p1-text" @click="toRegister">注册</div>
                    </el-col>
                </el-row>
                <!-- part2 -->
                <el-row class="p2-main-container">
                    <el-col :span="16" :offset="4" class="p2-container">
                        <img src="../assets/imgs/register/herder_logo.jpg" alt="" class="p2-img" @click="toIndex">
                        <div class="rf p2-text">客服中心</div>
                        <div class="rf p2-text">VIP中心</div>
                        <div class="rf p2-text">产品中心</div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!-- 表单内容 -->
        <div class="form-container" :style="{minHeight:minHeight+'px'}">
            <!-- 标题栏 -->
            <div>
                <div class="phone-logo"></div>
            </div>
            <!-- 表单栏 -->
            <div class="input-container">
              <el-input v-model="userPhone" :placeholder="alertlist[0]" @blur="phoneCheck" ref="userPhoneInput"></el-input><i class="el-icon-warning phone-warn" v-show="errList[0]"></i>
              <el-input :placeholder="alertlist[1]" class="msg-confirm" v-model="inputRandom" @blur="randomCheck"></el-input><el-button class="confirm-btn" @click="getNum">获取</el-button>
              <i class="el-icon-warning random-warn" v-show="errList[1]"></i>
              <el-input :placeholder="alertlist[2]" v-model="upwd"></el-input>
              <el-input :placeholder="alertlist[3]" v-model="confirmUpwd" @blur="upwdConfirm"></el-input>
              <i class="el-icon-warning upwd-warn" v-show="errList[3]"></i>
              <div class="sex-choose">
                <span class="sex-text">性别:</span><el-radio v-model="sex" label="male">男</el-radio>
                <el-radio v-model="sex" label="female">女</el-radio><br>
              </div>
              <el-checkbox v-model="agree" class="agree-check">我已认真阅读并同意酷狗用户协议</el-checkbox><br>
              <el-button type="primary" class="rergister-btn" @click="goRegister">注册</el-button>
            </div>
        </div>
        <!-- 尾部 -->
        <div class="footer-view">
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
    </div>
</template>
<script>
export default {
  data() {
    return {
      minHeight: 0,
      userPhone: "",
      upwd: "",
      confirmUpwd: "",
      sex: "",
      agree: "",
      alertlist: ["手机号码", "短信验证", "密码", "确认密码"],
      errList: [false, false, false, false],
      randomNum: "",
      inputRandom: "",
      checkAllTag: true
    };
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    toIndex() {
      this.$router.push("/index");
    },
    getNum() {
      this.randomNum = parseInt(Math.random() * 90000 + 10000);
      // console.log(this.randomNum);
      this.$message("验证码为 : " + this.randomNum);
    },
    phoneCheck() {
      if (
        parseInt(this.userPhone.length) != 11 ||
        typeof parseInt(this.userPhone) != "number"
      ) {
        this.$message.error("手机号码格式错误");
        this.$set(this.errList, 0, true);
      } else {
        this.$set(this.errList, 0, false);
      }
    },
    upwdConfirm() {
      if (this.confirmUpwd != this.upwd) {
        this.$message.error("密码不一致");
        this.$set(this.errList, 3, true);
      } else {
        this.$set(this.errList, 3, false);
      }
    },
    randomCheck() {
      if (parseInt(this.inputRandom) != parseInt(this.randomNum)) {
        this.$message.error("验证码错误!");
        this.$set(this.errList, 1, true);
      } else {
        this.$set(this.errList, 1, false);
      }
    },
    goRegister() {
      this.checkAllTag = true;
      for (var p of this.errList) {
        if (p == true) {
          this.checkAllTag = false;
        }
      }
      if (this.sex == "" || this.agree == false) {
        this.checkAllTag = false;
      }
      if (this.checkAllTag == false) {
        this.$message({
          message: "用户信息有误,请检查!",
          type: "warning"
        });
      } else {
        console.log(this.userPhone);
        this.$http
          .get(
            "http://127.0.0.1/KugouSrc/register.php?uphone=" +
              parseInt(this.userPhone) +
              "&upwd=" +
              this.upwd +
              "&sex=" +
              this.sex
          )
          .then(data => {
            console.log(data);
            this.$router.push("/index");
            this.$message({
              message: "注册成功",
              type: "success"
            });
          })
          .catch(() => {
            alert("网络配置错误!");
          });
      }
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 281;
    window.onresize = () => {
      this.minHeight = document.documentElement.clientHeight - 281;
    };
  }
};
</script>
<style scoped>
.lf {
  float: left;
}
.rf {
  float: right;
}
.all-container {
  display: flex;
  flex-direction: column;
}
.hp1-container {
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
}
.p1-img {
  cursor: pointer;
}
.p1-text {
  color: #0c85cc;
  font-size: 14px;
  padding-right: 10px;
  cursor: pointer;
}
.cart {
  width: 16px;
  height: 16px;
  margin-top: 12px;
  background: url("../assets/imgs/register/header_bg.png") no-repeat;
  background-position: 0px -310px;
}
.p2-main-container {
  background: #008ad4;
}
.p2-container {
  height: 60px;
  line-height: 60px;
}
.p2-img {
  cursor: pointer;
}
.p2-text {
  margin-left: 20px;
  color: white;
  cursor: pointer;
}
.form-container {
  width: 958px;
  height: 550px;
  margin: 0 auto;
  border: 1px solid #54ade7;
  border-top: 7px solid #54ade7;
  box-shadow: 0px 1px 1px 3px #e8e8e8;
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
}
.phone-logo {
  background: url("../assets/imgs/register/kg_lgn_splice.png") no-repeat;
  background-position: -350px -50px;
  display: inline-block;
  width: 128px;
  height: 27px;
  margin-top: 30px;
}
.input-container {
  margin-top: 80px;
  font-size: 14px;
  color: #474747;
}
.input-container input {
  width: 291px;
  background: #f3f3f3;
}
.sex-text {
  color: #c0c4cc;
  padding-right: 20px;
}
.msg-confirm {
  width: 120px !important;
}
.input-container .el-input {
  margin-bottom: 15px;
}
.confirm-btn {
  margin-top: -15px;
  margin-left: 90px;
  position: relative;
  text-align: center;
}
.sex-choose {
  margin-left: -130px;
}
.agree-check {
  margin-top: 20px;
}
.rergister-btn {
  margin-top: 20px;
  width: 100px;
}
.phone-warn {
  position: absolute;
  top: 149px;
  left: 606px;
  color: red;
}
.upwd-warn {
  position: absolute;
  left: 606px;
  top: 307px;
  color: red;
}
.random-warn {
  position: absolute;
  left: 505px;
  top: 202px;
  color: red;
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
</style>
<style>
.input-container .el-input__inner {
  width: 301px;
  height: 38px;
  display: inline-block;
}
.msg-confirm .el-input__inner {
  width: 200px !important;
}
.confirm-btn {
  width: 90px !important;
}
.confirm-btn span {
  font-size: 12px !important;
}
</style>

