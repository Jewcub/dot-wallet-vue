import LoginButton from './LoginButton.vue';

export default {
  install(Vue, options) {
    Vue.component('dotwallet-login', LoginButton);
  },
};
