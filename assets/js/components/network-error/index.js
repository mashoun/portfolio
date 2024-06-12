import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/network-error/index.html'),
    data() {
        return {
            store,
            utilities
        }
    }
}