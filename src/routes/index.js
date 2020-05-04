import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: import('@/views/Note'),
      meta: {
        title: 'Main Page'
      }
    },
    {
      path: '/list',
      component: import('@/views/List'),
      meta: {
        title: 'List Page'
      }
    }
  ]
});