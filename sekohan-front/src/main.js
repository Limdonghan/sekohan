/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Composables
import { createApp } from 'vue'

//import router from './router'
// Components
import App from './App.vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

createApp(App).use(router).mount('#app');