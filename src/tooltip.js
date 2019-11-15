const classes = 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-gray-400 max-w-xs';
const spacing = 5;

class Tooltip {
    /**
     *
     * @param content
     * @param el
     * @param position
     *
     * @returns Tooltip
     */
    constructor(content, el, position = 'top') {
        this.displayed = false
        this.isVisible = false

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
        this.isVisible = true

        return this
    }

    hide() {
        this.tooltip.classList.add('hidden')
        this.isVisible = false

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

        let baseTop = -(document.body.getBoundingClientRect().top)

        let p = {
            top: baseTop + rect.y - this.tooltip.offsetHeight - spacing + 'px',
            left: rect.x - (this.tooltip.offsetWidth - rect.width) / 2 + 'px'
        }

        if(position == 'bottom') {
            p = {
                top: baseTop + rect.y + rect.height + spacing + 'px',
                left: rect.x - (this.tooltip.offsetWidth - rect.width) / 2 + 'px'
            }
        }

        if(position == 'left') {
            p = {
                top: baseTop + rect.y + (rect.height - this.tooltip.offsetHeight)/2 + 'px',
                left: rect.x - this.tooltip.offsetWidth - spacing + 'px'
            }
        }

        if(position == 'right') {
            p = {
                top: baseTop + rect.y + (rect.height - this.tooltip.offsetHeight)/2 + 'px',
                left: rect.x + rect.width + spacing + 'px'
            }
        }

        Object.assign(this.tooltip.style, p);

        return this
    }

    render() {
        document.body.appendChild(this.tooltip)
        this.displayed = true

        return this
    }
}

export default Tooltip
