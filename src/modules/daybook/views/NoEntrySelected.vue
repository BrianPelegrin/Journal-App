<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <CustomButton
    color="primary"
    icon="fa fa-2x fa-plus"
    :func="
      () => $router.push({ name: 'entry-view', params: { id: 'newEntry' } })
    "
  />
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    CustomButton: defineAsyncComponent(() =>
      import("@/components/SelectButton.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
