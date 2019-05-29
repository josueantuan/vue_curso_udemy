<template>
  <div class="login col-md-6 col-md-offset-3" align="center">
    <h1 class="text-center text-muted">
      <u v-html="$t('login.title')"></u>
    </h1>
    <div class="alert alert-danger" v-if="error" v-html="$t('login.error')"></div>
    <hr>
    <div class="well">
      <form autocomplete="off" @submit.prevent="validateBeforeSubmit()">
        <div class="form-group">
          <label class="control-label col-md-4" for="email" v-html="$t('login.email')"></label>
          <div class="col-md-8" :class="({'has-error': errors.has('email')})">
            <input
              autocomplete="off"
              name="email"
              v-model="email"
              v-validate
              data-vv-rules="required|email"
              class="form-control"
              type="text"
              id="email"
              :placeholder="$t('login.email')"
              :class="{ 'has-error' : errors.has('email') }"
            >
            <span v-show="errors.has('email')" class="text-danger">{{errors.first('email')}}</span>
          </div>
        </div>
        <br>
        <div class="form-group">
          <label class="control-label col-md-4" for="password" v-html="$t('login.password')"></label>
          <div class="col-md-8" :class="({'has-error': errors.has('password')})">
            <input
              autocomplete="off"
              name="password"
              v-model="password"
              v-validate
              data-vv-rules="required|min:6"
              class="form-control"
              type="password"
              id="password"
              :placeholder="$t('login.password')"
              :class="{ 'has-error' : errors.has('password') }"
            >
          </div>
          <span v-show="errors.has('password')" class="text-danger">{{errors.first('password')}}</span>
        </div>
        <hr>
        <button type="submit" class="btn btn-success btn-block" v-html="$t('login.title')"></button>
      </form>
    </div>
  </div>
</template>

<script>
import authTypes from "../../types/auth";
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    ...mapActions({
      login: authTypes.actions.login
    }),
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
        } else {
          this.login({
            email: this.email,
            password: this.password
          }).then(
            user => {
              this.$router.push("/");
            },
            error => {
              this.error = true;
            }
          );
        }
      });
    },
    console() {
      console.log(this.login);
    }
  }
};
</script>

<style scoped>
</style>
