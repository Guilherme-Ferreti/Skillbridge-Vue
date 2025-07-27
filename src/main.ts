import 'swiper/css';
import './assets/scss/app.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { register } from 'swiper/element/bundle';
import App from './App.vue';
import router from './router';

register();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
