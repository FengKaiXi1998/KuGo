<template>
    <div>
        <!-- songList! -->
        <div class="main-container">
          <!-- 左侧 -->
          <div>
            <ul class="left-ul">
              <li :style="isActive[0]==true? activeStyle:''" @click="activeBool(0)">推荐</li>
              <li :style="isActive[1]==true? activeStyle:''" @click="activeBool(1)">最新</li>
              <li :style="isActive[2]==true? activeStyle:''" @click="activeBool(2)">热藏</li>
              <li :style="isActive[3]==true? activeStyle:''" @click="activeBool(3)">飙升</li>
            </ul>
          </div>
          <!-- 右侧 -->
          <div class="right-container">
            <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
              <router-view class="animated"></router-view>
            </transition>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeStyle: { background: "#169af3", color: "white" },
      isActive: [true, false, false, false]
    };
  },
  methods: {
    activeBool(i) {
      for (var a = 0; a < this.isActive.length; a++) {
        if (a == i) {
          // this.isActive[a] = true;
          this.$set(this.isActive, a, true);
        } else {
          // this.isActive[a] = false;
          this.$set(this.isActive, a, false);
        }
      }
      if (i == 0) {
        this.$router.push("/index/songlist/tuijian");
      }
      if (i == 1) {
        this.$router.push("/index/songlist/new");
      }
      if (i == 2) {
        this.$router.push("/index/songlist/collection");
      }
      if (i == 3) {
        this.$router.push("/index/songlist/up");
      }
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {}
};
</script>
<style scoped>
.main-container {
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid black; */
  margin-top: 20px;
}
.left-ul {
  width: 210px;
  height: 208px;
  display: flex;
  float: left;
  justify-content: space-between;
  flex-direction: column;
  border-right: 1px solid #9c9c9c;
}
.left-ul li {
  text-align: center;
  width: 210px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  cursor: pointer;
}
.left-ul li:hover {
  background: #169af3;
  color: white;
}
.right-container {
  float: left;
}
</style>