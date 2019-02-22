// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Components
import App from './App'
import Home from './views/Home'
import Page from './views/Page'
import Blog from './views/Blog'
import BlogDetail from './views/BlogDetail'

// Assets
import './assets/styles/skeleton.css'
import './assets/styles/normalize.css'
import './assets/styles/gyka.css'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:8000/wp-json/'

Vue.config.productionTip = false

Vue.filter('stripHtml', function (value) {
  var div = document.createElement('div')
  div.innerHTML = value
  var text = div.textContent || div.innerText || ''
  return text
})

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/capabilities', name: 'capabilities', component: Page, props: { slug: 'capabilities' } },
  { path: '/about', name: 'about', component: Page, props: { slug: 'about' } },
  { path: '/blog', name: 'blog', component: Blog },
  { path: '/blog/:id', name: 'blogDetail', component: BlogDetail },
  { path: '/contact', name: 'contact', component: Page, props: { slug: 'contact' } }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
