import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/my-links/index.html'),
    data() {
        return {
            store,
            utilities
        }
    },
    computed: {
        getGroups() {
            var arr = []
            for (let link of this.store.links) {
                if (!arr.toString().includes(link.group)) {
                    arr.push(link.group)
                }
            }
            return arr
        },

    },
    methods:{
        
        getLinksByGroup(groupName) {
            return this.store.links.filter(node => node.group == groupName)
        }
    }
}