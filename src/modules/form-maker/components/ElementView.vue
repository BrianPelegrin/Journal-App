<template>
  <div class="pointer d-flex justify-content-center py-3 component-container">
    <div class="component-description">
      <slot name="component"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "component-container",
};
</script>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
.component-container {
  border-bottom: 1px solid #2c3c50;
  transition: 0.2s all ease-in;
  &:hover {
    background: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .component-descripcion {
    font-size: 12px;
  }
}
</style>
