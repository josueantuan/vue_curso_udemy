import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// Components

// Types
import authTypes from '../types/auth';
import globalTypes from '../types/global';
import Login from '@/components/Auth/Login';



//global store
import {store} from '../main';

//Configurar el router
const router = new Router({
    routes: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {Auth: false, title: 'Iniciar Sesion'},
        beforeEnter: (to, from, next) => {
          if(store.state.authModule.logged){
            next({path: '/'});
          }else{
            next();
          }
        }
      }
    ]
});

router.beforeEach((to,from,next) => {
    document.title = to.meta.title;
    if(to.meta.Auth && !store.state.authModule.logged){
        next({path: '/login'});
    }else{
        if(store.state.authModule.logged){

        }
        next();
    } 
});

export default router;
