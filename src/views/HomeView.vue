<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div class="container">
    <button @click="goToDayBook" class="btn btn-primary">Ir a Diario</button>
    <button @click="goToFormMaker" class="btn btn-secondary">Secundario</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
    goToFormMaker() {
      this.$router.push({ name: "form-maker-main" });
    },
  },
});
</script>
