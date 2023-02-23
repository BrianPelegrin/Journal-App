<template>
  <div class="component-list-container">
    <div class="px-2 border py-2">
      <!-- <input
        type="text"
        class="form-control"
        v-model="term"
        placeholder="Buscar Entrada"
      /> -->

      <button class="btn btn-warning" @click="printRef">
        Imprimir Elementos
      </button>
    </div>
    <div class="component-scrollarea" ref="componentListRef">
      <!-- <div
        class="btn btn-info col-sm-5"
        id="1"
        @dragstart="OnDragSaveItem($event)"
        :draggable="true"
      >
        Buton
      </div>
      <br />
      <select
        class="form-select col-sm-2"
        id="2"
        @dragstart="OnDragSaveItem($event)"
        :draggable="true"
      >
        <option>KLK</option>
      </select> -->
      <!-- <ComponentView
        v-for="(component, index) in ComponentsTypesList"
        :key="index"
      >
        <template #component>
          <div class="row">
            <div @click="printRef" ref="ComponentContainer" class="col-8">
              <div
                :class="component.component"
                :id="index"
                @dragstart="OnDragSaveItem($event)"
                :draggable="true"
              >
                Element
              </div>
            </div>
            <div class="col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>Selecciona un Botton</option>
                <option
                  v-for="type in component.types"
                  :key="type.type"
                  :value="type.type"
                >
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>
        </template>
      </ComponentView> -->
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent, getCurrentInstance } from "vue";
import { mapMutations } from "vuex";

export default {
  name: "component-list",
  components: {
    // ComponentView: defineAsyncComponent(() =>
    //   import("@/modules/form-maker/components/ElementView.vue")
    // ),
  },
  props: {
    OnDragSaveItem: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    getCurrentInstance().parent.subTree.el.addEventListener("drag", (e) => {
      this.setCurrentElementHtml(e.target);
    });
  },
  data() {
    return {
      elements: [
        {
          id: "1",
          tag: "button",
          htmlClass: "btn btn-info",
        },
        {
          id: "2",
          tag: "select",
          htmlClass: "select-form m",
        },
        {
          id: "3",
          tag: "input",
          htmlClass: "form-control m",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("formMakerModule", ["setCurrentElementHtml"]),

    defineHtmlTag(tag, classTag, id) {
      const container = document.createElement("div");
      "container d-flex justify-content-center border border-2 p-5"
        .split(" ")
        .forEach((HtmlClass) => container.classList.add(HtmlClass));

      var htmlElement = document.createElement(tag);

      htmlElement.append("Element");
      htmlElement.setAttribute("draggable", true);
      htmlElement.setAttribute("id", id);
      htmlElement.setAttribute("onclick", "onDrag()");

      htmlElement.addEventListener("ondragstart", null, () => {
        console.log(htmlElement);
        this.setCurrentElementHtml(htmlElement);
        this.$props.OnDragSaveItem;
      });
      // htmlElement.setAttribute("ondragstart", this.$props.OnDragSaveItem);

      const classArray = classTag.split(" ");

      classArray.forEach((element) => {
        htmlElement.classList.add(element);
      });

      console.log("Elemento HTML", htmlElement);

      container.appendChild(htmlElement);

      // setTimeout(() => {
      //   this.$refs.ComponentContainer.appendChild(tag);
      // }, 500);
      // console.log(this.$refs.ComponentContainer);
      // tag.appendChild(`<${typeTag} id="source"
      //           @dragstart="OnDragSaveItem($event)"
      //           :draggable="true"  class="${classTag}"> </${typeTag}>`);

      return container;
    },
    printRef() {
      console.log("Referencia: ", this.$data.elements);
      this.$data.elements.forEach(({ id, tag, htmlClass }) => {
        this.$refs.componentListRef.appendChild(
          this.defineHtmlTag(tag, htmlClass, id)
        );
      });
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  height: 35px;
}
.component-list-container {
  border-right: 1px solid #123e50;
  height: calc(100vh - 56px);
}

.component-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>

// term: "", // ComponentsTypesList: [ // { // elementHTML: "select", //
component: "form-select", // types: [], // }, // { // elementHTML: "input", //
component: "form-control col-auto", // types: [], // }, // { // elementHTML:
"input", // component: "form-control col-auto", // types: [], // }, // { //
elementHTML: "input", // component: "form-control col-auto", // types: [], // },
// { // elementHTML: "input", // component: "form-control col-auto", // types:
[], // }, // { // elementHTML: "input", // component: "form-control col-auto",
// types: [], // }, // { // elementHTML: "input", // component: "form-control
col-auto", // types: [], // }, // { // elementHTML: "input", // component:
"form-control col-md-6", // types: [], // }, // { // elementHTML: "button", //
component: "btn btn-secondary col-auto", // types: [ // { // type: "btn-danger",
// name: "Rojo", // }, // { // type: "btn-success", // name: "Verde", // }, // {
// type: "btn-info", // name: "Azul Cielo", // }, // { // type: "btn-warning",
// name: "Amarillo", // }, // ], // }, // { // elementHTML: "button", //
component: "btn btn-secondary col-auto", // types: [ // { // type: "btn-danger",
// name: "Rojo", // }, // { // type: "btn-success", // name: "Verde", // }, // {
// type: "btn-info", // name: "Azul Cielo", // }, // { // type: "btn-warning",
// name: "Amarillo", // }, // ], // }, // { // elementHTML: "button", //
component: "btn btn-secondary col-auto", // types: [ // { // type: "btn-danger",
// name: "Rojo", // }, // { // type: "btn-success", // name: "Verde", // }, // {
// type: "btn-info", // name: "Azul Cielo", // }, // { // type: "btn-warning",
// name: "Amarillo", // }, // ], // }, // ],
