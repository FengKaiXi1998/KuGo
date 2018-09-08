import Vue from "vue";
import Router from "vue-router";
import Index from "./components/index";
import Main from "./views/index/main";
import Bangdan from "./views/index/bangdan";
import DownloadApp from "./views/index/downloadApp";
import Huayu from "./views/main/huayu";
import Oumei from "./views/main/oumei";
import Hanguo from "./views/main/hanguo";
import Riben from "./views/main/riben";
import PaiHang from "./views/bangdan/paihang";
import Audio from "./views/index/audio";
import MV from "./views/index/MV";
import SongList from "./views/index/songlist";
import Singer from "./views/index/singer";
import NotFound from "./components/404";
import Collection from "./views/songlist/collection";
import New from "./views/songlist/new";
import TuiJian from "./views/songlist/tuijian";
import Up from "./views/songlist/up";
import Register from "./components/register";
import UserMain from "./views/index/userMain";
import SongDetail from "./views/index/songDetail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "Index"
    },
    {
      path: "/index",
      component: Index,
      children: [
        { path: "/index", redirect: "Main" },
        {
          path: "/index/main",
          component: Main,
          children: [
            { path: "/index/main", component: Huayu },
            { path: "/index/main/huayu", component: Huayu },
            { path: "/index/main/oumei", component: Oumei },
            { path: "/index/main/hanguo", component: Hanguo },
            { path: "/index/main/riben", component: Riben }
          ]
        },
        {
          path: "/index/bangdan",
          component: Bangdan,
          children: [
            { path: "/index/bangdan", component: PaiHang },
            { path: "/index/bangdan/paihang", component: PaiHang }
          ]
        },
        { path: "/index/downloadapp", component: DownloadApp },
        { path: "/index/audio", component: Audio },
        { path: "/index/MV", component: MV },
        {
          path: "/index/songlist",
          component: SongList,
          children: [
            { path: "/index/songlist", component: Collection },
            { path: "/index/songlist/collection", component: Collection },
            { path: "/index/songlist/new", component: New },
            { path: "/index/songlist/tuijian", component: TuiJian },
            { path: "/index/songlist/up", component: Up }
          ]
        },
        { path: "/index/singer", component: Singer },
        { path: "/index/userMain", component: UserMain },
        { path: "/index/songDetail", component: SongDetail }
      ]
    },
    { path: "/register", component: Register },
    { path: "/*", component: NotFound }
  ]
});
