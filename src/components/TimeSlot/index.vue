<template>
  <li
    :class="{ ['bg-grey-light']: !isActive, ['opacity-60']: !isActive}"
    class="flex items-center border-solid border-b border-grey-light h-[60px] justify-between px-6 py-0 text-center"
    style=""
    tabindex="0"
    :style="{ color: isActive ? 'blue' : 'red' }"
  >
    <BusIcon :busLetter="busLetter" />
    <TimeDisplay :time="time" />
    <CountDown
      :timeLeft="timeLeft"
    />
  </li>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import BusIcon from "../BusIcon/index.vue";
import TimeDisplay from "../TimeDisplay/index.vue";
import CountDown from "../CountDown/index.vue";

export default defineComponent({
  name: "TimeSlot",
  components: {
      BusIcon,
    CountDown,
    TimeDisplay,
  },  
  props: {
    busLetter: String,
    time:String,
    timeLeft: String,
    isActive: Boolean,
    isFocus: Boolean,
  },
  mounted() {
     if (this.isFocus) {
      this.$emit("scrollToActiveSlot", this.$el.offsetTop);
    }
  },
  watch: {
    isFocus(newIsFocus) {
      if (newIsFocus) {
      
        this.$emit("scrollToActiveSlot", this.$el.offsetTop);
      }
    },
    },
});
</script>