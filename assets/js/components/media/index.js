import utils from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utils.getPage('/assets/js/components/media/index.html'),
    data() {
        return {
            store,
            utils,
            slides: {
                index: 1,
                length: null
            }
        }
    },
    props: ['images', 'links'],
    computed: {
        getImages() {
            return this.images.split(',')
        },
    },
    mounted() {
        this.slides.length = this.getImages.length + this.getYoutubeIds().length
    },
    methods: {
        getYoutubeIds() {
            var links = this.links
            if (typeof (links) == 'string') links = links.split(',')

            return links.filter(node => node.includes('youtu')).map(node => {
                if (utils.getYoutubeId(node)) return utils.getYoutubeId(node)
                if (utils.getYoutubeLiveId(node)) return utils.getYoutubeLiveId(node)
                if (utils.getYoutubeIdShortenUrl(node)) return utils.getYoutubeIdShortenUrl(node)
                if (utils.getYoutubeShortsId(node)) return utils.getYoutubeShortsId(node)
            }).filter(node => node != undefined)
        },

        slideNext() {
            const swiperEl = document.querySelector('swiper-container');
            console.log(swiperEl.swiper);
            swiperEl.swiper.slideNext();
            this.slides.index = swiperEl.swiper.activeIndex + 1
        },
        slideBack() {
            const swiperEl = document.querySelector('swiper-container');
            console.log(swiperEl.swiper);
            swiperEl.swiper.slidePrev();
            this.slides.index = swiperEl.swiper.activeIndex + 1
        },
    }
}