import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3da532a0 = () => interopDefault(import('..\\pages\\add-tutorial\\index.vue' /* webpackChunkName: "pages/add-tutorial/index" */))
const _78abe416 = () => interopDefault(import('..\\pages\\tutorials\\index.vue' /* webpackChunkName: "pages/tutorials/index" */))
const _6efc9f76 = () => interopDefault(import('..\\pages\\tutorials\\_id\\index.vue' /* webpackChunkName: "pages/tutorials/_id/index" */))
const _507a592c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/add-tutorial",
    component: _3da532a0,
    name: "add-tutorial"
  }, {
    path: "/tutorials",
    component: _78abe416,
    name: "tutorials"
  }, {
    path: "/tutorials/:id",
    component: _6efc9f76,
    name: "tutorials-id"
  }, {
    path: "/",
    component: _507a592c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
