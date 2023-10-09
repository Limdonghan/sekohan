/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Composables
import { createApp } from 'vue'
import App from './App.vue'
import "vuetify/dist/vuetify.min.css";

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

createApp(App).use(router).mount('#app');
new Vue({
    vuetify: new Vuetify(opts),
    render: (h) => h(App)
  }).$mount("#app");
  
  const opts = {
    icons: {
      iconfont: "mdi"
    }
  };
  Vue.use(Vuetify);
  
  new Vue({
    vuetify: new Vuetify(opts),
    render: (h) => h(App)
  }).$mount("#app");
  