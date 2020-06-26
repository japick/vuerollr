<template>
  <div id="app">
    <section>
      <h1>VueRollr</h1>
      <p>Vue.js Mouseover Image Showreel</p>
      <ul>
        <li><a href="#" title="npm" rel="noreferrer" target="_blank">Install</a></li>
        <li><a href="https://github.com/japick/vuerollr" title="Github" rel="noreferrer" target="_blank">Docs</a></li>
      </ul>
    </section>
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
import {VueRollr} from './plugins/VueRollr'

export default {
  name: 'App',
  components: {
    VueRollr
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;900&display=swap');

$c-slate-grey: #34495e;
$c-sea-green: #41b883;
$c-white: #fff;

::-moz-selection {
  background: $c-sea-green;
}

::selection {
  background: $c-sea-green;
}

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: $c-slate-grey;
  -webkit-font-smoothing: antialiased;
}

section {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  background-color: $c-white;
  border-radius: 3px;
  padding: 30px;
  width: 100%;
  max-width: 25vw;
  min-width: 270px;
  text-align: center;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);
}

h1 {
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  position: relative;
  float: left;
  left: 50%;

  li {
    float: left;
    position: relative;
    right: 50%;
    margin-right: 10px;
  }
}

a {
  color: $c-white;
  transition: color .1s linear;
  text-decoration: none;
  background-color: $c-sea-green;
  border-radius: 3px;
  padding: 6px 12px;
  display: block;
  position: relative;

  &:hover {
    background-color: $c-slate-grey;
  }
}

p {
  margin-bottom: 20px;
}
</style>
