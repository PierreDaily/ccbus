<template>
  <div>
    <img aria-label="coming in" :src="rssIcon" />
    <span :style="{ width: '100px' }">{{ timeLeft || "---" }}</span>
  </div>
</template>

<script lang="ts">
import rssIcon from "@/assets/icons/rss.svg";
export default {
  name: "CountDown",
  props: {
    timeLeft: String,
  },
  setup() {
    return {
      rssIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 12px;
  left: -2px;
  position: relative;
  top: 0px;
  width: 12px;
}

span {
  color: var(--font-color-black);
  font-family: var(--font-primary);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
}
</style>
