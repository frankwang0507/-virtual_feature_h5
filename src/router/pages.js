export default [
  {
    name: 'Home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue')
  },
  {
    name: 'My',
    path: '/my',
    component: () => import(/* webpackChunkName: "my" */ '@/views/my/my.vue')
  }
];
