<template>
  <button @click="func" :class="'btn btn-' + color">
    <i v-if="icon != null" :class="icon"></i>
    <span v-if="title != null || title != undefined">{{ title }}</span>
  </button>
</template>
<script>
export default {
  name: "custom-button",
  props: {
    color: {
      type: String,
      required: false,
      defaultValue: "btn btn-secondary",
    },
    title: {
      type: String,
      required: false,
    },
    func: {
      type: Function,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang=""></style>
