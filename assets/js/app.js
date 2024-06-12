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
                // new Allo('Weak Network ❌🛜', "Looks like you're offline. Please check your internet connection and try again.").run()
                // location.reload()
                this.store.networkError = true
            })
        }
    },
    mounted() {
        window.addEventListener('offline', () => {
            console.log('Weak network or offline.');
            // Display warning message, disable network-dependent features
            // new Allo('Weak Network ❌🛜', "Looks like you're offline. Please check your internet connection and try again.").run()
            this.store.networkError = true
        });
        
        window.addEventListener('online', () => {
            console.log('Network connection restored.');
            // Update UI or perform actions based on online status
            this.store.networkError = false
            location.reload()
        });

        this.store.loading = false
        this.getProfile()
    }
})

import networkError from './components/network-error/index.js'
app.component('network-error', networkError)

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