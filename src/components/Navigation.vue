<template>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#nav-collapse"
                aria-expanded="false"
                >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
            <a class="navbar-brand" href="#">Vue.js 2</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li>
                    <router-link to="/">{{ $t('navigation.cinema') }}</router-link>
                </li>
                <li>
                    <router-link to="/profile" v-if="isLogged">{{ $t('navigation.my_account') }}</router-link>
                </li>
                <li>
                    <router-link to="/bookings" v-if="isLogged">{{ $t('navigation.bookings') }}</router-link>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <router-link to="/login" v-if="!isLogged">{{ $t('navigation.login') }}</router-link>
                </li>
                <li>
                    <router-link to="/register" v-if="!isLogged">{{ $t('navigation.register') }}</router-link>
                </li>
                <li>
                    <a href="#" @click.prevent="logout()" v-if="isLogged">{{ $t('navigation.logout') }}</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import authTypes from '../types/auth';
export default {
    name: 'navigation',
    methods: {
      ...mapActions({
        _logout: authTypes.actions.logout
      }),
      logout() {
          this._logout();
          this.$router.push({name: 'login'});
      }
    },
    computed: {
      ...mapGetters({
        isLogged: authTypes.getters.logged
      })
    }
}
</script>
