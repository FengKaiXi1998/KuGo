<template>
    <div class="bg">
        <!-- userMain! -->
        <div class="main-container">
          <!-- 个人信息栏 -->
          <div class="userMsg">
            <img :src="userImgSrc" alt="" class="userImg">
            <div class="msg-container">
              <div class="user-phone">{{userPhone}}
                <i class="sex-img-male" v-show="userSex=='male'"></i>
                <i class="sex-img-female" v-show="userSex=='female'"></i>
              </div>
              <!-- 关注粉丝 -->
              <ul class="focus-ul">
                <li>
                  <div class="focus-num">0</div>
                  <div class="focus-text">动态</div>
                </li>
                <li>
                  <div class="focus-num">6</div>
                  <div class="focus-text">关注</div>
                </li>
                <li>
                  <div class="focus-num">1</div>
                  <div class="focus-text">粉丝</div>
                </li>
              </ul>
              <!-- 地区 -->
              <div class="user-location">所在地区: {{userLoc}}</div>
              <!-- 社交 -->
              <div class="chat">社交网络: <i class="weibo"></i><i class="dou"></i></div>
            </div>
          </div>
          <!-- 歌曲播放统计栏 -->
          <div class="count">
            <div class="count-title">听歌排行</div>
              <table class="sl-table">
                <tr v-for="(item,i) of songList" class="sl-tr">
                  <td class="list-id">{{i+1}}.</td>
                  <td class="list-text"><i class="plogo"></i>{{item.name}} <span class="list-author">{{item.author}}</span></td>
                  <td class="pcount">{{item.time}}次</td>
                </tr>
              </table>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      userPhone: "",
      userImgSrc: require("../../assets/imgs/userMain/user-demo.jpg"),
      userSex: "",
      userLoc: "广州省-广州市",
      songList: [
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 },
        { name: "追光者(Cover 陈碧海)", author: "陈碧海", time: 1 }
      ]
    };
  },
  props: ["up", "us"],
  methods: {},
  components: {},
  computed: {},
  watch: {},
  mounted() {
    this.userPhone = this.up;
    this.userSex = this.us;
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
.bg {
  background: #f5f5f5;
}
.main-container {
  width: 940px;
  height: 730px;
  /* border: 1px solid black; */
  margin: 0 auto;
  background: white;
  padding: 40px;
}
.userMsg {
  width: 900px;
  height: 188px;
  /* border: 1px solid black; */
  margin: 0 auto;
}
.count {
  width: 900px;
  height: 448px;
  /* border: 1px solid black; */
  margin: 0 auto;
  margin-top: 43px;
}
.userImg {
  width: 188px;
  height: 188px;
  border: 1px solid #d5d5d5;
  padding: 2px;
  box-sizing: border-box;
  float: left;
}
.msg-container {
  width: 670px;
  height: 167px;
  display: inline-block;
  float: right;
  margin-top: 10.5px;
  /* border: 1px solid black; */
}
.user-phone {
  font-size: 22px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d5d5d5;
}
.sex-img-male {
  width: 20px;
  height: 20px;
  display: inline-block;
  background: url("../../assets/imgs/userMain/icon.png");
  background-position: -41px -57px;
  margin-left: 20px;
  margin-top: -5px;
}
.sex-img-female {
  width: 20px;
  height: 20px;
  display: inline-block;
  background: url("../../assets/imgs/userMain/icon.png");
  background-position: -41px -27px;
  margin-left: 20px;
  margin-top: -5px;
}
.focus-ul {
  width: 670px;
  height: 41px;
  margin-top: 5px;
}
.focus-ul li {
  float: left;
  padding-right: 40px;
  padding-left: 5px;
  cursor: pointer;
}
.focus-ul li:nth-child(2) {
  border-right: 1px solid #d5d5d5;
  border-left: 1px solid #d5d5d5;
  box-sizing: border-box;
}
.focus-ul li:nth-child(2),
.focus-ul li:nth-child(3) {
  padding-left: 25px;
}
.focus-ul li:hover .focus-num,
.focus-ul li:hover .focus-text {
  color: rgb(12, 115, 194);
}
.focus-num {
  font-size: 24px;
  color: rgb(102, 102, 102);
}
.focus-text {
  font-size: 12px;
  color: rgb(102, 102, 102);
}
.user-location {
  font-size: 12px;
  color: rgb(102, 102, 102);
  text-align: left;
  margin-top: 28px;
}
.chat {
  font-size: 12px;
  color: rgb(102, 102, 102);
  margin-top: 10px;
}
.weibo {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../../assets/imgs/userMain/logo.png");
  background-position: 0px -25px;
  margin-left: 5px;
}
.dou {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../../assets/imgs/userMain/logo.png");
  background-position: -48px -25px;
  margin-left: 5px;
}
.count-title {
  font-size: 20px;
  color: rgb(102, 102, 102);
  padding: 2px;
  padding-bottom: 5px;
  border-bottom: 3px solid #1e84e4;
}
.sl-table {
  width: 900px;
  border: 1px solid #e2e2e2;
}
.plogo {
  width: 17px;
  height: 17px;
  display: inline-block;
  background: url("../../assets/imgs/userMain/table.png");
  background-position: 0px -103px;
}
.list-id {
  font-size: 16px;
  color: rgb(102, 102, 102);
  width: 30px;
}
.list-text {
  color: rgb(51, 51, 51);
  font-size: 12px;
  font-weight: bold;
  margin-right: 20px;
}
.list-author {
  color: rgb(174, 174, 174);
  font-size: 10px;
}
.sl-tr {
  height: 37px;
  line-height: 37px;
}
.pcount {
  font-size: 12px;
}
</style>