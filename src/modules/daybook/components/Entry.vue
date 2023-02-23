<template lang="">
  <div class="mb-3 pointer p-2 entry-container" @click="onSelect">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ getDayOfDate }}</span>
      <span class="fs-5 mx-1">{{ getMonthOfDate }}</span>
      <span class="fs-5 mx-2">{{ getYearOfDate }}</span>
    </div>
    <div class="entry-description">
      {{ entry.text }}
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
export default {
  name: "entry-container",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations("dayBookModule", ["setCurrentEntry"]),
    onSelect() {
      this.$store.commit("dayBookModule/setCurrentEntry", this.$props.entry.id);
      this.$router.push({
        name: "entry-view",
        params: { id: this.$props.entry.id },
      });
    },
  },
  computed: {
    getDayOfDate() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    getMonthOfDate() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    getYearOfDate() {
      const date = new Date(this.entry.date);
      return `${date.getFullYear()}, ${days[date.getDay()]}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
.entry-container {
  border-bottom: 1px solid #2c3c50;
  transition: 0.2s all ease-in;
  &:hover {
    background: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-descripcion {
    font-size: 12px;
  }
}
</style>
