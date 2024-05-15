import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/footer-section/index.html'),
    data() {
        return {
            store,
            utilities,
            links:[
                {
                    text:'Home Page',
                    icon:'link',
                    url:'/'
                },
                {
                    text:'My Projects',
                    icon:'link',
                    url:'/'
                },
                {
                    text:'My Courses',
                    icon:'school',
                    url:'/'
                },
                {
                    text:'Collaborations & Events',
                    icon:'event_upcoming',
                    url:'/'
                },
                {
                    text:'My Blogs',
                    icon:'link',
                    url:'/'
                },
                {
                    text:'My Links',
                    icon:'link',
                    url:'/'
                },
                {
                    text:'Terms Of Service',
                    icon:'description',
                    url:'/'
                },
                {
                    text:'Privacy Policy',
                    icon:'policy',
                    url:'/'
                },
                {
                    text:'Send Anonymous Message',
                    icon:'send',
                    url:'/'
                },
                {
                    text:'Schedule New Meeting',
                    icon:'video_call',
                    url:'/'
                },
                {
                    text:'Subscribe to my news letter',
                    icon:'notifications',
                    url:'/'
                },
                // {
                //     text:'',
                //     icon:'link',
                //     url:'/'
                // },
            ]
        }
    }
}