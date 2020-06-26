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
      <img src="https://picsum.photos/id/10/1200/800">
      <img src="https://picsum.photos/id/11/1200/800">
      <img src="https://picsum.photos/id/12/1200/800">
      <img src="https://picsum.photos/id/13/1200/800">
      <img src="https://picsum.photos/id/14/1200/800">
      <img src="https://picsum.photos/id/15/1200/800">
    </VueRollr>
  </div>
</template>

<script>
import VueRollr from 'VueRollr'

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

MIT