<template>
  <div
    :class="{ ['bg-grey-light']: !isActive, ['opacity-60']: !isActive }"
    class="shrink-0 flex items-center border-solid border-b border-grey-light h-[60px] justify-between px-6 py-0 text-center"
    style=""
    tabindex="0"
    :style="{ color: isActive ? 'blue' : 'red' }"
  >
    <BusIcon :busLetter="busLetter" />
    <TimeDisplay :time="time" />
    <CountDown :timeLeft="timeLeft" />
  </div>
</template>

<script setup lang="ts">
import BusIcon from "../BusIcon/index.vue";
import TimeDisplay from "../TimeDisplay/index.vue";
import CountDown from "../CountDown/index.vue";

const { busLetter, time, timeLeft, isActive } = defineProps({
  busLetter: String,
  time: String,
  timeLeft: String,
  isActive: Boolean,
});
</script>
