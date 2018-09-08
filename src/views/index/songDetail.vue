<template>
    <div class="all-container" :style="{minHeight:minHeight+'px'}">
        <!-- 背景模糊 -->
        <div class="main-container" :style="{minHeight:minHeight+'px'}">
            <div class="shadow"></div>
        </div>
        <!-- 内容 -->
        <div class="details-container">
            <!-- 图片logo -->
            <div class="logo"></div>
            <!-- 下载按钮 -->
            <div class="down-song">下载这首歌曲</div>
            <!-- 歌词框 -->
            <div class="song-text">
                <div class="song-title">Dream lt Possible</div>
                <div class="lf"><span class="title-text">专辑:&nbsp;&nbsp;&nbsp;</span><span class="title-detail">Dream lt Possible</span></div>
                <div class="lf author"><span class="title-text">歌手:&nbsp;&nbsp;&nbsp;</span><span class="title-detail">张靓颖</span></div>
                <!-- 歌词内容 -->
                <div class="text-detail topnav_box">
                    <!-- <p class="active-text"></p> -->
                    <div class="detail-all" :style="detailStyle">
                        <p class="active-text">张靓颖 - Dream It Possible</p>
                        <p>词：Andy Love</p>
                        <p>曲：Andy Love</p>
                        <p>编曲：崔迪</p>
                        <p>I will run I will climb I will soar</p>
                        <p>I'm undefeated</p>
                        <p>Jumping out of my skin pull the chord</p>
                        <p>Yeah I believe it</p>
                        <p>The past is everything we were don't make us who we are</p>
                        <p>So I'll dream until I make it real and all I see is stars</p>
                        <p>It's not until you fall that you fly</p>
                        <p>When your dreams come alive you're unstoppable</p>
                        <p>Take a shot chase the sun find the beautiful</p>
                        <p>We will glow in the dark turning dust to gold</p>
                        <p>And we'll dream it possible</p>
                        <p>Possible</p>
                        <p>I will chase I will reach I will fly</p>
                        <p>Until I'm breaking until I'm breaking</p>
                        <p>Out of my cage like a bird in the night</p>
                        <p>I know I'm changing I know I'm changing</p>
                        <p>In into something big better than before</p>
                        <p>And if it takes takes a thousand lives</p>
                        <p>Then it's worth fighting for</p>
                        <p>It's not until you fall that you fly</p>
                        <p>When your dreams come alive you're unstoppable</p>
                        <p>Take a shot chase the sun find the beautiful</p>
                        <p>We will glow in the dark turning dust to gold</p>
                        <p>And we'll dream it possible possible possible possible</p>
                        <p>From the bottom to the top</p>
                        <p>We're sparking wild fire's</p>
                        <p>Never quit and never stop</p>
                        <p>The rest of our lives</p>
                        <p>From the bottom to the top</p>
                        <p>We're sparking wild fire's</p>
                        <p>Never quit and never stop</p>
                        <p>It's not until you fall that you fly</p>
                        <p>When your dreams come alive you're unstoppable</p>
                        <p>Take a shot chase the sun find the beautiful</p>
                        <p>We will glow in the dark turning dust to gold</p>
                        <p>And we'll dream it possible</p>
                        <p>Possible possible possible</p>
                        <p>We'll dream it possible</p>
                    </div>
                </div>
            </div>
        </div>
         <!-- 播放栏 -->
        <el-row>
            <el-col :span="24" class="play-container">
                <el-row>
                    <el-col :span="16" :offset="4" class="play-list">
                        <!-- 播放按钮 -->
                        <div class="play-btn">
                            <div class="back-btn"></div>
                            <div class="bo-btn" v-show="!isplaying" @click="playAu"></div>
                            <div class="pa-btn" v-show="isplaying" @click="stopAu"></div>
                            <div class="go-btn"></div>
                        </div>
                        <div class="middle">
                          <!-- 歌曲logo图 -->
                          <img src="../../assets/imgs/songDetail/song.jpg" alt="" class="song-bo-img">
                          <!-- 歌曲信息进度条 -->
                          <div class="mp3-player">
                            <audio :src="audioSrc" autoplay loop id="music"></audio>
                            <div class="block">
                              <span class="demonstration bo-name">Dream lt Possible</span>
                              <el-slider v-model="playPosition" :show-tooltip="false" class="slider" :max="total"></el-slider>
                            </div>
                            <div class="play-time"><span>{{playMin}}:{{playMiao}}</span> / <span>2:03</span></div>
                          </div>
                        </div>
                        <!-- 右侧功能栏 -->
                        <div class="fun-list">
                          <ul class="fun-ul">
                            <li class="fun-li voice"></li>
                            <li class="fun-li playFun"></li>
                            <li class="fun-li download"></li>
                            <li class="fun-li share"></li>
                          </ul>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import "../../assets/js/jquery.js";
