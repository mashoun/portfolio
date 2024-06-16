import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/hashtag/index.html'),
    data() {
        return {
            store,
            utilities
        }
    }
}