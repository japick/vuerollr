import VueRollr from './VueRollr'

export default {
  install(Vue){   
    Vue.component(VueRollr.name, VueRollr)
  }
}

export { VueRollr }