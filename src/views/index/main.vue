<template>
    <div>
        <!-- main -->
        <!-- 轮播图 -->
        <el-row class="carousel-row">
          <el-col :span="24">
            <el-carousel :interval="4000" height="380px" indicator-position="none">
              <el-carousel-item v-for="item in 7" :key="item" class="carousel-container">
                <div></div>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <!-- app下载列表 -->
          <el-col :span="24" class="download-container">
            <el-row>
              <el-col :span="16" :offset="4" class="down-detail">
                <ul class="down-ul">
                  <li @click="toDownApp"><i class="down-li"></i><a href="#"> 下载pc版</a></li>
                  <li @click="toDownApp"><i class="down-li"></i><a href="#"> 下载iphone版</a></li>
                  <li @click="toDownApp"><i class="down-li"></i><a href="#"> 下载android版</a></li>
                </ul>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- 虚拟播放 -->

        <!-- 主要内容 -->
        <el-row>
          <el-col :span="16" :offset="4" class="main-container">
            <!-- part1 -->
            <div class="part1">
              <el-row>
                <!-- 左侧 -->
                <el-col :span="15">
                  <!-- 标题栏 -->
                  <el-row>
                    <el-col :span="24">
                      <div class="left-title"><span>精选</span><span>歌单</span></div>
                      <a href="#" class="left-more" @click="toSongList">更多</a>
                    </el-col>
                  </el-row>
                  <!-- 内容栏 -->
                  <el-row class="img-container">
                    <!-- 大图 -->
                    <el-col :span="12">
                      <div class="big-img" @mouseover="playing" @mouseout="pause" @click="toDetail">
                        <div class="big-text-container">
                          <div>总有一句歌词让你泪流满面</div>
                          <div>陈碧海</div>
                        </div>
                        <div class="big-playcount">
                          <div class="listen-logo"></div>
                          <span>1.3万</span>
                        </div>
                        <!-- 悬浮效果 -->
                        <div class="big-shaow" v-show="isplay" @mouseover="playing" @mouseout="playing"></div>
                        <div class="big-play-logo" v-show="isplay" @mouseover="playing" @mouseout="playing"></div>
                      </div>
                    </el-col>
                    <!-- 小图 -->
                    <el-col :span="12">
                      <ul class="small-container">
                        <li v-for="(item,i) of jingXuanList" class="small-item" @mouseover="leftshow(i)" @mouseout="leftpause(i)" @click="toDetail">
                          <img :src="item" class="small-img"/>
                          <div class="small-text">
                            <div>小哥哥,我的...</div>
                            <div>风少</div>
                          </div>
                          <div class="small-playcount">
                            <div class="listen-logo"></div>
                            <span>4.6万</span>
                          </div>
                          <!-- 悬停效果 -->
                          <div class="small-shaow" v-show="leftplayshow[i]" @mouseover="leftshow(i)" @mouseout="leftpause(i)"></div>
                          <div class="small-play-logo" v-show="leftplayshow[i]" @mouseover="leftshow(i)" @mouseout="leftpause(i)"></div>
                        </li>
                      </ul>
                    </el-col>
                  </el-row>
                </el-col>
                <!-- 右侧 -->
                <el-col :span="8" :offset="1" class="right-container">
                  <!-- 标题栏 -->
                  <el-row>
                    <el-col :span="24">
                      <div class="left-title"><span>热门</span><span>榜单</span></div>
                      <a href="javascript:void(0)" class="left-more" @click="toMore">更多</a>
                    </el-col>
                  </el-row>
                  <!-- 内容栏 -->
                  <el-row>
                    <el-col :span="24">
                      <ul class="hot-ul">
                        <li v-for="(item,i) of hotimgList">
                          <div @mouseover="play(i)" @mouseout="paused(i)" class="small-main" @click="toDetail">
                            <img :src="item.img" alt="" class="hot-img">
                            <span>{{item.title}}</span>
                            <div class="right-text">
                              <div>1.xxxxx</div>
                              <div>2.xxxxxx</div>
                            </div>
                            <!-- 悬停栏 -->
                            <div class="shaow" v-show="playshowList[i]"></div>
                            <div class="play-logo" v-show="playshowList[i]"></div>
                          </div>
                        </li>
                      </ul>
                    </el-col>
                  </el-row>
                  
                </el-col>
              </el-row>
            </div>
            <!-- part2 -->
            <div class="part2">
              <el-row>
                <!-- 左侧 -->
                <el-col :span="15">
                  <!-- 标题栏 -->
                  <el-row>
                    <el-col :span="24" class="new-container">
                      <div class="left-title newtitle"><span>新歌</span><span>首发</span></div>
                      <ul class="newList">
                        <li v-for="(item,i) of newList"><el-button @click.prevent="showList(i)" ref="newItem" name="default">{{item}}</el-button>
                        </li>
                      </ul>
                      <div class="playall"><i class="el-icon-caret-right"></i><a href="javascript:void(0)">全部播放</a></div>
                    </el-col>
                  </el-row>
                  <!-- 内容栏 -->
                  <el-row>
                    <el-col :span="24">
                      <transition enter-active-class="zoomIn" leave-active-class="zoomOut" mode="out-in">
                        <router-view class="animated"></router-view>
                      </transition>
                    </el-col>
                  </el-row>
                </el-col>
                <!-- 右侧 -->
                <el-col :span="8" :offset="1">
                  <!-- 标题栏 -->
                  <el-row>
                    <el-col :span="24">
                      <div class="left-title"><span>推荐</span><span>MV</span></div>
                      <a href="#" class="left-more" @click="toMV">更多</a>
                    </el-col>
                  </el-row>
                  <!-- 内容栏 -->
                  <el-row>
                    <el-col :span="24" class="part2-main-container">
                    <!-- 大图 -->
                      <div class="mv-big-container" @mouseover="p2show=true" @mouseout="p2show=false" @click="toDetail">
                        <img src="../../assets/imgs/main/mv-big.jpg" alt="" class="mv-Bigimg">
                        <div class="big-text">
                          <div>谜</div>
                          <div>张杰</div>
                        </div>
                        <div class="p2-big-shaow" v-show="p2show"></div>
                        <div class="p2-big-play-logo" v-show="p2show"></div>
                      </div>
                    <!-- 小图 -->
                      <el-row>
                        <el-col :span="24">
                          <div class="p2-smallPic1" @mouseover="p2SmallShow1=true" @mouseout="p2SmallShow1=false" @click="toDetail">
                            <div class="p2-small-play-logo" v-show="p2SmallShow1"></div>
                            <div class="p2-small-shaow" v-show="p2SmallShow1"></div>
                          </div>
                          <div class="p2-smallPic2" @mouseover="p2SmallShow2=true" @mouseout="p2SmallShow2=false" @click="toDetail">
                            <div class="p2-small-play-logo" v-show="p2SmallShow2"></div>
                            <div class="p2-small-shaow" v-show="p2SmallShow2"></div>
                          </div>
                        </el-col>
                      </el-row>
                      <!-- 小图文字 -->
                      <el-row>
                        <el-col :span="24">
                          <div class="p2-small-text-left">
                            <div>夜笙歌(舞蹈版)</div>
                            <div class="mini-text">SING女团</div>
                          </div>
                          <div class="p2-small-text-right">
                            <div>当每颗星星(阿信版)</div>
                            <div class="mini-text">阿信</div>
                          </div>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              
            </div>
            <!-- part3 -->
            <div class="part3">
              <el-row>
                <!-- 左侧 -->
                <el-col :span="15">
                  <!-- 标题栏 -->
                  <el-row>
                    <el-col :span="24">
                      <div class="left-title"><span>热门</span><span>电台</span></div>
                      <a href="#" class="left-more" @click="toAudio">更多</a>
                    </el-col>
                  </el-row>
                  <!-- 内容栏 -->
                  <el-row>
                    <el-col :span="24" class="circle-container">
                      <ul class="audio-ul">
                        <li v-for="(item,i) of hotAudio" class="audio-li" @mouseover="item.isShaow=true" @mouseout="item.isShaow=false" @click="toDetail">
                          <img :src="item.imgsrc" alt="" class="audio-img">
                          <div class="audio-text">{{item.title}}</div>
                          <!-- 阴影 -->
                          <div class="circle-shaow" v-show="item.isShaow"></div>
                          <div class="circle-play-logo" v-show="item.isShaow"></div>
                        </li>
                      </ul>
                    </el-col>
                  </el-row>
                </el-col>
                <!-- 右侧 -->
                <el-col :span="8" :offset="1">
                  <!-- 标题栏 -->
                  <el-row>
                    <el-col :span="24">
                      <div class="left-title"><span>热门</span><span>歌手</span></div>
                      <a href="#" class="left-more" @click="toSinger">更多</a>
                      <ul class="p3-title-list">
                        <li><a href="javascript:void(0)" :style="hslistH" @click="toHuayu">华语</a></li>
                        <li><a href="javascript:void(0)" :style="hslistO" @click="toOumei">欧美</a></li>
                        <li><a href="javascript:void(0)" :style="hslistR" @click="toRihan">日韩</a></li>
                      </ul>
                    </el-col>
                  </el-row>
                  <!-- 内容栏 -->
                  <el-row>
                    <el-col :span="24" class="p3-hua">
                      <!-- 华语 -->
                      <ul class="p3-hot-ul" v-show="p3HuaShow">
                        <!-- 大图 -->
                        <li class="p3-hot-big" v-for="(item,i) of hotSingerHuaBig" @mouseover="item.shaow=true" @mouseout="item.shaow=false" @click="toDetail">
                          <img :src="item.img" alt="">
                          <div class="p3-hot-text">{{item.title}}</div>
                          <div class="p3-hot-big-shaow" v-show="item.shaow"></div>
                        </li>
                        <!-- 小图 -->
                        <li class="p3-hot-small" v-for="(item,i) of hotSingerHuaSmall" @mouseover="item.shaow=true" @mouseout="item.shaow=false" @click="toDetail">
                          <img :src="item.img" alt="">
                          <div class="p3-hot-text">{{item.title}}</div>
                          <div class="p3-hot-small-shaow" v-show="item.shaow"></div>
                        </li>
                      </ul>
                      <!-- 欧美 -->
                      <ul class="p3-hot-ul" v-show="p3OuShow">
                        <!-- 大图 -->
                        <li class="p3-hot-big" v-for="(item,i) of hotSingerOuBig" @mouseover="item.shaow=true" @mouseout="item.shaow=false" @click="toDetail">
                          <img :src="item.img" alt="">
                          <div class="p3-hot-text">{{item.title}}</div>
                          <div class="p3-hot-big-shaow" v-show="item.shaow"></div>
                        </li>
                        <!-- 小图 -->
                        <li class="p3-hot-small" v-for="(item,i) of hotSingerOuSmall" @mouseover="item.shaow=true" @mouseout="item.shaow=false" @click="toDetail">
                          <img :src="item.img" alt="">
                          <div class="p3-hot-text">{{item.title}}</div>
                          <div class="p3-hot-small-shaow" v-show="item.shaow"></div>
                        </li>
                      </ul>
                      <!-- 日韩 -->
                        <ul class="p3-hot-ul" v-show="p3RiShow">
                          <!-- 大图 -->
                          <li class="p3-hot-big" v-for="(item,i) of hotSingerRiBig" @mouseover="item.shaow=true" @mouseout="item.shaow=false" @click="toDetail">
                            <img :src="item.img" alt="">
                            <div class="p3-hot-text">{{item.title}}</div>
                            <div class="p3-hot-big-shaow" v-show="item.shaow"></div>
                          </li>
                          <!-- 小图 -->
                          <li class="p3-hot-small" v-for="(item,i) of hotSingerRiSmall" @mouseover="item.shaow=true" @mouseout="item.shaow=false" @click="toDetail">
                            <img :src="item.img" alt="">
                            <div class="p3-hot-text">{{item.title}}</div>
                            <div class="p3-hot-small-shaow" v-show="item.shaow"></div>
                          </li>
                        </ul>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <!-- part4 -->
            <div class="part4">
              <!-- 标题栏 -->
              <el-row>
                <el-col :span="24">
                  <div class="left-title"><span>友情</span><span>链接</span></div>
                  <a href="#" class="left-more">更多</a>
                </el-col>
              </el-row>
              <!-- 内容栏 -->
              <el-row>
                <el-col :span="24">
                  <table class="link-table">
                    <tr>
                      <td v-for="item of linkList.slice(0,8)">
                        <a href="javascript:void(0)">{{item}}</a>
                      </td>
                    </tr>
                    <tr>
                      <td v-for="item of linkList.slice(8)">
                        <a href="javascript:void(0)">{{item}}</a>
                      </td>
                    </tr>
                  </table>
                </el-col>
              </el-row>
              
            </div>
          </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isplay: false,
      jingXuanList: [
        require("../../assets/imgs/main/jingxuan_smalldemo.jpg"),
        require("../../assets/imgs/main/jingxuan_smalldemo2.jpg"),
        require("../../assets/imgs/main/jingxuan_smalldemo3.jpg"),
        require("../../assets/imgs/main/jingxuan_smalldemo4.jpg")
      ],
      hotimgList: [
        {
          title: "酷狗飙升榜",
          img: require("../../assets/imgs/main/hot1.jpg")
        },
        {
          title: "酷狗TOP500",
          img: require("../../assets/imgs/main/hot2.jpg")
        },
        {
          title: "网络红歌榜",
          img: require("../../assets/imgs/main/hot3.jpg")
        }
      ],
      leftplayshow: [false, false, false, false],
      playshowList: [false, false, false],
      newList: ["华语", "欧美", "韩国", "日本"],
      p2show: false,
      p2SmallShow1: false,
      p2SmallShow2: false,
      hotAudio: [
        {
          title: "KTV必点歌曲",
          imgsrc: require("../../assets/imgs/main/audio1.jpg"),
          isShaow: false
        },
        {
          title: "中文DJ",
          imgsrc: require("../../assets/imgs/main/audio2.jpg"),
          isShaow: false
        },
        {
          title: "酷狗热歌",
          imgsrc: require("../../assets/imgs/main/audio3.jpg"),
          isShaow: false
        },
        {
          title: "网络红歌",
          imgsrc: require("../../assets/imgs/main/audio4.jpg"),
          isShaow: false
        },
        {
          title: "经典",
          imgsrc: require("../../assets/imgs/main/audio5.jpg"),
          isShaow: false
        },
        {
          title: "老情歌",
          imgsrc: require("../../assets/imgs/main/audio6.jpg"),
          isShaow: false
        },
        {
          title: "新歌",
          imgsrc: require("../../assets/imgs/main/audio7.jpg"),
          isShaow: false
        },
        {
          title: "动漫",
          imgsrc: require("../../assets/imgs/main/audio8.jpg"),
          isShaow: false
        },
        {
          title: "轻音乐",
          imgsrc: require("../../assets/imgs/main/audio9.jpg"),
          isShaow: false
        },
        {
          title: "最爱成名曲",
          imgsrc: require("../../assets/imgs/main/audio10.jpg"),
          isShaow: false
        }
      ],
      hslistH: {
        color: "#4db8f6"
      },
      hslistO: {
        color: "black"
      },
      hslistR: {
        color: "black"
      },
      hotSingerHuaBig: [
        {
          img: require("../../assets/imgs/main/hot-samll1.jpg"),
          title: "摩登兄弟",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-small2.jpg"),
          title: "周杰伦",
          shaow: false
        }
      ],
      hotSingerOuBig: [
        {
          img: require("../../assets/imgs/main/hot-ousmall1.jpg"),
          title: "Alan Walker",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-ousmall2.jpg"),
          title: "Michael Jackson",
          shaow: false
        }
      ],
      hotSingerOuBig: [
        {
          img: require("../../assets/imgs/main/hot-ousmall1.jpg"),
          title: "Alan Walker",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-ousmall2.jpg"),
          title: "Michael Jackson",
          shaow: false
        }
      ],
      hotSingerRiBig: [
        {
          img: require("../../assets/imgs/main/hot-Rismall1.jpg"),
          title: "BIGBANG",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-Rismall2.jpg"),
          title: "EXO",
          shaow: false
        }
      ],
      hotSingerHuaSmall: [
        {
          img: require("../../assets/imgs/main/hot-samll3.jpg"),
          title: "薛子谦",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-samll4.jpg"),
          title: "TFBOYS",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-samll5.jpg"),
          title: "张杰",
          shaow: false
        }
      ],
      hotSingerOuSmall: [
        {
          img: require("../../assets/imgs/main/hot-ousmall3.jpg"),
          title: "Justin Bieber",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-ousmall4.jpg"),
          title: "Taylor Switt",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-ousmall5.jpg"),
          title: "Marshmello",
          shaow: false
        }
      ],
      hotSingerRiSmall: [
        {
          img: require("../../assets/imgs/main/hot-Rismall3.jpg"),
          title: "G-DRAGON",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-Rismall4.jpg"),
          title: "iKON",
          shaow: false
        },
        {
          img: require("../../assets/imgs/main/hot-Rismall5.jpg"),
          title: "PSY",
          shaow: false
        }
      ],
      p3HuaShow: true,
      p3OuShow: false,
      p3RiShow: false,
      linkList: [
        "爱美网",
        "央视网综艺频道",
        "汽车论坛",
        "IT之家",
        "iPhone游戏",
        "旅游策略",
        "悦声无限",
        "华为商城",
        "365  音乐网",
        "软件下载",
        "慢慢看漫画",
        "手机游戏",
        "5sing原创音乐",
        "腾讯音乐人",
        "豌豆荚"
      ],
      tomoreTag: "2"
    };
  },
  props: ["isActive"],
  methods: {
    play(i) {
      this.$set(this.playshowList, i, true);
    },
    paused(i) {
      this.$set(this.playshowList, i, false);
    },
    leftshow(i) {
      this.$set(this.leftplayshow, i, true);
    },
    leftpause(i) {
      this.$set(this.leftplayshow, i, false);
    },
    playing() {
      this.isplay = true;
    },
    pause() {
      this.isplay = false;
    },
    showList(i) {
      if (i == 0) {
        this.$router.push("/index/main/huayu");
      }
      if (i == 1) {
        this.$router.push("/index/main/oumei");
      }
      if (i == 2) {
        this.$router.push("/index/main/hanguo");
      }
      if (i == 3) {
        this.$router.push("/index/main/riben");
      }
    },
    toHuayu() {
      this.hslistH.color = "#4db8f6";
      this.hslistO.color = "black";
      this.hslistR.color = "black";
      this.p3HuaShow = true;
      this.p3OuShow = false;
      this.p3RiShow = false;
    },
    toOumei() {
      this.hslistH.color = "black";
      this.hslistO.color = "#4db8f6";
      this.hslistR.color = "black";
      this.p3HuaShow = false;
      this.p3OuShow = true;
      this.p3RiShow = false;
    },
    toRihan() {
      this.hslistH.color = "black";
      this.hslistO.color = "black";
      this.hslistR.color = "#4db8f6";
      this.p3HuaShow = false;
      this.p3OuShow = false;
      this.p3RiShow = true;
    },
    toMore() {
      this.$emit("sendActive", this.tomoreTag);
      this.$router.push("/index/bangdan");
    },
    toDownApp() {
      this.$emit("sendActive", "3");
      this.$router.push("/index/downloadapp");
    },
    toSongList() {
      this.$emit("sendActive", "");
      this.$router.push("/index/songlist");
    },
    toMV() {
      this.$emit("sendActive", "");
      this.$router.push("/index/MV");
    },
    toAudio() {
      this.$emit("sendActive", "");
      this.$router.push("/index/audio");
    },
    toSinger() {
      this.$emit("sendActive", "");
      this.$router.push("/index/singer");
    },
    toDetail() {
      this.$router.push("/index/songDetail");
      this.$emit("footerShow", false);
    }
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {}
};
</script>
<style scoped>
* {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.audio-control {
  /* width: 100%; */
  position: fixed;
  bottom: 0px;
  z-index: 100;
}
.big-play-logo {
  background: url("../../assets/imgs/sprite.png");
  background-position: 0 -401px;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 6px;
  right: 10px;
  z-index: 50;
}
.big-shaow {
  width: 322px;
  height: 325px;
  position: absolute;
  top: 50%;
  margin-top: -162.5px;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.small-play-logo {
  background: url("../../assets/imgs/sprite.png");
  background-position: 0 -401px;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  margin-top: -18px;
  z-index: 50;
}
.small-shaow {
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  margin-top: -80px;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.play-logo {
  background: url("../../assets/imgs/sprite.png");
  background-position: 0 -401px;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 50%;
  left: 10%;
  margin-top: -18px;
  z-index: 50;
}
.shaow {
  width: 98px;
  height: 98px;
  position: absolute;
  top: 50%;
  margin-top: -49px;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.carousel-container {
  cursor: pointer;
}
.carousel-container:nth-child(3) {
  background: url("../../assets/imgs/carousel/1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.carousel-container:nth-child(4) {
  background: url("../../assets/imgs/carousel/2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.carousel-container:nth-child(5) {
  background: url("../../assets/imgs/carousel/3.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.carousel-container:nth-child(6) {
  background: url("../../assets/imgs/carousel/4.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.carousel-container:nth-child(7) {
  background: url("../../assets/imgs/carousel/5.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.carousel-container:nth-child(8) {
  background: url("../../assets/imgs/carousel/6.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.carousel-container:nth-child(9) {
  background: url("../../assets/imgs/carousel/7.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.main-container {
  height: 100%;
  /* border: 1px solid black; */
  margin-top: 30px;
}
.carousel-row {
  position: relative;
}
.download-container {
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  position: absolute;
  /* border: 1px solid black; */
  bottom: 0px;
}
.down-detail {
  height: 60px;
}
.down-ul {
  display: flex;
  justify-content: space-around;
  height: 60px;
  line-height: 60px;
}
.down-ul li i {
  color: white;
  display: inline-block;
  width: 20px;
  height: 20px;
}
.down-ul li:nth-child(1) i {
  background: url("../../assets/imgs/main/pc.png");
  background-size: 100% 100%;
}
.down-ul li:nth-child(2) i {
  background: url("../../assets/imgs/main/mac.png");
  background-size: 100% 100%;
}
.down-ul li:nth-child(3) i {
  background: url("../../assets/imgs/main/andriod.png");
  background-size: 100% 100%;
}
.down-ul li a {
  color: white;
  font-size: 15px;
}
.part1 {
  height: 390px;
  width: 1000px;
  /* border: 1px solid black; */
  margin: 0 auto;
  position: relative;
}
/* 左侧样式 */
.left-title {
  float: left;
}
.left-title span {
  font-size: 28px;
}
.left-title span:first-child {
  color: #4db8f6;
}
.left-title span:nth-child(2) {
  color: #888888;
}
.left-more {
  float: right;
  font-size: 14px;
  color: #888888;
  margin-top: 10px;
}
.left-more:hover {
  color: #4db8f6;
}
.img-container {
  width: 660px;
  height: 330px;
  position: absolute;
  top: 65px;
}
.big-img {
  width: 325px;
  height: 325px;
  background: url("../../assets/imgs/main/jingxuan_demo.jpg");
  background-size: 100% 100%;
  position: relative;
}
.big-text-container {
  width: 325px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  z-index: 50;
}
.big-text-container div {
  font-size: 14px;
  margin-left: 5px;
  margin-top: 3px;
}
.big-text-container div:first-child {
  color: white;
}
.big-text-container div:nth-child(2) {
  color: #898a8b;
}
.big-playcount {
  width: 160px;
  height: 30px;
  background: url("../../assets/imgs/main/cptTBg.png");
  position: absolute;
  top: 0px;
  right: 0px;
  text-align: right;
}
.big-playcount span {
  color: white;
  font-size: 13px;
}
.listen-logo {
  width: 24px;
  height: 24px;
  background-image: url("../../assets/imgs/sprite.png");
  background-position: 6px -262px;
  display: inline-block;
}
.small-container {
  height: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.small-item {
  width: 160px;
  height: 160px;
  position: relative;
}
.small-text {
  background: rgba(0, 0, 0, 0.5);
  width: 160px;
  height: 50px;
  position: absolute;
  bottom: 0px;
}
.small-img {
  width: 160px;
  height: 160px;
}
.small-text div {
  font-size: 13px;
  color: white;
  margin-left: 7px;
}
.small-text div:first-child {
  margin-top: 5px;
}
.small-playcount {
  width: 160px;
  height: 30px;
  background: url("../../assets/imgs/main/cptTBg.png");
  position: absolute;
  top: 0px;
  text-align: right;
}
.small-playcount span {
  color: white;
  font-size: 12px;
}
.right-container {
  height: 392px;
}
.hot-ul {
  width: 100%;
  position: absolute;
  top: 32px;
  height: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hot-ul li {
  width: 100%;
  background: #f6f6f6;
  height: 98px;
  position: relative;
}
.small-main {
  width: 100%;
}
.hot-img {
  width: 98px;
  height: 98px;
}
.hot-ul li span {
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
  position: absolute;
  top: 12px;
  /* left: 10px; */
}
.right-text {
  position: absolute;
  top: 35px;
  left: 105px;
}
.right-text div {
  font-size: 14px;
  color: #6e6e6e;
}
.part2 {
  height: 375px;
  /* border: 1px solid black; */
  width: 1000px;
  margin: 0 auto;
  margin-top: 30px;
}
.new-container {
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}
.newtitle {
  margin-right: 20px;
}
.newList {
  float: left;
  display: flex;
  justify-content: space-between;
  width: 183px;
  line-height: 36.8px;
}
.newList li button {
  font-size: 14px;
  color: black;
  /* background: white; */
  border: 0px;
  cursor: pointer;
}
.playall {
  float: right;
  width: 91px;
  height: 31px;
  line-height: 31px;
  text-align: center;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  margin-top: 5px;
}
.playall:hover {
  border: 1px solid #009af3;
}
.playall a {
  display: inline-block;
  font-size: 12px;
  margin-top: -6px;
  color: #555555;
}
.playall a:hover {
  color: #009af3;
}
.part2-main-container {
  height: 312px;
}
.mv-big-container {
  width: 100%;
  height: 175px;
  margin-top: 15px;
  position: relative;
}
.mv-Bigimg {
  width: 100%;
  height: 175px;
}
.big-text {
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  font-size: 14px;
  color: white;
}
.big-text div {
  margin-left: 15px;
  margin-top: 2px;
}
.big-text div:nth-child(2) {
  color: #cfcfcf;
}
.p2-big-play-logo {
  background: url("../../assets/imgs/sprite.png");
  background-position: 0 -401px;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 6px;
  right: 10px;
  z-index: 50;
}
.p2-big-shaow {
  width: 100%;
  height: 175px;
  position: absolute;
  top: 50%;
  margin-top: -87.5px;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.p2-smallPic1 {
  width: 160px;
  height: 84px;
  background: url("../../assets/imgs/main/mv-small.jpg");
  background-size: 100% 100%;
  float: left;
  margin-top: 12px;
  position: relative;
}
.p2-smallPic2 {
  width: 160px;
  height: 84px;
  background: url("../../assets/imgs/main/mv-small2.jpg");
  background-size: 100% 100%;
  float: right;
  margin-top: 12px;
  position: relative;
}
.p2-small-text-left {
  float: left;
  color: #444;
  font-size: 14px;
  cursor: pointer;
}
.p2-small-text-left:hover {
  color: #009af3;
}
.p2-small-text-right {
  float: right;
  color: #444;
  font-size: 14px;
  cursor: pointer;
  margin-right: 30px;
}
.p2-small-text-right:hover {
  color: #009af3;
}
.mini-text {
  font-size: 12px;
}
.p2-small-play-logo {
  background: url("../../assets/imgs/sprite.png");
  background-position: 0 -401px;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -18px;
  margin-left: -18px;
  z-index: 50;
}
.p2-small-shaow {
  width: 154px;
  height: 84px;
  position: absolute;
  top: 50%;
  margin-top: -42px;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.part3 {
  height: 355px;
  /* border: 1px solid black; */
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
}
.circle-container {
  width: 625px;
  height: 310px;
}
.audio-ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 20px;
}
.audio-img {
  width: 100px;
  height: 100px;
}
.audio-li {
  padding: 5px;
  position: relative;
}
.audio-text {
  width: 100px;
  font-size: 14px;
  text-align: center;
}
.circle-shaow {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -50px;
  margin-top: -41px;
  background: rgba(0, 0, 0, 0.3);
}
.circle-play-logo {
  background: url("../../assets/imgs/sprite.png");
  background-position: 0 -401px;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -38px;
  margin-left: -18px;
  z-index: 50;
}
.p3-title-list {
  float: right;
  display: flex;
  justify-content: space-between;
  width: 150px;
  height: 36.8px;
  line-height: 36.8px;
  margin-right: 20px;
}
.p3-title-list li a {
  font-size: 14px;
  color: black;
}
.p3-hua {
  height: 270px;
}
.p3-hot-ul {
  height: 280px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}
.p3-hot-big {
  width: 160px;
  height: 160px;
  position: relative;
}
.p3-hot-big img {
  width: 160px;
  height: 160px;
}
.p3-hot-text {
  color: white;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.p3-hot-small {
  width: 105px;
  height: 105px;
  position: relative;
}
.p3-hot-small img {
  width: 105px;
  height: 105px;
}
.p3-hot-big-shaow {
  width: 160px;
  height: 160px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 80;
  position: absolute;
  top: 0px;
}
.p3-hot-small-shaow {
  width: 105px;
  height: 105px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 80;
  position: absolute;
  top: 0px;
}
.part4 {
  width: 1000px;
  height: 168px;
  /* border: 1px solid black; */
  margin: 0 auto;
  margin-top: 30px;
}
.link-table {
  margin-top: 20px;
}
.link-table tr td {
  width: 125px;
  height: 40px;
}
.link-table tr td a {
  color: #555555;
  font-size: 14px;
}
.link-table tr td a:hover {
  color: #009af3;
}
</style>

<style>
.cell {
  font-size: 13px !important;
}
.has-gutter {
  height: 0px !important;
  line-height: 0px !important;
}
.has-gutter .el-table_1_column_1 {
  margin: 0px !important;
  padding: 0px !important;
  height: 0px !important;
}
.el-table_1_column_1 .el-table_1_column_2 {
  padding: 0px !important;
}
.el-table__row {
  height: 34px !important;
  line-height: 34px !important;
  padding: 0px !important;
}
</style>
