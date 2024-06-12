import utilities from "../../utilities.js"
import store from '../../store.js'
import Page from '../../classes/Page.js'
import Allo from '../../classes/Allo.js'
export default {
    template: await utilities.getPage('/assets/js/components/page/index.html'),
    data() {
        return {
            store,
            utilities,
            darkMode: false
        }
    },
    computed: {
        selectedPage() {
            return new Page(this.store.pages.filter(page => page.url.includes(location.pathname))[0])
        },
        suggestions() {
            return this.store.pages.slice(-8).reverse()
        }
    },
    methods: {
        switchToDarkMode() {
            this.darkMode = !this.darkMode
            var article = document.querySelector('article')
            // article.style.backgroundColor = `#0d1b2a`
            article.style.filter = this.darkMode ? 'invert(1)' : 'invert(0)'
        },
        comingsoon(){
            new Allo('Thanks for your feedback!',"Likes, comments & translations are coming soon! Share this page to show your love in the meantime!").run()
        }
    }
}