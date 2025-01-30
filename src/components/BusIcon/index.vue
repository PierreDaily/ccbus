<template>
  <div id ="test" aria-label="B Bus" class="border border-solid border-grey-light h-[25px] w-[50px] rounded-xs overflow-hidden">
    <div class="items-center inline-flex justify-center w-1/2 h-full bg-bus-green border-r-grey-light  border-r">
      <img :src="busIcon" />
    </div>
    <div class="items-center inline-flex justify-center w-1/2 h-full align-top font-sans text-black-light" aria-labelledby="test">{{ busLetter?.toUpperCase() || "B" }}</div>
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