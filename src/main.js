import Vue from 'vue';
import App from './App.vue';

import Header from './components/header-footer/Header.vue';
Vue.component('compHeader',Header);
import Footer from './components/header-footer/Footer.vue';
Vue.component('compFooter',Footer);


export const bus = new Vue();
new Vue({
    el:'#app',
    data:{
    },
    render:h=>h(App),
})

