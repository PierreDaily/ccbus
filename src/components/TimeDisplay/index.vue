<template>
  <div>
    <img :src="clockIcon" />
    <span>{{time || '--:--'}}</span>
  </div>
</template>

<script lang="ts">

import clockIcon from "@/assets/icons/clock.svg";
export default {
  name: "TimeDisplay",
  props: {
    time: String
  },
  setup() {
    return {
      clockIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 20px;
  width: 90px;
}

span {
  color: var(--font-color-black);
  display: inline-block;
  font-family: var(--font-primary);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-align: right;
}

img {
  height: 10px;
  left: -2px;
  position: relative;
  top: -4px;
  width: 10px;
}
</style>
