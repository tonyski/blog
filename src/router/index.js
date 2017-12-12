import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = resolve => require(['../components/Main'], resolve)
const Post = resolve => require(['../components/Post'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/:slug',
      name: 'Post',
      component: Post
    }
  ]
})
