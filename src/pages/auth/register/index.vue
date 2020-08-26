<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
      },
      requestRegister: this.register_fail,
    };
  },
  computed: {
    ...mapState('login', ['register_fail']),
    username() {
      return this.form.username;
    },
    email() {
      return this.form.email;
    },
    password() {
      return this.form.password;
    },
  },
  watch: {
    username() {
      this.requestRegister = false;
    },
    email() {
      this.requestRegister = false;
    },
    password() {
      this.requestRegister = false;
    },
  },
  methods: {
    async onClickRegister() {
      try {
        await this.$store.dispatch('login/registerUser', this.form);
        this.$router.push({ name: 'auth.login' });
      } catch (error) {
        this.requestRegister = this.register_fail;
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
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'auth.login' }">
              Have an account?
            </router-link>
          </p>
          <ul v-if="requestRegister" class="error-messages">
            <li>
              email has already been taken
            </li>
          </ul>
          <fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
                v-model="form.username"
              />
            </fieldset>
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
              @click="onClickRegister"
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
