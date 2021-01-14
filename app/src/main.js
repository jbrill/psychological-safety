import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import home from './components/home';
import a1 from './components/a1';
import a2 from './components/a2';
import a1a from './components/a1a';
import a2a from './components/a2a';
import a1b from './components/a1b';
import a2b from './components/a2b';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.config.productionTip = false

const routes = [
  { path: '/', component: home },
  { path: '/a1', component: a1 },
  { path: '/a2', component: a2 },
  { path: '/a1a', component: a1a },
  { path: '/a1b', component: a1b },
  { path: '/a2a', component: a2a },
  { path: '/a2b', component: a2b },
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
