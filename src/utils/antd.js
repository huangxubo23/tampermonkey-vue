import { Button, Tag } from 'ant-design-vue'

const Antd = {
  install: function (Vue) {
    Vue.component('a-button', Button)
    Vue.component('a-tag', Tag)
  }
}

export default Antd