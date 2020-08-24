import Vue from 'vue';

export default ({ isDesktop, $axios, app: { router, $cookies }, store }, inject) => {
  store.dispatch('nuxtClientInit')
  console.log('--- client plugin ---')
  store.commit('addVal', 'client_plugin');
};
