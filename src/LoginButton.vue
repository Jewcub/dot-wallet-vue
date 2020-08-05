<template>
  <div>
    <slot>
      <img
        v-if="type === 'en'"
        @click="openLink()"
        src="@/assets/dotwallet-login-en.png"
        alt="DotWallet Login"
      />
      <img
        v-if="type === 'zh'"
        @click="openLink()"
        src="@/assets/dotwallet-login.png"
        alt="DotWallet Login"
      />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'en',
      validator(x) {
        return ['en', 'zh'].indexOf(x) !== -1;
      },
    },
    appID: {
      type: String,
      default: '',
    },
    redirectURL: {
      type: String,
      default: '',
    },
  },
  methods: {
    openLink: function () {
      if (this.appID === '')
        console.warn('DotWallet Login button missing app ID');
      else if (this.redirectURL === '')
        console.warn('DotWallet Login button missing redirect URL');
      else
        window.location.href = `https://www.ddpurse.com/openapi/get_code?app_id=${this.appID}&redirect_uri=${this.redirectURL}auth`;
    },
  },
};
</script>

<style></style>
