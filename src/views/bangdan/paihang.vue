<template>
    <div>
        <!-- 标题栏 -->
        <el-row>
            <el-col :span="24" class="ph-head-container">
                <div v-if="!title" class="ph-big-title">酷狗飙升榜</div>
                <div v-if="title" class="ph-big-title">{{title}}</div>
                <div class="ph-date">2018-08-10更新</div>
                <button class="ph-btn"><i class="ph-playlogo"></i>&nbsp;&nbsp;<span class="ph-btn-text">播放全部</span></button>
            </el-col>
        </el-row>
        <!-- 内容栏 -->
        <!-- 全选 -->
        <el-row>
            <el-col :span="24">
                <!-- <input type="checkbox"> 全选 -->
                <el-checkbox v-model="checkAll">全选</el-checkbox>
            </el-col>
        </el-row>
        <!-- 单选/内容 -->
        <el-row>
            <el-col :span="24">
                <ul>
                    <li v-for="(item,i) of phlist" class="ph-li" @mouseover="item.show=true" @mouseout="item.show=false">
                        <el-checkbox class="lf ph-select" @change="selectedChange" v-model="item.selected"></el-checkbox>
                        <div class="lf ph-num">{{i+1}}</div>
                        <div class="lf ph-title">{{item.title}}</div>
                        <div class="rf ph-time">{{item.time}}</div>
                        <div class="share-logo rf logo" v-show="item.show"></div>
                        <div class="down-logo rf logo" v-show="item.show"></div>
                        <div class="play-logo rf logo" v-show="item.show"></div>
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
      checkAll: false,
      logoShow: false,
      changeCount: 0,
      phlist: [],
      quickTop: [
        {
          title: "TFBOYS-最好那年",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false, selected: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "TFBOYS-最好那年",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false, selected: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "TFBOYS-最好那年",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false, selected: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "TFBOYS-最好那年",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false, selected: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "TFBOYS-最好那年",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false, selected: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "TFBOYS-最好那年",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false, selected: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "TFBOYS-最好那年",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false, selected: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        { title: "冷漠-清风呀", time: "3:29", show: false },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "陆虎-雪落下的声音",
          time: "5:11",
          show: false,
          selected: false
        }
      ],
      Top500: [
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "王北车 - 陷阱", time: "3:29", show: false, selected: false },
        { title: "王北车 - 陷阱", time: "5:11", show: false, selected: false },
        { title: "王北车 - 陷阱", time: "3:50", show: false, selected: false },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:29",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:50",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:29",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:50",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:29",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:50",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:29",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:50",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:29",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:50",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:29",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "3:29",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        },
        {
          title: "小潘潘、小峰峰 - 学猫叫",
          time: "5:11",
          show: false,
          selected: false
        }
      ],
      hotTop: [
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false },
        {
          title: " 金南玲 - 逆流成河【我在锡林郭勒等你电视剧插曲】",
          time: "3:50",
          show: false,
          selected: false
        },
        { title: "冷漠 - 清风呀", time: "3:50", show: false, selected: false }
      ]
    };
  },
  props: ["title"],
  methods: {
    selectedChange(val) {
      if (val == true) {
        this.changeCount++;
      } else if (val == false) {
        this.changeCount--;
      }
    }
  },
  components: {},
  computed: {},
  watch: {
    title() {
      switch (this.title) {
        case "酷狗飙升榜":
          this.phlist = this.quickTop;
          break;
        case "酷狗TOP500":
          this.phlist = this.Top500;
          break;
        case "网络红歌榜":
          this.phlist = this.hotTop;
          break;
      }
    },
    changeCount() {
      if (this.changeCount == 24) {
        this.checkAll = true;
      }
      if (this.changeCount != 24) {
        this.checkAll = false;
      }
    },
    checkAll() {
      if (this.checkAll == true) {
        for (var p of this.phlist) {
          p.selected = true;
        }
        this.changeCount = 24;
      } else if (this.checkAll == false && this.changeCount == 24) {
        for (var p of this.phlist) {
          p.selected = false;
        }
        console.log(this.changeCount);
      }
    }
  },
  mounted() {
    this.phlist = this.quickTop;
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
.ph-head-container {
  height: 75px;
  line-height: 57px;
  border-bottom: 1px solid #cacaca;
}
.ph-big-title {
  float: left;
  font-size: 24px;
  /* font-weight: bold; */
}
.ph-date {
  color: #999;
  font-size: 14px;
  display: inline-block;
  margin-left: 20px;
}
.ph-btn {
  width: 112px;
  height: 36px;
  background: #158fe1;
  border-radius: 3px;
  border: 0px;
  cursor: pointer;
  float: right;
  margin-top: 10.5px;
}
.ph-playlogo {
  width: 9px;
  height: 16px;
  background: url("../../assets/imgs/bangdan/play_icon.png");
  background-repeat: no-repeat;
  display: inline-block;
}
.ph-btn-text {
  color: white;
}
.ph-li {
  width: 100%;
  height: 55px;
  line-height: 55px;
  cursor: pointer;
  border-bottom: 1px solid #f2f2f2;
}
.ph-li:hover {
  background: #f5f8fb;
}
.ph-li:hover .ph-title,
.ph-li:hover .ph-time {
  color: #158fe1;
}
.ph-select {
  padding-right: 10px;
  margin-top: -2px;
}
.ph-num {
  font-size: 18px;
  font-family: Tahoma;
  color: #999;
  font-weight: 400;
  padding-right: 20px;
}
.ph-li:nth-child(1) div.ph-num,
.ph-li:nth-child(2) div.ph-num,
.ph-li:nth-child(3) div.ph-num {
  color: #fe2c62;
}
.ph-title {
  color: #333;
  font-size: 14px;
}
.ph-time {
  color: #999;
  font-size: 14px;
  display: inline-block;
}
.logo {
  margin-right: 15px;
}
.play-logo {
  background: url("../../assets/imgs/bangdan/icon_splice.png") no-repeat;
  width: 12px;
  height: 14px;
  display: inline-block;
  margin-top: 21px;
}
.down-logo {
  background: url("../../assets/imgs/bangdan/icon_splice.png") no-repeat;
  background-position: -90px 0;
  width: 16px;
  height: 13px;
  margin-top: 21px;
  display: inline-block;
}
.share-logo {
  background: url("../../assets/imgs/bangdan/icon_splice.png") no-repeat;
  width: 16px;
  height: 14px;
  background-position: -298px 0;
  margin-top: 21px;
  display: inline-block;
}
</style>