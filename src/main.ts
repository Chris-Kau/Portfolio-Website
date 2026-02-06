
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import "../src/assets/main.css"

const oshawottTheme = {
    dark: false,
    colors:{
        'secondary': "#4C5273",
        'primary': "#7885A8",
        'ck-accent': "#F2E1AC",
        'ck-supportingaccent': "#A67232",
        'ck-text': "#233147",
        'background': "#e8f1fa",
    },
}
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'oshawottTheme',
    themes:{
        oshawottTheme
    }
  },
  icons:{
    defaultSet: 'mdi',
    sets:{
      mdi,
    }
  },
  defaults: {
    global:{
      style:{
        fontFamily:
        "'Roboto Mono', monospace",
      }
    }
  }
})

createApp(App).use(vuetify).mount('#app')
