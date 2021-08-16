import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3da532a0 = () => interopDefault(import('..\\pages\\add-tutorial\\index.vue' /* webpackChunkName: "pages/add-tutorial/index" */))
const _9361498a = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0e628a3e = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _66f639a8 = () => interopDefault(import('..\\pages\\mod\\index.vue' /* webpackChunkName: "pages/mod/index" */))
const _5a890ebe = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _056827d2 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages/signup/index" */))
const _78abe416 = () => interopDefault(import('..\\pages\\tutorials\\index.vue' /* webpackChunkName: "pages/tutorials/index" */))
const _53756182 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
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
    path: "/admin",
    component: _9361498a,
    name: "admin"
  }, {
    path: "/login",
    component: _0e628a3e,
    name: "login"
  }, {
    path: "/mod",
    component: _66f639a8,
    name: "mod"
  }, {
    path: "/profile",
    component: _5a890ebe,
    name: "profile"
  }, {
    path: "/signup",
    component: _056827d2,
    name: "signup"
  }, {
    path: "/tutorials",
    component: _78abe416,
    name: "tutorials"
  }, {
    path: "/user",
    component: _53756182,
    name: "user"
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
