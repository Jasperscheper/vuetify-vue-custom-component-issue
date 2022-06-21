import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'
import vuetify from './plugins/vuetify'

import vueCustomElement from 'vue-custom-element';
Vue.use(vueCustomElement);

Vue.config.productionTip = false

HelloWorld.vuetify = vuetify;


Vue.customElement('hello-world', HelloWorld, {
  shadow: false,
})

// new Vue({
//   vuetify,
//   render: h => h(HelloWorld)
// }).$mount('#app')
