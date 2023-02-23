<template>
  <div class="card m-4">
    <div v-if="imageUp">
      <slot v-if="withImage" name="image"> </slot>
      <div v-if="withHeader" class="card-header">
        {{ headerTitle }}
        <slot name="cardHeaer"></slot>
      </div>
    </div>

    <div v-else>
      <div v-if="withHeader" class="card-header">
        <h2 v-if="headerTitle != null" class="text-center">
          {{ headerTitle }}
        </h2>
        <slot name="cardHeader"></slot>
      </div>
    </div>

    <div class="card-body scrolleable">
      <slot name="cardBody"> </slot>
    </div>

    <div v-if="withFooter" class="card-footer">
      <div v-if="footerCentered" class="d-flex justify-content-center">
        <slot name="cardFooter" class="container"> </slot>
      </div>
      <div class="d-flex justify-content-start" v-else>
        <slot name="cardFooter"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "general-card",
  props: {
    headerTitle: {
      type: String,
      required: false,
    },
    withHeader: {
      type: Boolean,
      required: false,
      defaultValue: false,
    },
    withFooter: {
      type: Boolean,
      required: false,
      defaultValue: false,
    },
    footerCentered: {
      type: Boolean,
      required: false,
      defaultValue: false,
    },
    withImage: {
      type: Boolean,
      required: false,
      defaultValue: false,
    },
    imageUp: {
      type: Boolean,
      required: false,
      defaultValue: false,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el-card__footer {
  padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding);
  border-top: 1px solid var(--el-card-border-color);
  box-sizing: border-box;
}

.card-header {
  background: white;
  border-bottom: 1px solid #e4e7ed;
  padding: calc(20px - 2px) 20px;
}

.card-body {
  padding: 20px;
}

.card-footer {
  background: white;
  border-top: 1px solid #e4e7ed;
  padding: calc(20px - 2px) 20px;
}
.card {
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  border: 0px;
  box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04),
    0px 8px 20px rgba(0, 0, 0, 0.08);
}
</style>
