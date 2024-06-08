import './packages/bootstrap.min.js'
import './packages/day.min.js'
import './packages/relativetime.min.js'
import './packages/swiper.min.js'
import store from './store.js'
import utilities from './utilities.js'
import Page from './classes/Page.js'
import Link from './classes/Link.js'

const app = Vue.createApp({
    data() {
        return {
            utilities,
            store,
        }
    },
    methods: {
        getProfile() {
            this.store.spinner = true
            fetch(this.store.api + "?getProfile").then(res => res.json()).then(res => {
                console.log(res);
                if (res.status) {
                    this.store.spinner = false
                    this.store.pages = res.data.pages.map(page => new Page(page))
                    this.store.links = res.data.links.map(link => new Link(link))
                    this.store.contact = res.data.contact
                    
                }
            }).catch(err => {
                this.store.spinner = false
                console.log(err);
                location.reload()
            })
        }
    },
    mounted() {
        this.store.loading = false
        this.getProfile()
    }
})

import navbar from './components/navbar/index.js'
app.component('navbar', navbar)

import media from './components/media/index.js'
app.component('media', media)

import pagination from './components/pagination/index.js'
app.component('pagination', pagination)

import page from './components/page/index.js'
app.component('page', page)

import pageBlock from './components/page-block/index.js'
app.component('page-block', pageBlock)

import pageList from './components/page-list/index.js'
app.component('page-list', pageList)

import pageSection from './components/page-section/index.js'
app.component('page-section', pageSection)

import heroSection from './components/hero-section/index.js'
app.component('hero-section', heroSection)

import footerSection from './components/footer-section/index.js'
app.component('footer-section', footerSection)

import counterSection from './components/counter-section/index.js'
app.component('counter-section', counterSection)

app.mount('#app')