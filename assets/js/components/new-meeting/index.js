import utilities from "../../utilities.js"
import store from '../../store.js'
import Allo from '../../classes/Allo.js'
export default {
    template: await utilities.getPage('/assets/js/components/new-meeting/index.html'),
    data() {
        return {
            store,
            utilities,
            nextMeeting: {
                name: '',
                email: '',
                title: '',
                date: '',
                time: ''
            },
            selectedDate: {
                day: '',
                date: ''
            },
            spinner: false
        }
    },
    computed: {
        isValidForm() {
            if (this.nextMeeting.title.trim() != '') {
                if (this.nextMeeting.name.trim() != '') {
                    if (this.nextMeeting.email.trim() != '') {
                        if (this.selectedDate.date.trim() != '') {
                            if (this.nextMeeting.time.trim() != '') {
                                return {
                                    status: true,
                                    message: 'valid'
                                }
                            } else return {
                                status: false,
                                message: 'Time is missing'
                            }
                        } else return {
                            status: false,
                            message: 'Date is missing'
                        }
                    } else return {
                        status: false,
                        message: 'Email is missing'
                    }
                } else return {
                    status: false,
                    message: 'Name is missing'
                }
            } else return {
                status: false,
                message: 'Title is missing'
            }

        },
        getAvailableDays() {
            var arr = []
            for (let node of this.store.schedule) {
                if (!arr.toString().includes(node.day)) {
                    arr.push(node.day)
                }
            }
            return arr
        },
        nextDays() {
            var ranges = utilities.getUpcomingDays(7)
            var days = []
            for (let range of ranges) {
                for (let node of this.getAvailableDays) {
                    if (range.day == node) days.push(range)
                }
            }
            return days
        }
    },
    methods: {
        getNextTime() {
            var selectedSchedule = this.store.schedule.filter(node => node.day == this.selectedDate.day)[0]
            if (selectedSchedule) {
                return utilities.getTimeRanges(selectedSchedule.timerange).flat()
            }
        },
        newMeeting() {
            if (this.isValidForm.status) {
                if (confirm('Are you sure you want to proceed ?')) {
                    this.spinner = true
                    this.nextMeeting.date = this.selectedDate.date
                    fetch(this.store.api + '?newMeeting', {
                        method: "POST",
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        body: JSON.stringify({
                            newMeeting: this.nextMeeting
                        })
                    }).then(res => res.json()).then(res => {
                        console.log(res);
                        this.spinner = false
                        this.nextMeeting = {
                            name: '',
                            email: '',
                            title: '',
                            date: '',
                            time: ''
                        }
                        this.selectedDate = {
                            day: '',
                            date: ''
                        }

                        bootstrap.Offcanvas.getInstance(document.getElementById('meetingSidebar')).hide()
                        if (res.status) {
                            new Allo('Meshe L7al ✅', res.message).run()
                        } else {
                            new Allo('Ma Meshe L7al ❌', res.message).run()
                        }
                    }).catch(err => {
                        console.log(err);
                        this.spinner = false
                        new Allo('Weak Network ❌🛜', err).run()
                    })
                }
            }
        },
    }
}