<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="ms-2 text-success fs-4 fw-light">{{
        new Date().getDate()
      }}</span>
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
  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <CustomCard>
      <template #cardBody>
        <div>
          <div class="drop-zone">
            <div
              v-for="item in listOne"
              :key="item.title"
              @dragstart="OnDragSaveItem($event, item)"
              draggable="true"
              class="drag-el"
            >
              {{ item.title }}
            </div>
          </div>
          <div class="drop-zone">
            <div v-for="item in listTwo" :key="item.title" class="drag-el">
              {{ item.title }}
            </div>
          </div>
        </div>

        <!-- <div
          id="target"
          @dragover.prevent
          @dragenter.prevent
          @drop="drop_handler;"
          @dragover="dragover_handler;"
        >
          Drop Zone
        </div> -->
      </template>
    </CustomCard>
    <br />
    {{ getCurrentElementHtml }}
    <CustomCard>
      <template #cardBody>
        <div
          class="drop-zone p-3 row container overflow-scroll scrolleable"
          vaina="true"
          @drop="OnDragInsertItem($event, item)"
          @dragover.prevent
          @dragenter.prevent
          ref="refDropZone"
        ></div>
      </template>
    </CustomCard>
  </div>
  <FunctionButton icon="fa-floppy-disk" color="primary" :func="printer" />
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    FunctionButton: defineAsyncComponent(() =>
      import("@/components/SelectButton.vue")
    ),
    CustomCard: defineAsyncComponent(() =>
      import("@/components/GeneralCard.vue")
    ),
  },
  mounted() {
    setTimeout(() => {
      this.$refs.refDropZone.addEventListener("drop", this.OnDragSaveItem);
    }, 100);
  },
  methods: {
    // startDrag(evt, item) {
    //   evt.dataTransfer.dropEffect = "move";
    //   evt.dataTransfer.effectAllowed = "move";
    //   evt.dataTransfer.setData("itemID", item.id);
    // },
    // onDrop(evt, list) {
    //   const itemID = evt.dataTransfer.getData("itemID");
    //   const item = this.items.find((item) => item.id == itemID);
    //   item.list = list;
    // },
    OnDragInsertItem(e) {
      // console.log("Item Id Obtenido: ", e.dataTransfer.getData("itemID"));
      console.log(e);
      const clon = this.getCurrentElementHtml;
      console.log("Clon: ", clon.id);
      clon.classList.add("m-1");
      const newElement = clon.cloneNode(clon.id);
      console.log("Nuevo Elemento", newElement);
      this.$refs.refDropZone.appendChild(newElement);
    },
    printer(e) {
      console.log(e);
    },
    ...mapMutations("formMakerModule", ["setCurrentElementHtml"]),
  },
  props: {
    element: {
      type: Object,
      required: false,
    },
    OnDragSaveItem: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Item A",
          list: 1,
        },
        {
          id: 1,
          title: "Item B",
          list: 1,
        },
        {
          id: 2,
          title: "Item C",
          list: 2,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("formMakerModule", ["getCurrentElementHtml"]),
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
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

.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}

.scrolleable {
  overflow: scroll;
}
</style>
