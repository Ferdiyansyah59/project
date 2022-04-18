import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Login from './views/dashboard/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard.home',
      component: () => import('./views/dashboard/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/dashboard/Home.vue')
    },
    {
      path: '/login',
      name: 'dashboard.login',
      component: () => import('./views/dashboard/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard.dashboard',
      component: () => import('./views/dashboard/Dashboard.vue')
    },
    {
      path: '/setting',
      name: 'menu.setting',
      component: () => import('./views/menu/Setting.vue')
    },
    {
      path: '/profile',
      name: 'menu.profile',
      component: () => import('./views/menu/profile/Profile.vue')  
    },
    {
      path: '/start',
      name: 'start.start',
      component: () => import('./views/start/Index.vue')
    },
    {
      path: '/edit-profile',
      name: 'menu.editprofile',
      component: () => import('./views/menu/profile/EditProfile.vue')
    },
    {
      path: '/about',
      name: 'menu.about',
      component: () => import('./views/menu/about/About.vue')
    },
    {
      path: '/ptt',
      name: 'menu.ptt',
      component: () => import('./views/menu/ptt/Ptt.vue')
    },
    {
      path: '/event',
      name: 'menu.event',
      component: () => import('./views/menu/event/Main.vue')
    },
    {
      path: '/event-detail',
      name: 'menu.event.detail',
      component: () => import('./views/menu/event/Detail.vue')
    },
    {
      path: '/insiden',
      name: 'start.menu.insiden',
      component: () => import('./views/start/menu/insiden/Insiden.vue')
    },
    {
      path: '/scan',
      name: 'start.menu.scan',
      component: () => import('./views/start/menu/scan/Scan.vue')
    },
    {
      path: '/scan-qr',
      name: 'start.menu.scan.qr',
      component: () => import('./views/start/menu/scan/Qrcode.vue')
    },
    {
      path: '/scan-nfc',
      name: 'start.menu.scan.nfc',
      component: () => import('./views/start/menu/scan/Nfc.vue')
    },
    {
      path: '/multimedia',
      name: 'start.menu.multimedia',
      component: () => import('./views/start/menu/multimerdia/Multimedia.vue')
    },
    {
      path: '/history-menu',
      name: 'start.menu.history',
      component: () => import('./views/start/menu/history/Index.vue')
    },
    {
      path: '/history-hadir',
      name: 'start.menu.history.daftar',
      component: () => import('./views/start/menu/history/DaftarHadir.vue')
    },
    {
      path: '/timeline',
      name: 'menu.timeline',
      component: () => import('./views/menu/timeline/Index.vue')
    }
  ]
})
