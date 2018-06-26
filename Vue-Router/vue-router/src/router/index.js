import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import ProductList from '@/views/ProductList'
import Product from '@/views/Product'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/product/:id',
      component: Product,
      props: route => ({id: Number(route.params.id)})
      // パラメータをpropsとしてコンポーネントに渡す
    }
  ]
})
