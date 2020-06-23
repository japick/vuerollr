<template>
  <div class="vr-container">
    <div 
      ref="vuerollr" 
      class="vuerollr">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueRollr',
  data() {
    return {
      startPoint: 1,
      activeNumber: this.startPoint,
      nodes: []
    }
  },
  props: {
    // options here
  },
  mounted() {
    this.nodes = this.$refs.vuerollr.childNodes
    this.setActive(this.nodes[0])
    this.photoRollr()
    window.addEventListener("resize", this.getWidth)
  },
  methods: {
    getWidth() {
      return this.$refs.vuerollr.clientWidth
    },
    setActive(n) {
      this.nodes.forEach(node => {
        node.classList.remove('pr-active')
      })
      n.classList.add('pr-active')
      return n
    },
    photoRollr() {
      this.$refs.vuerollr.addEventListener("mousemove", (e) => {
        let columnNumber = parseInt(e.pageX / (this.getWidth() / this.nodes.length))
        if (columnNumber !== this.activeNumber) {
          if (e.pageX >= this.width)
            columnNumber--
          this.activeNumber = columnNumber
          this.setActive(this.nodes[columnNumber])
        }
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWidth)
  }
}
</script>

<style lang="scss">
.vr-container {
  width: 100vw; // set as configurable option
  height: 100vh; // set as configurable option
  overflow: hidden;
}
.vuerollr {
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    visibility: hidden;

    &.pr-active {
      position: static;
      display: block;
      visibility: visible;
    }
  }
}
</style>