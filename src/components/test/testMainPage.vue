<template>
  <div class="hello">
    test

    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testAxios">testAxios</router-link>
    </div>

    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testComputed"
        >testComputed and watch!
      </router-link>
    </div>
    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testStore">testStore!</router-link>
    </div>
    <div style="display: inline-block; margin: 0 10px">
      <router-link to="/TestMainPage/testPathVal">testPathVal!</router-link>
    </div>

    <div>
      <div class="card">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created: function () {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: rgb(245, 230, 197);
  text-align: justify;
}

#info {
  text-align: center;
}
</style>

