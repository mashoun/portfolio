import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/hero-section/index.html'),
    data() {
        return {
            store,
            utilities
        }
    }
}