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
        node.classList.remove('is-active')
      })
      n.classList.add('is-active')
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

<style>
.vr-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.vuerollr {
  position: relative;
  width: 100%;
  height: 100%;
}
.vuerollr img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: hidden;
}
.vuerollr img.is-active {
  position: static;
  display: block;
  visibility: visible;
}
</style>