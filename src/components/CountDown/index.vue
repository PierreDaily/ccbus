<template>
  <div>
    <img class="h-3 relative top-[-1px] left-[-2px] w-3 inline" aria-label="coming in" :src="rssIcon" />
    <span class="text-black-light font-sans text-lg font-normal leading-5" :style="{ width: '100px' }">{{ timeLeft || "---" }}</span>
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
