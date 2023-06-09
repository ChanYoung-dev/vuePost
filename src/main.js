import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import persons from './plugins/person';
import globalComponents from '@/plugins/global-components';
import globalDirectives from './plugins/global-directives';
import focus from '@/directives/focus';
import dayjs from './plugins/dayjs';
import { createPinia } from 'pinia';

const app = createApp(App);
app.directive('foucs', focus);
app.use(dayjs);
app.use(globalDirectives);
app.use(globalComponents);
app.use(funcPlugins);
app.use(objPlugins, { name: '짐코딩' });
app.use(persons, { name: '홍길동' });
app.use(router);
app.use(createPinia());
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

console.log('MODE: ', import.meta.env.MODE);
console.log('BASE_URL: ', import.meta.env.BASE_URL);
console.log('PROD: ', import.meta.env.PROD);
console.log('DEV: ', import.meta.env.DEV);
console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);
