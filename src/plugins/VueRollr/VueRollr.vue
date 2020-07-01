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
      nodes: [],
      width: 0,
      interval: ""
    }
  },
  props: {
    breakpoint: {
      type: Number,
      default: 768
    },
    speed: {
      type: Number,
      default: 1000
    }
  },
  mounted() {
    this.nodes = this.$refs.vuerollr.childNodes
    this.setActive(this.nodes[0])
    window.addEventListener("resize", this.getWidth)
    this.width = this.$refs.vuerollr.clientWidth
  }, 
  watch: {
    width: function() {
      clearInterval(this.interval)
      if (window.matchMedia(`(max-width: ${this.$props.breakpoint}px)`).matches) {
        this.$refs.vuerollr.removeEventListener("mousemove", this.vueRollr, false)
        this.autoVueRollr()
      } else {
        this.$refs.vuerollr.addEventListener("mousemove", this.vueRollr, false)
      }
    } 
  },
  methods: {
    getWidth() {
      this.width = this.$refs.vuerollr.clientWidth
      return this.width
    },
    setActive(n) {
      this.nodes.forEach(node => {
        node.classList.remove("is-active")
      })
      n.classList.add("is-active")
      return n
    },
    autoVueRollr() {
      let currentSlide = 0
      this.interval = setInterval(() => {
        this.nodes[currentSlide].classList.remove("is-active") 
        currentSlide = (currentSlide + 1) % this.nodes.length 
        this.nodes[currentSlide].className = "is-active" 
      }, this.$props.speed)
    },
    vueRollr(e) {
      e = e || window.event
      let columnNumber = parseInt(e.pageX / (this.getWidth() / this.nodes.length))
      if (columnNumber !== this.activeNumber) {
        if (e.pageX >= this.width)
          columnNumber--
        this.activeNumber = columnNumber
        this.setActive(this.nodes[columnNumber])
      }
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
.vuerollr img,
.vuerollr video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: hidden;
}
.vuerollr img.is-active,
.vuerollr video.is-active {
  position: static;
  display: block;
  visibility: visible;
}
</style>