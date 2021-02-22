import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css'; // 全局引入样式
import "./utils/rem"

createApp(App)
.use(router)
.use(store)
.use(Vant)
.mount('#app')
