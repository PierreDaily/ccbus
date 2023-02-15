<template>
  <Layout>
    <div class="flex justify-between items-center">
      <h1 class="items-center text-base text-white flex font-sans text-normal h-20">
        Timetables / updated on 01/02/2023
      </h1>
      <nav class="flex w-16 justify-between">
        <MailTo :email="email" />
        <Share to="/share" />
      </nav>
    </div>
    <View width="100%" height="calc(calc(100 * var(--vh)) - (0.67em * 2) - 2em - 50px - 15px - (1.5 * 2em))"
      ref="refView">
      <ul class="table-container">
        <TimeSlot v-for="({ time, busLetter }, index) in activeTimeTable" :key="index"
          :time="formatTime(new Date(time))" :timeLeft="timeLeft(minutesLeft(new Date(time), now))"
          :isActive="new Date(time || 0) > new Date()" :isFocus="index === indexToFocus"
          :busLetter="busLetter === 'CIRCULAR' ? 'AB' : busLetter" @scrollToActiveSlot="scrollTo" />
      </ul>
    </View>
    <nav class="flex justify-between mt-[15px]">
      <ButtonTab title="bus stop 1" :isActive="activePhase === stop1" @userClick="setPhase(stop1)"
        class="grow mr-2.5" />
      <ButtonTab title="bus stop 2" :isActive="activePhase === stop2" @userClick="setPhase(stop2)"
        class="grow mr-2.5" />
      <ButtonTab title="bus stop 3" :isActive="activePhase === stop3" @userClick="setPhase(stop3)" class="grow mr-0" />
    </nav>
  </Layout>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import ButtonTab from "../ButtonTab.vue";
import Layout from "../Layout/index.vue";
import MailTo from "../MailTo/index.vue";
import Share from "../Button/Share/index.vue";
import TimeSlot from "../TimeSlot/index.vue";
import View from "../View/index.vue";
import data from "../../assets/timestables.json";
import { twentyFourHToIsoDateString } from "../TimeTable/utils/utils";
import {
  formatTime,
  minutesLeft,
  isPublicHoliday,
  timeLeft,
} from "../../utils";
import "normalize.css";

type BusStop = "bus-stop-1" | "bus-stop-2" | "bus-stop-3";

function isValidBusStop(busStop: string | null): boolean {
  return (
    busStop === "bus-stop-1" ||
    busStop === "bus-stop-2" ||
    busStop === "bus-stop-3"
  );
}

export default defineComponent({
  name: "Home",
  components: {
    ButtonTab,
    Layout,
    MailTo,
    View,
    TimeSlot,
    Share
  },
  data: () => ({
    activePhase: ((isValidBusStop(localStorage.getItem("activePhase")) &&
      localStorage.getItem("activePhase")) ||
      "bus-stop-2") as BusStop,
    now: new Date(),
  }),
  created() {
    document
      ?.querySelector<HTMLElement>(":root")
      ?.style.setProperty("--vh", window.innerHeight / 100 + "px");
    window.addEventListener("resize", () => {
      document
        ?.querySelector<HTMLElement>(":root")
        ?.style.setProperty("--vh", window.innerHeight / 100 + "px");
    });
  },
  computed: {
    activeTimeTable(): { time: string; busLetter: string }[] {
      const tableObj = this.allTables[this.activePhase][this.dayType];
      let allTable: { time: string; busLetter: string }[] = [];
      type MyType = "A" | "B" | "CIRCULAR";
      let key: MyType;

      for (key in tableObj) {
        allTable = [
          ...allTable,
          ...tableObj[key].map((val) => ({ time: val, busLetter: key })),
        ];
      }
      allTable.sort((a, b) => {
        return a.time > b.time ? 1 : -1;
      });
      return allTable
        .map((obj) => ({
          ...obj,
          time: this.twentyFourHToIsoDateString(obj.time),
        }))
        .filter((obj) => obj.time !== "");
    },
    indexToFocus() {
      return this.activeTimeTable.findIndex((obj) => {
        return new Date(obj.time || 0).toISOString() > this.now.toISOString();
      });
    },
    dayType() {
      const weekEndDays = [0, 6];
      const publicHolidayDateArray = data["public-holiday"].map(
        (inputString) => new Date(inputString)
      );

      if (
        weekEndDays.includes(this.now.getDay()) ||
        isPublicHoliday(publicHolidayDateArray, this.now)
      )
        return "weekEndAndPublicHoliday";

      return "weekDay";
    },
    email() {
      return import.meta.env.VITE_CONTACT_EMAIL;
    },
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

:root {
  --border-color: rgba(222, 222, 230, 1);
  --bus-icon-green: rgba(39, 174, 96, 1);

  --font-primary: "Roboto", sans-serif;

  --font-color-black: rgba(73, 80, 87, 1);
  --font-color-white: rgba(255, 255, 255, 1);
}

* {
  box-sizing: border-box;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.nav-bar>button {
  flex-grow: 1;
}

.nav-bar button:nth-of-type(n) {
  margin-right: 10px;
}

.nav-bar button:last-child {
  margin-right: 0;
}

.table-container {
  margin: 0;
  padding: 0;
  position: relative;
}

h1 {
  align-items: center;
  color: var(--font-color-white);
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  height: 80px;
  margin: 0;

  font-size: 12px;
  line-height: 14px;
}
</style>
