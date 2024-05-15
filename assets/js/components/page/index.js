import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/assets/js/components/page/index.html'),
    data() {
        return {
            store,
            utilities,
            links:[
                {
                    title:'lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit.',
                    folder:'projects',
                    url:''
                },
                {
                    title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    folder:'projects',
                    url:''
                },
                {
                    title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    folder:'courses',
                    url:''
                },
                {
                    title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    folder:'courses',
                    url:''
                },
                {
                    title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    folder:'blogs',
                    url:''
                },
            ]
        }
    },
    
}