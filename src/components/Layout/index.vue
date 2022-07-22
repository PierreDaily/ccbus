<template>
  <section class="main-container">
    <slot></slot>
  </section>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>

<style scoped>
.main-container {
  background-color: #417293;
  height: 100vh;
  overflow: hidden;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
}
</style>
