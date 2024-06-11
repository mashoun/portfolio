export default class Schedule {
    constructor(payload = null) {
        var keys = [
            '_id',
            'timestamp',
            'status',
            'day',
            'timerange',
            'index',
        ]
        for (let prop of keys) {
            this[prop] = payload ? payload[prop] : ''
        }
    }
}