import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'css-pro-layout/dist/css/css-pro-layout.min.css';
import './styles/index.css'

import Loader from '@/components/util/Loader.vue'
import Vue3Transitions from 'vue3-transitions'

import { VueMasonryPlugin } from "vue-masonry";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import mitt from 'mitt'

const emitter = mitt()

library.add(fas)

config.autoAddCss = false

let app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('loader', Loader)

app.use(Vue3Transitions)

app.use(VueSweetalert2);

app.config.globalProperties.emitter = emitter
app.use(VueMasonryPlugin)

import i18n from './i18n'
let root = app.use(i18n).use(store).use(router).mount('#app')

