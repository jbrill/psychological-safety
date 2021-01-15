import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import home from './components/home';
import a1 from './components/a1';
import a1a from './components/a1a';
import a1a1 from './components/a1a1';
import a1a2 from './components/a1a2';
import a1b from './components/a1b';
import a1b1 from './components/a1b1';
import a1b2 from './components/a1b2';
import a2 from './components/a2';
import a2a from './components/a2a';
import a2a1 from './components/a1b1';
import a2a2 from './components/a1b2';
import a2b from './components/a2b';
import a2b1 from './components/a1b1';
import a2b2 from './components/a2b2';
import psychological_safety from './components/psychological_safety';
import try_again from './components/try_again';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'Psychological Safety', component: home },
  { path: '/a1', name: 'Psychological Safety', component: a1 },
  { path: '/a1a', component: a1a },
  { path: '/a1a1', component: a1a1 },
  { path: '/a1a2', component: a1a2 },
  { path: '/a1b', component: a1b },
  { path: '/a1b1', component: a1b1 },
  { path: '/a1b2', component: a1b2 },
  { path: '/a2', component: a2 },
  { path: '/a2a', component: a2a },
  { path: '/a2a1', component: a2a1 },
  { path: '/a2a2', component: a2a2 },
  { path: '/a2b', component: a2b },
  { path: '/a2b1', component: a2b1 },
  { path: '/a2b2', component: a2b2 },
  { path: '/psychological_safety', component: psychological_safety },
  { path: '/try_again', component: try_again },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(VueRouter);
Vue.use(VueYouTubeEmbed)
new Vue({
  VueYouTubeEmbed,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
