<template>
    <div>
        <!-- bangdan! -->
        <div class="bangdan-container">
          <el-row>
            <!-- 左侧导航栏 -->
            <el-col :span="5">
              <el-menu
                default-active="1-1"
                class="el-menu-vertical-demo elmenu-container">
                <el-submenu index="1">
                  <template slot="title">
                    <span>热门榜单</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">酷狗内榜</template>
                    <el-menu-item index="1-1" @click="toPaiHang('酷狗飙升榜')"><img src="../../assets/imgs/bangdan/bdsmall1.png" alt=""> 酷狗飙升榜</el-menu-item>
                    <el-menu-item index="1-2" @click="toPaiHang('酷狗TOP500')"><img src="../../assets/imgs/bangdan/bdsmall2.png" alt=""> 酷狗TOP500</el-menu-item>
                    <el-menu-item index="1-3" @click="toPaiHang('网络红歌榜')"><img src="../../assets/imgs/bangdan/bdsmall3.png" alt=""> 网络红歌榜</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <span>特色音乐榜</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">全网榜单</template>
                    <el-menu-item index="2-1" @click="toPaiHang('电音热歌榜')"><img src="../../assets/imgs/bangdan/bdsmall4.png" alt=""> 电音热歌榜</el-menu-item>
                    <el-menu-item index="2-2" @click="toPaiHang('影视金曲榜')"><img src="../../assets/imgs/bangdan/bdsmall5.png" alt=""> 影视金曲榜</el-menu-item>
                    <el-menu-item index="2-3" @click="toPaiHang('ACG热歌榜')"><img src="../../assets/imgs/bangdan/bdsmall6.png" alt=""> ACG热歌榜</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <span>全球榜</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">全球榜单</template>
                    <el-menu-item index="3-1" @click="toPaiHang('美国BillBoard榜')"><img src="../../assets/imgs/bangdan/bdsmall7.png" alt=""> 美国BillBoard榜</el-menu-item>
                    <el-menu-item index="3-2" @click="toPaiHang('英国单曲榜')"><img src="../../assets/imgs/bangdan/bdsmall8.png" alt=""> 英国单曲榜</el-menu-item>
                    <el-menu-item index="3-3" @click="toPaiHang('日本工信榜')"><img src="../../assets/imgs/bangdan/bdsmall9.png" alt=""> 日本工信榜</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
            <!-- 右侧内容栏 -->
            <el-col :span="18" :offset="1">
              <router-view :title="name"></router-view>
            </el-col>
          </el-row>
          
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    toPaiHang(val) {
      this.name = val;
      this.$router.push("/index/bangdan/paihang");
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {}
};
</script>
<style scoped>
.bangdan-container {
  width: 1000px;
  height: 1457px;
  margin: 0 auto;
  margin-top: 40px;
  /* border: 1px solid black; */
}
.elmenu-container {
  border: 1px solid #eeeeee;
  border-bottom: 0px;
}
</style>