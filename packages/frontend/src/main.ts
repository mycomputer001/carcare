import { createApp } from 'vue'
// @ts-expect-error
import VueMdi from 'vue-mdijs'
import VueApexCharts from 'vue3-apexcharts'

import * as mdi from '@mdi/js'

import App from './App.vue'
import Router from './router'

import './globals.css'

const app = createApp(App)

VueMdi.add(mdi)
app.use(VueApexCharts)
app.use(Router)
app.use(VueMdi)
app.mount('#app')
