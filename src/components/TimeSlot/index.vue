<template>
  <li
    :class="{ ['bg-grey-light']: !isActive, ['opacity-60']: !isActive }"
    class="shrink-0 flex items-center border-solid border-b border-grey-light h-[60px] justify-between px-6 py-0 text-center"
    style=""
    tabindex="0"
    ref="container"
    :style="{ color: isActive ? 'blue' : 'red' }"
  >
    <BusIcon :busLetter="busLetter" />
    <TimeDisplay :time="time" />
    <CountDown :timeLeft="timeLeft" />
  </li>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef, watchEffect } from "vue";
import BusIcon from "../BusIcon/index.vue";
import TimeDisplay from "../TimeDisplay/index.vue";
import CountDown from "../CountDown/index.vue";

const container = useTemplateRef("container");
const { busLetter, time, timeLeft, isActive, isFocus } = defineProps({
  busLetter: String,
  time: String,
  timeLeft: String,
  isActive: Boolean,
  isFocus: Boolean,
});
const emit = defineEmits(["scrollToActiveSlot"]);
onMounted(() => {
  if (isFocus && container.value) {
    emit("scrollToActiveSlot", container.value.offsetTop);
  }
});

watchEffect(() => {
  if (isFocus && container.value) {
    emit("scrollToActiveSlot", container.value.offsetTop);
  }
});
</script>
