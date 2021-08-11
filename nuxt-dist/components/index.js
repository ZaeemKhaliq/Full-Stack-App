import { wrapFunctional } from './utils'

export { default as AddTutorial } from '../..\\components\\AddTutorial.vue'
export { default as AllTutorials } from '../..\\components\\AllTutorials.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Home } from '../..\\components\\Home.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

export const LazyAddTutorial = import('../..\\components\\AddTutorial.vue' /* webpackChunkName: "components/add-tutorial" */).then(c => wrapFunctional(c.default || c))
export const LazyAllTutorials = import('../..\\components\\AllTutorials.vue' /* webpackChunkName: "components/all-tutorials" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHome = import('../..\\components\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
