<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      form: {
        email: 'huy.ta@sutrixsolutions.com',
        password: 'tadinhhuy1996',
      },
      requestLogin: false,
    };
  },
  computed: {
    ...mapState('login', ['login_fail']),
    getEmail() {
      return this.form.email;
    },
    getPassword() {
      return this.form.password;
    },
  },
  watch: {
    getEmail() {
      this.requestLogin = false;
    },
    getPassword() {
      this.requestLogin = false;
    },
  },
  methods: {
    ...mapActions('login', ['login']),
    async onLoginClick() {
      try {
        await this.login(this.form);
        this.$router.push({ name: 'home' });
      } catch (error) {
        this.requestLogin = this.login_fail;
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'auth.register' }"></router-link>
          </p>
          <ul v-if="requestLogin" class="error-messages">
            <li>email or password is invalid</li>
          </ul>
          <fieldset>
            <fieldset class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="form.email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
                v-model="form.password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click="onLoginClick"
            >
              Sign in
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
