<template>
  <button @click="func" :class="`btn btn-${color}`">
    <i v-if="icon != null" class="fa fa-2x" :class="icon"></i>
    <span v-if="title != null || title != undefined">{{ title }}</span>
  </button>
</template>
<script>
export default {
  name: "custom-button",
  props: {
    color: {
      type: String,
      defaultValue: "btn btn-primary",
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
<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
}
</style>
