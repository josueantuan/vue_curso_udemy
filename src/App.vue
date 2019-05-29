<template>
  <div id="app">
    <navigation></navigation>
    <div v-if="processing">
      <BlockUI :message="$t('messages.processing')"></BlockUI>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import globalTypes from "./types/global";
import { mapGetters } from "vuex";
import navigation from "./components/Navigation";
export default {
  components: {
    navigation
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapGetters({
      processing: globalTypes.getters.processing
    })
  }
};
</script>

<style>
body {
  background-color: #36383a !important;
}

.well {
  background-color: #fff !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}

h1,
h3,
h4,
p {
  color: #fff !important;
}

h2,
a {
  color: #e33a2d !important;
}

th,
td {
  color: #e33a2d !important;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

td {
  background-color: #fff;
}

hr {
  border: 1px solid #e33a2d !important;
  width: 100%;
}

.page-link.active {
  background-color: #d24839 !important;
  color: #fff !important;
  border: 1px solid #fff !important;
}
</style>
