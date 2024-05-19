export default class Page {
    constructor(payload = null) {
        var keys = [
            '_id',
            'timestamp',
            'status',
            'folder',
            'media',
            'mediaLinks',
            'title',
            'subtitle',
            'badge',
            'description',
            'keywords',
            'url'
        ]
        for (let prop of keys) {
            this[prop] = payload ? payload[prop] : ''
        }
    }
}