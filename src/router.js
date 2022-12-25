import {createRouter, createWebHashHistory} from "vue-router";

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Search from "./views/Search.vue";
import Audit from "./views/Audit.vue";
import Paper from "./views/Paper.vue";
import Labelcloud from "./views/Labelcloud.vue";
import Article from "./views/Article.vue";
import Download from "./views/Download.vue";

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/search', component: Search},
    {path: '/audit', component: Audit},
    {path: '/paper/:id', component: Paper},
    {path: '/article/:id', component: Article},
    {path: '/download/:cid', component: Download},
    {path: '/labelcloud', component: Labelcloud},

    // {path: '/dataset/PonziContractDataset', redirect: '/audit'},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),     // hash模式
    routes, // `routes: routes` 的缩写
})

export default router
