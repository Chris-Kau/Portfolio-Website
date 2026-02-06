
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
        'primary': "#4C5273",
        'secondary': "#84BFB9",
        'ck-accent': "#F2E1AC",
        'ck-supportingaccent': "#A67232",
        'ck-text': "#0D0D0D",
        'background': "#F3F5F0",
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
  }
})

createApp(App).use(vuetify).mount('#app')
