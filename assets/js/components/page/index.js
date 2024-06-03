import utilities from "../../utilities.js"
import store from '../../store.js'
import Page from '../../classes/Page.js'
export default {
    template: await utilities.getPage('/assets/js/components/page/index.html'),
    data() {
        return {
            store,
            utilities,
        }
    },
    computed: {
        selectedPage() {
            return new Page(this.store.pages.filter(page => page.url.includes(location.pathname))[0])
        },
        suggestions(){
            return this.store.pages.slice(-8).reverse()
        }
    },
}