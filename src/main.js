import Vue from 'vue';
import App from './App.vue';

import Header from './components/Header.vue';
Vue.component('app-header',Header);
import Footer from './components/Footer.vue';
Vue.component('app-footer',Footer);

export const bus = new Vue();
new Vue({
    el:'#app',
    data:{
    },
    render:h=>h(App),
})

