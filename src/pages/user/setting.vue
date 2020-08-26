<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      form: {
        image: '',
        username: '',
        bio: '',
        email: '',
        newPassword: '',
      },
    };
  },
  computed: {
    ...mapState('login', ['user']),
  },
  created() {
    this.form = { ...this.form, ...this.user };
  },
  methods: {
    ...mapActions('login', ['logout', 'updateUser']),
    async onLogOutUser() {
      try {
        await this.logout();
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error);
      }
    },
    async onUpdateUser() {
      try {
        await this.updateUser(this.form);
        this.$router.push({ name: 'home' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="URL of profile picture"
                v-model="form.image"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
                v-model="form.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <textarea
                class="form-control form-control-lg"
                rows="8"
                placeholder="Short bio about you"
                v-model="form.bio"
              ></textarea>
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
                placeholder="New Password"
                v-model="form.newPassword"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click="onUpdateUser"
            >
              Update Settings
            </button>
          </fieldset>
          <hr />
          <button @click="onLogOutUser" class="btn btn-outline-danger">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
