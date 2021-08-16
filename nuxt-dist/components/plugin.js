import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AddTutorial: () => import('../..\\components\\AddTutorial.vue' /* webpackChunkName: "components/add-tutorial" */).then(c => wrapFunctional(c.default || c)),
  AllTutorials: () => import('../..\\components\\AllTutorials.vue' /* webpackChunkName: "components/all-tutorials" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Home: () => import('../..\\components\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c)),
  Login: () => import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c)),
  Profile: () => import('../..\\components\\Profile.vue' /* webpackChunkName: "components/profile" */).then(c => wrapFunctional(c.default || c)),
  Signup: () => import('../..\\components\\Signup.vue' /* webpackChunkName: "components/signup" */).then(c => wrapFunctional(c.default || c)),
  Tutorial: () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
