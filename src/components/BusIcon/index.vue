<template>
  <div id ="test" aria-label="B Bus" class="transportation-type">
    <div>
      <img :src="busIcon" />
    </div>
    <div aria-labelledby="test">{{ busLetter?.toUpperCase() || "B" }}</div>
  </div>
</template>

<script lang="ts">
import busIcon from "@/assets/icons/bus.svg";

export default {
  name: "BusIcon",
  props: {
    busLetter: String,
  },
  setup() {
    return {
      busIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.transportation-type {
  border: solid var(--border-color) 1px;
  border-radius: 2px;
  height: 25px;
  width: 50px;
  overflow: hidden;

  & > div {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    width: 50%;
    height: 100%;
  }

  & > div:first-child {
    background-color: var(--bus-icon-green);
    border-right: solid var(--border-color) 1px;
  }

  & > div:nth-child(2) {
    color: var(--font-color-black);
    font-family: var(--font-primary);
    vertical-align: top;
  }
}

img {
  display: block;
  height: 16px;
  width: 16px;
}
</style>
