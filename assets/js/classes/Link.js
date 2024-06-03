export default class Link {
    constructor(payload = null) {
        var keys = [
            '_id',
            'timestamp',
            'status',
            'group',
            'title',
            'description',
            'url'
        ]
        for (let prop of keys) {
            this[prop] = payload ? payload[prop] : ''
        }
    }
}