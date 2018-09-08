<template>
    <div class="container">
        <!-- download! -->
        <!-- 位置栏 -->
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="16" :offset="4" class="nav-container">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/index' }"><span @click="toIndex" class="main-text">首页</span></el-breadcrumb-item>
                  <el-breadcrumb-item><span class="main-text">下载客户端</span></el-breadcrumb-item>
                </el-breadcrumb>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- 内容栏 -->
        <el-row class="main-container">
          <el-col :span="18" :offset="3">
            <ul class="down-ul">
              <li v-for="item of downList" class="down-li">
                <img :src="item.logo" alt="" class="down-img">
                <div class="down-version">{{item.version}}</div>
                <div class="down-os">{{item.OS}}</div>
                <div class="down-update">更新日期:{{item.update}}</div>
                <el-button class="down-btn"><i class="el-icon-download down-text"> 立即下载</i></el-button>
              </li>
            </ul>
          </el-col>
        </el-row>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      downList: [
        {
          OS: "酷狗PC版",
          update: "2018.5.22",
          version: "V8.2.24",
          logo: require("../../assets/imgs/downloadApp/window.png")
        },
        {
          OS: "酷狗Android版",
          update: "2018.7.13",
          version: "V9.0.1",
          logo: require("../../assets/imgs/downloadApp/android.png")
        },
        {
          OS: "酷狗iPhone版",
          update: "2018.7.21",
          version: "V9.0.0",
          logo: require("../../assets/imgs/downloadApp/mac.png")
        }
      ]
    };
  },
  methods: {
    toIndex() {
      this.$emit("sendActive", "1");
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {}
};
</script>
<style scoped>
.container {
  /* height: 600px; */
}
.nav-container {
  height: 40px;
  line-height: 40px;
}
.main-text {
  float: left;
}
.main-container {
  height: 355px;
  background: #f8f8f8;
}
.down-ul {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.down-li {
  width: 320px;
  height: 255px;
  border: 1px solid white;
  background-color: #fff;
  position: relative;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.04);
}
.down-li:hover {
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.25);
}
.down-version {
  position: absolute;
  top: 15px;
  right: 16px;
  color: #c3c3c3;
  font-size: 14px;
}
.down-img {
  position: absolute;
  top: 12%;
  left: 50%;
  margin-left: -32px;
}
.down-os {
  margin-top: 120px;
  color: #333;
  font-size: 18px;
}
.down-update {
  color: #a2a2a2;
  font-size: 14px;
  margin-top: 8px;
}
.down-text {
  color: #fff;
}
.down-btn {
  background: #28a9f3;
  width: 180px;
  height: 36px;
  margin-top: 25px;
}
.down-btn:hover {
  background: #28a9f3;
  box-shadow: 0px 0px 1px 1px #a2a2a2;
}
</style>
<style>
.el-breadcrumb__inner {
  color: #999 !important;
  font-size: 13px !important;
}
.el-breadcrumb {
  line-height: 40px !important;
}
</style>
