<template>
  <div
    :style="{
      backgroundColor: 'white',
      borderRadius: '10px',
      width: width,
      height: height,
      overflowY: 'auto',
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "View",
  props: {
    height: String,
    width: String,
  },
};
</script>
