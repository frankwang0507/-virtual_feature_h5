<template>
  <div class="login-container">
    <div class="account">
      <form autocomplete="off">
        <div>
          <label for="account">account</label>
          <input id="account" type="text" v-model="account.number" />
        </div>
        <div>
          <label for="password">password</label>
          <input id="password" type="password" v-model="account.password" />
        </div>
      </form>
    </div>
    <button class="login-action" @click="login">{{ $t('login.login') }}</button>
    <button @click="() => changeLanguage('zh')">中文</button>
    <button @click="() => changeLanguage('en')">English</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      account: {
        number: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      this.$store.dispatch('userInfo/fetchLoginAction', { account: this.account, context: this });
    },
    changeLanguage(value) {
      this.$i18n.locale = value;
    }
  }
};
</script>

<style scoped>
@import './style.less';
</style>
