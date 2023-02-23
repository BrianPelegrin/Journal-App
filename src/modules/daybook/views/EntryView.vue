<template>
  <CustomCard
    :withHeader="true"
    :withImage="false"
    headerTitle="Formulario de Entrada"
  >
    <template #cardHeader>
      <div class="entry-title d-flex justify-content-between p-2">
        <div v-if="entry.id == ''">
          <!-- <span class="ms-2 text-success fs-4 fw-light">{{ entry.date }}</span> -->
          <input type="date" v-model="entry.date" class="form-control" />
        </div>
        <div v-else>
          <span class="ms-2 text-success fs-4 fw-light">{{ entry.date }}</span>
        </div>
        <div>
          <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary">
            Subir Foto
            <i class="fa fa-upload"></i>
          </button>
        </div>
      </div>
    </template>
    <template #cardBody>
      <div class="d-flex flex-column px-3 h-75">
        <textarea
          rows="20"
          class="form-control"
          placeholder="Que hiciste hoy?"
          v-model="entry.text"
        ></textarea>
      </div>
      <FunctionButton icon="fa-floppy-disk" color="primary" :func="onSave" />
      <img
        v-if="entry.picture != undefined"
        src="@/assets/ET02212.jpg"
        alt="entry-image"
        class="img-thumbnail"
      />
    </template>
  </CustomCard>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    FunctionButton: defineAsyncComponent(() =>
      import("@/components/SelectButton.vue")
    ),
    CustomCard: defineAsyncComponent(() =>
      import("@/components/GeneralCard.vue")
    ),
  },
  props: {
    id: {
      id: String,
      required: true,
    },
  },
  data() {
    return {
      entry: {
        id: "",
        text: "",
        picture: null,
        date: "",
      },
    };
  },
  computed: {
    ...mapGetters("dayBookModule", ["getCurrentEntry", "getEntryById"]),
  },
  methods: {
    ...mapActions("dayBookModule", ["updateEntries", "addEntry"]),
    async onSave() {
      let newId = "";
      if (this.entry.id == "") {
        newId = await this.addEntry(this.entry);
      } else {
        newId = await this.updateEntries(this.entry);
      }
      this.$router.push({ name: "entry-view", params: { id: newId } });
    },
    onAddImage() {
      console.log("Imagen Añadida");
    },

    loadEntry() {
      if (this.id == "newEntry") {
        this.entry = { id: "", text: "", date: new Date().getDate() };
      } else {
        const searchedEntry = this.getEntryById(this.id);
        if (Object.entries(searchedEntry).length === 0) {
          this.$router.push({ name: "no-entry" });
        }
        this.$data.entry = searchedEntry;
      }
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>
<style lang="scss" scoped>
textarea {
  border: none;
  font-size: 20px;
  height: 100%;
  &:hover {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
