import { createApp } from 'vue'
// @ts-expect-error
import VueMdi from 'vue-mdijs'

import * as mdi from '@mdi/js'

import App from './App.vue'
import Router from './router'

import './globals.css'

VueMdi.add(mdi)
createApp(App).use(Router).use(VueMdi).mount('#app')