<template>
  <div class="entry-list-container">
    <div class="px-2 border py-2">
      <input
        type="text"
        class="form-control"
        v-model="term"
        placeholder="Buscar Entrada"
      />
      <div class="mt-2 mx-2 row">
        <button
          class="btn btn-primary btn-md"
          @click="
            $router.push({ name: 'entry-view', params: { id: 'newEntry' } })
          "
        >
          <i class="fa fa-plus-circle"></i> Nueva Entrada
        </button>
      </div>
    </div>
    <div v-if="EntryByTerm.length > 0" class="entry-scrollarea">
      <Entry
        @click="onClickEntry"
        v-for="item in EntryByTerm"
        :key="item"
        :entry="item"
      />
    </div>
    <div
      v-else
      class="entry-scrollarea d-flex align-items-center justify-content-center"
    >
      <h4 class="text-primary">No Hay Elementos</h4>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "entry-list",
  components: {
    Entry: defineAsyncComponent(() =>
      import("@/modules/daybook/components/Entry.vue")
    ),
  },
  data() {
    return {
      term: "",
    };
  },
  computed: {
    ...mapGetters("dayBookModule", ["getEntryByTerm"]),
    EntryByTerm() {
      return this.getEntryByTerm(this.term);
    },
  },
  methods: {
    ...mapActions("dayBookModule", ["loadEntries"]),
    onClickEntry() {
      setTimeout(() => {
        this.term = "";
      }, 100);
    },
  },
  mounted() {
    this.loadEntries();
  },
};
</script>
<style lang="scss" scoped>
input {
  height: 35px;
}
.entry-list-container {
  border-right: 1px solid #123e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
