import './packages/bootstrap.min.js'
import './packages/day.min.js'
import './packages/relativetime.min.js'
import './packages/swiper.min.js'
import store from './store.js'
import utilities from './utilities.js'

const app = Vue.createApp({
    data() {
        return {
            utilities,
            store
        }
    },
})

import navbar from './components/navbar/index.js'
app.component('navbar', navbar)

import pagination from './components/pagination/index.js'
app.component('pagination', pagination)

import page from './components/page/index.js'
app.component('page', page)

import pageSection from './components/page-section/index.js'
app.component('page-section', pageSection)

import heroSection from './components/hero-section/index.js'
app.component('hero-section', heroSection)

import footerSection from './components/footer-section/index.js'
app.component('footer-section', footerSection)

import counterSection from './components/counter-section/index.js'
app.component('counter-section', counterSection)

app.mount('#app')