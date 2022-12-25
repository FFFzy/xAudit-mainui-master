import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import i18n from "./i18n";

// 刷新的时候强制页面在最顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')