import Vue from 'vue'
import App from '@/App.vue'

//vue resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:3333/api/v1/';
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', `Bearer ${window.localStorage.getItem('_token')}`);
  next();
});

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//blockui
import BlockUI from 'vue-blockui';
Vue.use(BlockUI);

//Modulos
import globalTypes from '@/types/global';
import authModule from './modules/auth';
//vee-validate
import VeeValidate, {Validator} from 'vee-validate';
import validatorEn from "./validator/en";
import validatorEs from "./validator/es";
Validator.localize('es',validatorEs);
Vue.use(VeeValidate);

//vue-tables-2
import {ClientTable} from 'vue-tables-2';
Vue.use(ClientTable, {}, false, 'bootstrap3', 'default');

//almacén global de datos con vuex
export const store = new Vuex.Store({
  state: {
    processing: false,
    language: 'es'
  },
  actions: {
   [globalTypes.actions.changeLanguage]: ({commit},lang) => {
    commit(globalTypes.mutations.setLanguage,lang);

    switch (lang) {
      case 'en:':
        Validator.localize('en',validatorEn);
        break;
    
      case 'es:':
        Validator.localize('es',validatorEs);
        break;
    }
   }
  },
  getters: {
   [globalTypes.getters.processing]: state => state.processing,
   [globalTypes.getters.language]: state => state.language
  },
  mutations: {
    [globalTypes.mutations.startProcessing] (state){
      state.processing = true;
    },
    [globalTypes.mutations.stopProcessing] (state){
      state.processing = false;
    },
    [globalTypes.mutations.setLanguage] (state, lang){
      state.language = lang;
    }
  },
  modules: {
    authModule
  }
});
//Traducciones
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import messages from './translations/index';
const i18n = new VueI18n({
  locale: store.state.language,
  messages: messages
});

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  i18n
});
