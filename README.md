# VueRollr

**VueRollr** is a lightweight plugin that allows you to add a mouseover image showreel to your Vue.js project.

[Demo](https://vuerollr.japick.io/)

### Installation

`npm i vuerollr`

### Usage

```
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

If using **Nuxt.js**, you'll need to create a plugin file and add it to your `nuxt.config.js` as explained [here](https://nuxtjs.org/guide/plugins/#vue-plugins).

### Configurable Options

Coming soon.

### Todos

 - Configurable options
 - Mobile support
 - Video support

### License

[MIT](https://github.com/japick/vuerollr/blob/master/LICENSE)