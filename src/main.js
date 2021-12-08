loadStyle('https://unpkg.com/ant-design-vue@3.0.0-alpha.14/dist/antd.css')

import App from './app.vue'
import { isDev } from './config'
import { loadStyle } from './utils'
import Antd from '@/utils/antd'
import './styles/global.scss'


const id = `app_vue_${Date.now()}`
const root = document.createElement('div')
root.id = id
document.body.appendChild(root)

if (isDev) {
  const Vue = require('vue')
  const app = Vue.createApp(App)
  // const Antd = require('ant-design-vue');
  // app.use(Antd)
  app.use(Antd)
  app.mount(`#${id}`)
} else {
  const app = Vue.createApp(App)
  // const Antd = require('ant-design-vue');
  // app.use(Antd)
  app.use(Antd)
  app.mount(`#${id}`)
}