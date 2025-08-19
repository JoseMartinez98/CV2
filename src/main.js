import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import observeAnimate from './directives/observe.js'

const app = createApp(App)

app.directive("observe-animate", observeAnimate) 
app.mount('#app') 
