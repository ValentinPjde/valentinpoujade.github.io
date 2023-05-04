import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueGtag from "vue-gtag";
// import VueMeta from 'vue-meta'
// import VueScrollTo from 'vue-scrollto'
// import VueScrollReveal from 'vue-scroll-reveal';

// createApp(App).use(router)
//   .use(VueScrollReveal)
//   .use(VueGtag, {
//     config: { id: "G-L2F3ESR3JL" }
//   })
//   // .use(VueMeta)
//   // .use(VueScrollTo)
// .mount('#app')


const app = createApp(App)
// app.component('SomeComponent', SomeComponent)
app
  // .use(VueScrollReveal)
  .use(VueGtag, {
    config: { id: "G-L2F3ESR3JL" }
  })
.use(router)
// add more functionality to myV3App

// now we're ready to mount
app.mount('#app')