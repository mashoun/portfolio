import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/page-block/index.html'),
    data() {
        return {
            store,
            utilities
        }
    },
    props:['data'],
    computed:{
        images(){
            return this.data.media.split(',')
        },
        keywords(){
            var arr = this.data.keywords.slice(0,150).split(',')
            return arr.slice(0,arr.length - 1).map(tag => tag.trim().replaceAll(' ','_'))
        }
    }
}