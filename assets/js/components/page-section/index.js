import utilities from "../../utilities.js"
import store from '../../store.js'
import Page from '../../classes/Page.js'
export default {
    template: await utilities.getPage('/assets/js/components/page-section/index.html'),
    data() {
        return {
            store,
            utilities,
            swiperBreakpoints: {
                576: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }
        }
    },
    props: ['title', 'path'],
    computed:{
        pages(){
            
            if(this.path == '/blogs/'){
                return this.store.pages.filter(page => page.folder.includes('blogs')).slice(0,7)
            }

            if(this.path == '/projects/'){
                return this.store.pages.filter(page => page.folder.includes('projects')).slice(0,7)
            }

            if(this.path == '/courses/'){
                return this.store.pages.filter(page => page.folder.includes('courses')).slice(0,7)
            }
            
        }
    }
}