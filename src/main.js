import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import naive from 'naive-ui';
import '@/css/style.css';

const pinia = createPinia();

createApp(App).use(pinia).use(naive).use(router).mount('#app');
