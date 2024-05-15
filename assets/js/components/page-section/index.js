import utilities from "../../utilities.js"
import store from '../../store.js'
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
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }
        }
    },
    props: ['title', 'to']
}