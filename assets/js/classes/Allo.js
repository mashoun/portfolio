export default class Allo {
    constructor(title = '', message = '') {
        this.id = '5788316c-958f-4923-9baf-760ca3cbfa8f'
        this.title = title
        this.message = message
    }

    run() {

        var section = document.createElement('section')
        section.classList.add('allo-section')
        section.id = this.id

        var aside = document.createElement('aside')
        aside.classList.add('allo-aside')
        aside.classList.add('scale-up-center')

        var title = document.createElement('h5')
        title.classList.add('allo-title')
        title.innerText = this.title

        var message = document.createElement('p')
        message.classList.add('allo-message')
        message.innerText = this.message

        var okButton = document.createElement('button')
        okButton.classList.add('allo-button')
        okButton.innerText = 'OK'

        okButton.addEventListener('click', e => {
            document.getElementById(this.id).remove()
        })

        section.addEventListener('click', e => {
            if (e.target.className == 'allo-section') {
                document.getElementById(this.id).remove()
            }
        })

        aside.appendChild(title)
        aside.appendChild(message)
        aside.appendChild(okButton)
        section.appendChild(aside)
        document.body.appendChild(section)
    }



}