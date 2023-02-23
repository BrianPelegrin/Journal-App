<template>
  <Navbar />

  <router-view></router-view>
</template>
<script lang="ts">
import { defineAsyncComponent } from "vue";
export default {
  name: "form-maker-layout",
  components: {
    Navbar: defineAsyncComponent(
      () => import("@/modules/daybook/components/Navbar.vue")
    ),
  },
};
</script>
