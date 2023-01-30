import Vue from 'vue';
import Router from 'vue-router';
import Store from './store/state'
Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: () => import('./view/home'),
    meta: {
      title: ''
    }
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  // 判断进入此页面是否token
  const requireAuth = to.meta && to.meta.requireAuth;
  if(requireAuth){
    
    if(!Store.token){
      next({
        path: '/login', // 未登录则跳转至login页面    
      })
    }
  }
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};