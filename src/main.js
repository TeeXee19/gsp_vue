import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueCarousel from 'vue-carousel';
import '@/assets/css/external.css'
import '@/assets/css/custom.css'
import '@/assets/css/style.css' 
import '@/assets/css/temp.css' 
import '@/assets/revolution/css/settings.css' 
import '@/assets/revolution/css/layers.css'
import '@/assets/revolution/css/navigation.css'

import '@/assets/js/jquery-3.3.1.min.js'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    VueCarousel,
    render: h => h(App)
}).$mount('#app')