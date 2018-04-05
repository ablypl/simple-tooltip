const classes = 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-grey-light max-w-xs'

class Tooltip {

    constructor(content, el, position = 'top') {
        this.displayed = false

        return this.create()
            .setElement(el)
            .setContent(content)
            .render()
            .setPosition(position)
    }

    create() {
        this.tooltip = document.createElement('div')
        this.tooltip.className += classes

        return this
    }

    show() {
        this.tooltip.classList.remove('hidden')

        return this
    }

    hide() {
        this.tooltip.classList.add('hidden')

        return this
    }

    setElement(el) {
        this.element = el

        return this
    }

    setContent(content) {
        this.tooltip.innerHTML = content

        return this
    }

    setPosition(position) {
        let rect = this.element.getBoundingClientRect()

        let p = {
            top: rect.y - this.tooltip.offsetHeight + 'px',
            left: rect.x - (this.tooltip.offsetWidth - rect.width) / 2 + 'px'
        }

        if(position == 'bottom') {
            p = {
                top: rect.y + this.tooltip.offsetHeight + 'px',
                left: rect.x - (this.tooltip.offsetWidth - rect.width) / 2 + 'px'
            }
        }

        if(position == 'right') {
            p = {
                top: rect.y + this.tooltip.offsetHeight + 'px',
                left: rect.x - (this.tooltip.offsetWidth - rect.width) / 2 + 'px'
            }
        }

        Object.assign(this.tooltip.style, p);

        return this
    }

    render() {
        this.displayed = true
        
        document.body.appendChild(this.tooltip)

        return this
    }
}

export default Tooltip