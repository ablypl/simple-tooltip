# About

Simple Vuejs tooltip plugin. At the moment it needs tailwindcss


It applies this class list: 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-grey-light max-w-xs'



# Installation

```
npm install lari-simple-tooltip --save
```


# Usage

Simple usage:

Display tooltip on top

```
<button  v-tooltip="'Tooltip content'">Submit</button>
```



Define tooltip position
```
<button  v-tooltipi:right="'Tooltip content'">Submit</button>
```
Available options: left, right, top, bottom



Display tooltip by default (no mouseover/out events)
```
<button  v-tooltip.prevent="'Tooltip content'">Submit</button>
```



Display tooltip on click
```
<button  v-tooltip.click="'Tooltip content'">Submit</button>
```
