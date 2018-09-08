<template>
    <div>
      <div>
        <table class="main-container">
          <tr v-for="(item,i) of HanGuo" class="container" @mouseover="item.show=true" @mouseout="item.show=false">
            <td class="list-container">
              <span class="title">{{item.title}}</span>
              <span class="long">{{item.long}}</span>
              <span class="down" v-show="item.show"></span>
              <span class="play" v-show="item.show"></span>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      HanGuo: [
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        },
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        },
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        },
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        },
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        },
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        },
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        },
        {
          title: "이 노래만 (就这首歌)【一起吃饭吧3 OS",
          long: "04:12",
          show: false
        }
      ]
    };
  },
  methods: {},
  components: {},
  computed: {},
  watch: {},
  mounted() {}
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.main-container {
  width: 100%;
}
.container {
  height: 35px;
}
.container:hover {
  background-color: #f5f8fb;
  color: #009af3;
}
.list-container {
  border-radius: 5px;
}
.title {
  width: 550px;
  font-size: 13px;
  margin-left: 5px;
}
.long {
  font-size: 13px;
  float: right;
  margin-right: 2px;
}
.play {
  width: 12px;
  height: 14px;
  background: url("../../assets/imgs/icon_splice.png");
  background-position: 0 -30px;
  float: right;
  margin-right: 10px;
  cursor: ;
}
.down {
  width: 15px;
  height: 15px;
  background: url("../../assets/imgs/icon_splice.png");
  background-position: -90px -30px;
  float: right;
  margin-right: 30px;
}
</style>