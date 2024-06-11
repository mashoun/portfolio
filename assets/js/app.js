import './packages/bootstrap.min.js'
import './packages/day.min.js'
import './packages/relativetime.min.js'
import './packages/swiper.min.js'
import store from './store.js'
import utils from './utilities.js'
import Page from './classes/Page.js'
import Link from './classes/Link.js'
import Schedule from './classes/Schedule.js'
import Allo from './classes/Allo.js'

const app = Vue.createApp({
    data() {
        return {
            utils,
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
                    this.store.pages = res.data.pages.map(node => new Page(node))
                    this.store.links = res.data.links.map(node => new Link(node))
                    this.store.schedule = res.data.meetingHours.data.map(node => new Schedule(node))
                    this.store.contact = res.data.contact

                }
            }).catch(err => {
                this.store.spinner = false
                console.log(err);
                new Allo('Weak Network ❌🛜', err).run()
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

import myLinks from './components/my-links/index.js'
app.component('my-links', myLinks)

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

import newMeeting from './components/new-meeting/index.js'
app.component('new-meeting', newMeeting)

app.mount('#app')