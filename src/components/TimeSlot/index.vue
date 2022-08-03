<template>
  <li
    :class="{ disable: !isActive }"
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

<style scoped>
li {
  align-items: center;
  border-bottom: solid 1px var(--border-color);
  display: flex;
  height: 60px;
  justify-content: space-between;
  list-style: none;
  padding: 0 24px;
  text-align: center;
}

.disable {
  background-color: var(--border-color);
  opacity: 0.6;
}
</style>