export default {
  data() {
    return {
      minHeight: 0,
      timer: "",
      playTimer: "",
      upLoad: 0,
      detailStyle: {
        top: "98px"
      },
      playPosition: 0,
      tag: 0,
      total: 123,
      playMiao: 0,
      playMin: 0,
      isplaying: true,
      audioSrc: require("../../assets/MP3/Dream_It_Possible.mp3")
    };
  },
  methods: {
    textDown() {
      this.tag = 0;
      this.timer = setInterval(() => {
        var a = parseInt(this.detailStyle.top);
        if (a == -1542) {
          a = 98;
        }
        $(".active-text")
          .next()
          .addClass("active-text")
          .siblings()
          .removeClass("active-text");
        this.detailStyle.top = a - 40 + "px";
        // this.tag += 3;
        // console.log(this.tag);
        // console.log(this.detailStyle.top);
      }, 3000);
    },
    playSlider() {
      this.playTimer = setInterval(() => {
        if (this.playPosition == 123) {
          this.playPosition = 0;
        }
        this.playPosition++;
        if (this.playMiao == 59) {
          this.playMin++;
          this.playMiao = 0;
        }
        if (this.playMin == 2) {
          if (this.playMiao == 3) {
            this.playMiao = 0;
            this.playMin = 0;
          }
        }
        this.playMiao++;
      }, 1000);
    },
    playAu() {
      this.isplaying = true;
      this.textDown();
      this.playSlider();
      document.getElementById("music").play();
    },
    stopAu() {
      this.isplaying = false;
      window.clearInterval(this.playTimer);
      window.clearInterval(this.timer);
      document.getElementById("music").pause();
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 133;
    window.onresize = () => {
      this.minHeight = document.documentElement.clientHeight - 133;
    };
    this.textDown();
    this.playSlider();
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
p {
  font-size: 15px;
  color: #a3a1a1;
  font-weight: bold;
}
.all-container {
  background: black;
  position: relative;
}
.main-container {
  background: url("../../assets/imgs/songDetail/song.jpg");
  background-size: 150% 150%;
  filter: blur(45px);
  z-index: 1003;
}
.shadow {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.6);
}
.details-container {
  width: 840px;
  height: 493px;
  position: absolute;
  /* border: 1px solid white; */
  top: 9%;
  left: 50%;
  margin-left: -420px;
}
.logo {
  width: 260px;
  height: 260px;
  background: url("../../assets/imgs/songDetail/song.jpg");
  position: absolute;
  top: 0px;
  left: 0px;
}
.down-song {
  width: 230px;
  height: 50px;
  line-height: 50px;
  position: absolute;
  top: 300px;
  left: 14px;
  color: white;
  text-align: center;
  border: 1px solid white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  font-size: 20px;
  cursor: pointer;
}
.song-text {
  width: 460px;
  height: 500px;
  position: absolute;
  right: 0px;
  /* border: 1px solid white; */
  box-sizing: border-box;
}
.song-title {
  font-size: 24px;
  color: white;
  margin-bottom: 10px;
}
.title-text {
  color: #a3a1a1;
}
.title-detail {
  color: white;
  height: 500px;
}
.author {
  margin-left: 50px;
}
.topnav_box::-webkit-scrollbar {
  width: 5px;
  height: 1px;
  background-color: #353435;
}
.topnav_box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
}

.topnav_box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #b5b1b1;
}
.play-container {
  height: 80px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  /* border: 1px solid white; */
}
/* .active-text {
  background: rgba(0, 0, 0, 0.5);
  width: 455.2px;
  height: 20px;
  position: fixed;
  top: 50%;
  margin-top: -1px;
} */
.active-text {
  color: white;
  background: rgba(0, 0, 0, 0.5);
}
.text-detail {
  width: 460px;
  height: 406px;
  float: left;
  /* border: 1px solid white; */
  box-sizing: border-box;
  margin-top: 20px;
  overflow: auto;
  /* margin-left: -60px; */
  position: relative;
}
.detail-all {
  width: 455px;
  /* height: 100%; */
  transition: all 0.5s linear;
  text-align: left;
  position: absolute;
  top: 98px;
  overflow: hidden;
}
.detail-all p {
  margin-top: 20px;
}
.play-list {
  /* border: 1px solid white; */
  height: 80px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.play-btn {
  width: 160px;
  height: 80px;
  position: absolute;
  /* background: white; */
}
.back-btn {
  width: 36px;
  height: 36px;
  background: url("../../assets/imgs/songDetail/btn.png") no-repeat;
  background-position: 0 -143px;
  position: absolute;
  top: 50%;
  margin-top: -18px;
  cursor: pointer;
}
.bo-btn {
  width: 60px;
  height: 60px;
  background: url("../../assets/imgs/songDetail/btn.png") no-repeat;
  background-position: -60px 0;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -30px;
  cursor: pointer;
}
.pa-btn {
  width: 60px;
  height: 60px;
  background: url("../../assets/imgs/songDetail/btn.png") no-repeat;
  background-position: -60px -60px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -30px;
  margin-top: -30px;
  cursor: pointer;
}
.go-btn {
  width: 36px;
  height: 36px;
  background: url("../../assets/imgs/songDetail/btn.png") no-repeat;
  background-position: -144px -143px;
  position: absolute;
  top: 50%;
  right: 0px;
  margin-top: -18px;
  cursor: pointer;
}
.song-bo-img {
  width: 60px;
  height: 60px;
  position: absolute;
  /* left: 210px; */
  top: 50%;
  margin-top: -30px;
}
.bo-name {
  color: white;
  font-size: 12px;
  /* position: absolute; */
  /* left: 300px; */
  /* top: 18px; */
}
.mp3-player {
  position: absolute;
  left: 80px;
}
.slider {
  width: 400px;
  /* width: 100%; */
}
.play-time {
  width: 73px;
  height: 15px;
  position: absolute;
  top: 5px;
  left: 350px;
  color: white;
  font-size: 12px;
}
.play-time span {
  color: white;
  font-size: 12px;
}
.middle {
  width: 600px;
  height: 80px;
  position: absolute;
  /* border: 1px solid white; */
  left: 50%;
  margin-left: -300px;
}
.fun-list {
  width: 260px;
  height: 80px;
  /* border: 1px solid white; */
  position: absolute;
  right: 0px;
}
.fun-ul {
  width: 262px;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  margin-top: -8px;
}
.fun-li {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.voice {
  background: url("../../assets/imgs/songDetail/btn.png");
  /* background-position: -80px -195px; */
  background-position: -64px -195px;
}
.voice:hover {
  background: url("../../assets/imgs/songDetail/btn.png");
  background-position: -80px -195px;
}
.playFun {
  background: url("../../assets/imgs/songDetail/btn.png");
  background-position: -64px -179px;
}
.playFun:hover {
  background: url("../../assets/imgs/songDetail/btn.png");
  background-position: -80px -179px;
}
.download {
  background: url("../../assets/imgs/songDetail/btn.png");
  background-position: -240px -32px;
}
.download:hover {
  background: url("../../assets/imgs/songDetail/btn.png");
  background-position: -256px -32px;
}
.share {
  background: url("../../assets/imgs/songDetail/btn.png");
  background-position: -240px 0;
}
.share:hover {
  background: url("../../assets/imgs/songDetail/btn.png");
  background-position: -256px 0;
}
</style>
