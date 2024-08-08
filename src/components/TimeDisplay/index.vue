<template>
  <div class="h-5 w-[90px]">
    <img
      class="inline h-2.5 w-2.5 relative left-[-2px] top-[-4px]"
      :src="clockIcon"
    />
    <span
      class="text-black-light inline-block font-sans text-lg font-normal leading-5 text-right"
      >{{ time || "--:--" }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import clockIcon from "@/assets/icons/clock.svg";
const { time } = defineProps({ time: String });
</script>
