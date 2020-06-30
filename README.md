# VueRollr

**VueRollr** is a lightweight plugin that allows you to add a mouseover showreel to your Vue.js project. Supported media now includes images and video.

[Demo](https://vuerollr.japick.io/)

### Installation

`npm i vuerollr`

### Usage

```vue
<template>
  <div>
    <VueRollr>
      <img src="...">
      <img src="...">
      <img src="...">
      <video loop autoplay muted>
        <source src="...">
      </video>
      <img src="...">
      <img src="...">
      <img src="...">
    </VueRollr>
  </div>
</template>

<script>
import VueRollr from 'vuerollr'

export default {
  components: {
    VueRollr
  }
}
</script>
```

Options are passed as props.

```vue
<VueRollr
    :breakpoint="530"
    :speed="2000">
```

* **breakpoint** - mobile breakpoint *default: 768*
* **speed** - mobile autoplay speed in milliseconds *default: 1000*

### License

[MIT](https://github.com/japick/vuerollr/blob/master/LICENSE)
