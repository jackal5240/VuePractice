<template>
  <div>
    npm install vuex --save
    <br />

    <button v-on:click="changeColor">change text</button>
    <input v-model="text2Change" />
    <p>text: {{ ifLoading }}</p>
    <p>doneTodosCount: {{ doneTodosCount }}</p>
    <Button type="warning" @click="add">add</Button>
    <!-- <Button type="warning" @click="showTag">showTag</Button> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  props: {},
  data() {
    return {
      logoutMsg: "系統登出中，請稍候!!",
      text2Change: "aa",
    };
  },
  computed: {
    ...mapGetters(["isShowLogoutSpinner"]),
    ifLoading() {
      // 在這邊吐回state裡面的isLoading
      return this.$store.state.appleColor;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodos;
    },
  },
  methods: {
    changeColor: function () {
      let payload = { text: this.text2Change };
      console.log(payload);
      this.$store.commit("changeText", payload);
    },
    add() {
      let tt = { id: 44, text: "...", done: true };
      this.$store.commit("addDoneTodos", tt);
    },
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  activated() {},
  deactivated() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style  scoped></style>
