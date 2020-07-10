import DefaultLayout from '~/layouts/DefaultLayout.vue'

import '@/sass/styles.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.component('DefaultLayout', DefaultLayout)
}
