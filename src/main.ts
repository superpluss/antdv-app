import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

import DefaultLayout from '@/layouts/Default.vue'
import DashboardLayout from '@/layouts/Dashboard.vue'
import DashboardRTLLayout from '@/layouts/DashboardRTL.vue'
import '@/scss/app.scss';

import router from './router'
const app = createApp(App);

// Adding template layouts to the vue components.
app.component("layout-default", DefaultLayout);
app.component("layout-dashboard", DashboardLayout);
app.component("layout-dashboard-rtl", DashboardRTLLayout);


app.use(router).use(Antd).mount("#app");