<template>
  <div class="d-flex">
    <div class="col-3">
      <ComponentsList :OnDragSaveItem="OnDragSaveItem" />
    </div>
    <div class="col">
      <ElementBoard :element="element" :OnDragSaveItem="OnDragSaveItem" />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapMutations } from "vuex";
export default {
  components: {
    ComponentsList: defineAsyncComponent(() =>
      import("../components/ComponentList.vue")
    ),
    ElementBoard: defineAsyncComponent(() =>
      import("../components/ElementsBoard.vue")
    ),
  },
  data() {
    return {
      element: {
        label: "KLK",
      },
    };
  },
  methods: {
    // dragstart_handler(ev) {
    //   console.log(
    //     `dragStart: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`
    //   );

    //   // Add this element's id to the drag payload so the drop handler will
    //   // know which element to add to its tree
    //   ev.dataTransfer.setData("text", ev.target.id);
    //   ev.dataTransfer.effectAllowed = "move";
    // },
    // drop_handler(ev) {
    //   console.log(
    //     `drop: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`
    //   );

    //   // Get the id of the target and add the moved element to the target's DOM
    //   const data = ev.dataTransfer.getData("text");
    //   console.log(data);
    //   ev.target.appendChild(document.getElementById(data));
    // },
    // dragover_handler(ev) {
    //   console.log(
    //     `dragOver: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${ev.dataTransfer.effectAllowed}`
    //   );
    //   ev.preventDefault();
    //   // Set the dropEffect to move
    //   ev.dataTransfer.dropEffect = "move";
    // },
    OnDragSaveItem(e) {
      e.dataTransfer.dropEffect = "copy";
      e.dataTransfer.effectAllowed = "copy";
      this.$data.element.label = e.target;
      this.setCurrentElementHtml(this.$data.element.label);
    },
    ...mapMutations("formMakerModule", ["setCurrentElementHtml"]),
  },
};
</script>
<style lang="scss" scoped></style>
