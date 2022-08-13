<template>
  <Layout>
    <h1 class="items-center text-xs text-white flex font-sans text-normal h-20">Timetables</h1>
    <View
      width="100%"
      height="calc(calc(100 * var(--vh)) - (0.67em * 2) - 2em - 50px - 15px - (1.5 * 2em))"
      ref="refView"
    >
      <ul>
        <TimeSlot
          v-for="(timeSlot, index) in activeTimeTable"
          :key="index"
          :time="formatTime(new Date(timeSlot))"
          :timeLeft="timeLeft(minutesLeft(new Date(timeSlot), now))"
          :isActive="new Date(timeSlot || 0) > new Date()"
          :isFocus="index === indexToFocus"
          :busLetter="activePhase === stop1 ? 'A' : 'B'"
          @scrollToActiveSlot="scrollTo"
        />
      </ul>
    </View>
    <nav class="flex justify-between mt-[15px]">
       <ButtonTab
        title="bus stop 1"
        :isActive="activePhase === stop1"
        @userClick="setPhase(stop1)"
        class="grow mr-2.5"
      />
      <ButtonTab
        title="bus stop 2"
        :isActive="activePhase === stop2"
        @userClick="setPhase(stop2)"
        class="grow mr-2.5"
      />
      <ButtonTab
        title="bus stop 3"
        :isActive="activePhase === stop3"
        @userClick="setPhase(stop3)"
        class="grow mr-0"
      />
    </nav>
  </Layout>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import ButtonTab from "./components/ButtonTab.vue";
import Layout from "./components/Layout/index.vue";
import TimeSlot from "./components/TimeSlot/index.vue";
import View from "./components/View/index.vue";
import data from "./assets/timestables.json";
import { twentyFourHToIsoDateString } from "./components/TimeTable/utils/utils";
import { formatTime, minutesLeft, timeLeft } from "./utils";
import "normalize.css";
import './index.css'

type BusStop = "bus-stop-1" | "bus-stop-2" | "bus-stop-3";

function isValidBusStop(busStop: string | null): boolean {
  return busStop === "bus-stop-1" || busStop === "bus-stop-2" || busStop === "bus-stop-3";
}

export default defineComponent({
  name: "App",
  components: {
    ButtonTab,
    Layout,
    View,
    TimeSlot,
  },
  data: () => ({
    activePhase: ( (isValidBusStop(localStorage.getItem('activePhase')) && localStorage.getItem('activePhase')) || "bus-stop-2" )  as BusStop,
    now: new Date(),
  }),
  created() {
    document
      ?.querySelector<HTMLElement>(":root")
      ?.style.setProperty("--vh", window.innerHeight / 100 + "px");
    window.addEventListener("resize", () => {
      console.log("resize");
      document
        ?.querySelector<HTMLElement>(":root")
        ?.style.setProperty("--vh", window.innerHeight / 100 + "px");
    });
  },
  computed: {
    activeTimeTable(): string[] {
      const table = [...this.allTables[this.activePhase][this.dayType]];
      table.sort((a, b) => {
        return a > b ? 1 : -1;
      });
      return table.map((hhmmDate) => this.twentyFourHToIsoDateString(hhmmDate)).filter((dateString) => dateString !== "");
    },
    indexToFocus() {
      return this.activeTimeTable.findIndex((time) => {
      return new Date(time || 0).toISOString() > this.now.toISOString();
    });
    },
    dayType(){
      const weekEndDays = [0, 6];
      if (weekEndDays.includes(this.now.getDay())) return "weekEndAndPublicHoliday";

      return "weekDay";
    }
  },
  watch: {
    activePhase(newPhase) {
      localStorage.setItem("activePhase", newPhase);
    },
  },
  methods: {
    setPhase(val: BusStop) {
      this.activePhase = val;
    },
    scrollTo(y: number) {
      this.refView.$el.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    setInterval(() => {
      this.now = new Date();
    }, 30000);
  },
  setup() {
    const refView = ref();
    return {
      allTables: data,
      stop1: "bus-stop-1" as BusStop,
      stop2: "bus-stop-2" as BusStop,
      stop3: "bus-stop-3" as BusStop,
      formatTime,
      minutesLeft,
      refView,
      timeLeft,
      twentyFourHToIsoDateString,
    };
  },
});
</script>
