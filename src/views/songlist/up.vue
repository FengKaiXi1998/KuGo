<template>
    <div>
        <!-- new -->
        <div class="item-container" v-for="item of showList">
          <img :src="item.img" alt="">
          <span class="item-title">{{item.title}}</span>
          <span class="item-author">制作人:{{item.author}}</span>
          <div class="item-intro">
            <div>{{item.intro}}</div>
            <div>{{item.intro2}}</div>
          </div>
          <div>
            <button type="primary" class="item-btn"><i class="el-icon-caret-right"></i> 播放全部</button>&nbsp;&nbsp;
            <button type="primary" class="item-btn"><i class="el-icon-share"></i> 分享</button>
          </div>
        </div>
        <div class="empty"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showList: [
        {
          img: require("../../assets/imgs/songlist/demo2.jpg"),
          title: "你是否牵着手,握住昨日如风",
          author: "Aiden",
          intro:
            "夜晚轻轻闭上困意的眼睛，一次又一次的失眠。太美太美的画面和勾画出的天外山，在脑海里一座座，一条条，一层层跌",
          intro2:
            "宕起伏。梦里的颜色都是灰色的，却唯有在一个人的记忆里五彩缤纷。不愿放下，自己拿着画笔，涂..."
        },
        {
          img: require("../../assets/imgs/songlist/demo4.jpg"),
          title: "享受极致特效！开车时听的欧美热曲",
          author: "Acg-Xyi",
          intro:
            "第52期： 封面来源：堆糖 by：Acg-Xyi 这一期给大家分享欧美电音歌曲 希望大家喜欢~ ps：我想有很多人喜欢欧美",
          intro2:
            "电音 尤其是带歌曲的 我也是 其实有时候你可以听着这些歌曲，就有种心动的感觉，因为它有种莫名的..."
        },
        {
          img: require("../../assets/imgs/songlist/demo6.jpg"),
          title: "触动泪腺：50首超级虐心韩剧OST",
          author: "风少",
          intro:
            "重温经典韩剧OST，一部部经典的韩剧历历在目，唯美的场景，一首首凄美的恋曲，让人记忆深刻。时间就像一台留声",
          intro2: "机，刻录着这些触动心弦的声音，此刻打开倾听，依然回味无穷。"
        },
        {
          img: require("../../assets/imgs/songlist/demo1.jpg"),
          title: "你是否牵着手,握住昨日如风",
          author: "Aiden",
          intro:
            "夜晚轻轻闭上困意的眼睛，一次又一次的失眠。太美太美的画面和勾画出的天外山，在脑海里一座座，一条条，一层层跌",
          intro2:
            "宕起伏。梦里的颜色都是灰色的，却唯有在一个人的记忆里五彩缤纷。不愿放下，自己拿着画笔，涂..."
        },
        {
          img: require("../../assets/imgs/songlist/demo4.jpg"),
          title: "享受极致特效！开车时听的欧美热曲",
          author: "Acg-Xyi",
          intro:
            "第52期： 封面来源：堆糖 by：Acg-Xyi 这一期给大家分享欧美电音歌曲 希望大家喜欢~ ps：我想有很多人喜欢欧美",
          intro2:
            "电音 尤其是带歌曲的 我也是 其实有时候你可以听着这些歌曲，就有种心动的感觉，因为它有种莫名的..."
        },
        {
          img: require("../../assets/imgs/songlist/demo6.jpg"),
          title: "触动泪腺：50首超级虐心韩剧OST",
          author: "风少",
          intro:
            "重温经典韩剧OST，一部部经典的韩剧历历在目，唯美的场景，一首首凄美的恋曲，让人记忆深刻。时间就像一台留声",
          intro2: "机，刻录着这些触动心弦的声音，此刻打开倾听，依然回味无穷。"
        },
        {
          img: require("../../assets/imgs/songlist/demo1.jpg"),
          title: "你是否牵着手,握住昨日如风",
          author: "Aiden",
          intro:
            "夜晚轻轻闭上困意的眼睛，一次又一次的失眠。太美太美的画面和勾画出的天外山，在脑海里一座座，一条条，一层层跌",
          intro2:
            "宕起伏。梦里的颜色都是灰色的，却唯有在一个人的记忆里五彩缤纷。不愿放下，自己拿着画笔，涂..."
        },
        {
          img: require("../../assets/imgs/songlist/demo2.jpg"),
          title: "享受极致特效！开车时听的欧美热曲",
          author: "Acg-Xyi",
          intro:
            "第52期： 封面来源：堆糖 by：Acg-Xyi 这一期给大家分享欧美电音歌曲 希望大家喜欢~ ps：我想有很多人喜欢欧美",
          intro2:
            "电音 尤其是带歌曲的 我也是 其实有时候你可以听着这些歌曲，就有种心动的感觉，因为它有种莫名的..."
        },
        {
          img: require("../../assets/imgs/songlist/demo3.jpg"),
          title: "触动泪腺：50首超级虐心韩剧OST",
          author: "风少",
          intro:
            "重温经典韩剧OST，一部部经典的韩剧历历在目，唯美的场景，一首首凄美的恋曲，让人记忆深刻。时间就像一台留声",
          intro2: "机，刻录着这些触动心弦的声音，此刻打开倾听，依然回味无穷。"
        },
        {
          img: require("../../assets/imgs/songlist/demo1.jpg"),
          title: "你是否牵着手,握住昨日如风",
          author: "Aiden",
          intro:
            "夜晚轻轻闭上困意的眼睛，一次又一次的失眠。太美太美的画面和勾画出的天外山，在脑海里一座座，一条条，一层层跌",
          intro2:
            "宕起伏。梦里的颜色都是灰色的，却唯有在一个人的记忆里五彩缤纷。不愿放下，自己拿着画笔，涂..."
        },
        {
          img: require("../../assets/imgs/songlist/demo2.jpg"),
          title: "享受极致特效！开车时听的欧美热曲",
          author: "Acg-Xyi",
          intro:
            "第52期： 封面来源：堆糖 by：Acg-Xyi 这一期给大家分享欧美电音歌曲 希望大家喜欢~ ps：我想有很多人喜欢欧美",
          intro2:
            "电音 尤其是带歌曲的 我也是 其实有时候你可以听着这些歌曲，就有种心动的感觉，因为它有种莫名的..."
        },
        {
          img: require("../../assets/imgs/songlist/demo3.jpg"),
          title: "触动泪腺：50首超级虐心韩剧OST",
          author: "风少",
          intro:
            "重温经典韩剧OST，一部部经典的韩剧历历在目，唯美的场景，一首首凄美的恋曲，让人记忆深刻。时间就像一台留声",
          intro2: "机，刻录着这些触动心弦的声音，此刻打开倾听，依然回味无穷。"
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
.item-container {
  width: 750px;
  height: 124px;
  border-bottom: 1px solid #dcdcdc;
  margin-left: 20px;
  margin-top: 20px;
}
.item-container img {
  width: 100px;
  height: 100px;
  float: left;
  margin-right: 10px;
  border: 1px solid #dfdfdf;
  padding: 1px;
  box-shadow: 0px 2px 1px 1px #a1a1a1;
  cursor: pointer;
  box-sizing: border-box;
}
.item-container img:hover {
  border: 2px solid #3591e7;
  blackground: #6290ad;
  padding: 0px;
}
.item-author {
  float: right;
  font-size: 13px;
}
.item-intro {
  font-size: 12px;
  color: #999;
}
.item-intro div {
  margin-top: 10px;
}
.item-btn {
  /* float: left; */
  width: 105px;
  height: 28px;
  line-height: 28px;
  background: #158fe1;
  color: white;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
}
.item-title {
  font-size: 14px;
}
.item-title:hover {
  cursor: pointer;
  color: #158fe1;
}
.empty {
  height: 50px;
}
</style>