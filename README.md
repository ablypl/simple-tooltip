# About

Simple Vuejs tooltip plugin. At the moment it needs tailwindcss


It applies this class list: 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-grey-light max-w-xs'



# Installation

```
npm install lari-simple-tooltip --save
```

![Demo](screenshot.png?raw=true)



# Usage


```
import SimpleTooltip from 'lari-simple-tooltip'


Vue.use(SimpleTooltip)

```


Simple usage:

Display tooltip on top

```html
<button v-tooltip="'Tooltip content'">Submit</button>
```



Define tooltip position
```html
<button v-tooltipi:right="'Tooltip content'">Submit</button>
```
Available options: left, right, top, bottom



Display tooltip by default (no mouseover/out events)
```html
<button v-tooltip.prevent="'Tooltip content'">Submit</button>
```



Display tooltip on click
```html
<button v-tooltip.click="'Tooltip content'">Submit</button>
```
