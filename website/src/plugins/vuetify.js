import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#F5C96A", 
        secondary: "#599FA8", 
        accent1: "#000000",
        accent2: "#7E7E7E",
        positive: "#83EF88",
        negative: "#E44F3B"
      },
    },
  },
})
