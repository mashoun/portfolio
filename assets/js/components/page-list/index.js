import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/page-list/index.html'),
    data() {
        return {
            store,
            utilities,
            searchInput: ''
        }
    },
    props: ['path'],
    computed:{
        pages(){
            
            if(this.path == '/blogs/'){
                return this.store.pages.filter(page => page.folder.includes('blogs'))
            }

            if(this.path == '/projects/'){
                return this.store.pages.filter(page => page.folder.includes('projects'))
            }

            if(this.path == '/courses/'){
                return this.store.pages.filter(page => page.folder.includes('courses'))
            }
            
        },
        filteredPages(){
            return this.pages.filter( page => page.title.toLowerCase().includes(this.searchInput.toLowerCase()))
        }
    }

}