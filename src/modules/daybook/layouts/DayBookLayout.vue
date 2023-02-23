<template>
  <Navbar />

  <div v-if="!isLoading" class="d-flex">
    <div class="col-3"><EntryList /></div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
  <div v-else class="row justify-content-md-center">
    <div class="col-3 alert alert-success text-center mt-5">
      Espere por favor...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";
export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import("@/modules/daybook/components/Navbar.vue")
    ),
    EntryList: defineAsyncComponent(() =>
      import("@/modules/daybook/components/EntryList.vue")
    ),
  },
  computed: {
    ...mapGetters("dayBookModule", ["isLoading"]),
  },
};
</script>
