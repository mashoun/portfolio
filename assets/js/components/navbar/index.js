import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/navbar/index.html'),
    data() {
        return {
            store,
            utilities,
            location
        }
    },
    computed: {
        socialMedia() {
            return [

                {
                    icon: 'bi bi-youtube',
                    url: this.store.contact.youtube
                },
                {
                    icon: 'bi bi-whatsapp',
                    url: this.store.contact.whatsapp
                },
                {
                    icon: 'bi bi-linkedin',
                    url: this.store.contact.linkedIn
                },
                {
                    icon: 'bi bi-github',
                    url: this.store.contact.github
                },
                {
                    icon: 'bi bi-envelope',
                    url: 'mailto:' + this.store.contact.email
                },
                // {
                //     icon: 'bi bi-',
                //     url: ''
                // },
            ]
        }
    },
}