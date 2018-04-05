import Tooltip from './src/tooltip';

export default {
    /**
     * Register directive
     * @param  {[type]} Vue
     * @param  {[type]} options
     * @return {[type]}         [description]
     */
    install(Vue, options) {
        Vue.directive('tooltip', {
            bind(el, binding, vnode) {
                let tooltip = {}
                let position = binding.arg || 'top'
                let content = binding.value

                if (binding.modifiers.prevent) {
                    setTimeout(() => {
                        return new Tooltip(content, el, position).show()
                    }, 100);
                }

                if (binding.modifiers.click) {
                    return el.addEventListener('click', () => {
                        if (tooltip.displayed && !tooltip.isVisible) {
                            return tooltip.show()
                        }
                        if (tooltip.isVisible) {
                            return tooltip.hide()
                        }

                        tooltip = new Tooltip(content, el, position).show()
                    });
                }

                el.addEventListener('mouseenter', () => {
                    if (tooltip.displayed) {
                        return tooltip.show()
                    }
                    tooltip = new Tooltip(content, el, position).show()
                });

                el.addEventListener('mouseleave', () => {
                    tooltip.hide()
                });
            },
        });
    }
}