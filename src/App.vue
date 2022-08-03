<template>
  <Layout>
    <h1>Timetables</h1>
    <View
      width="100%"
      height="calc(calc(100 * var(--vh)) - (0.67em * 2) - 2em - 50px - 15px - (1.5 * 2em))"
      ref="refView"
    >
      <ul class="table-container">
        <TimeSlot
          v-for="(timeSlot, index) in activeTimeTable"
          :key="index"
          :time="formatTime(new Date(timeSlot))"
          :timeLeft="timeLeft(minutesLeft(new Date(timeSlot), now))"
          :isActive="new Date(timeSlot || 0) > new Date()"
          :isFocus="index === indexToFocus"
          @scrollToActiveSlot="scrollTo"
        />
      </ul>
    </View>
    <nav class="nav-bar">
      <ButtonTab
        title="phase 2-3"
        :isActive="activePhase === PHASE23 ? true : false"
        @userClick="setPhase(PHASE23)"
      />
      <ButtonTab
        title="phase 3-4"
        :isActive="activePhase === PHASE34 ? true : false"
        @userClick="setPhase(PHASE34)"
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

type PhaseType = "phase-2-3" | "phase-4-5";

export default defineComponent({
  name: "App",
  components: {
    ButtonTab,
    Layout,
    View,
    TimeSlot,
  },
  data: () => ({
    activePhase: (localStorage.getItem("activePhase") || "phase-2-3" )as PhaseType,
    now: new Date(),
  }),
  created() {
    this.PHASE23 = "phase-2-3";
    this.PHASE34 = "phase-4-5";
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
    setPhase(val: PhaseType) {
      this.activePhase = val === this.PHASE34 ? this.PHASE34 : this.PHASE23;
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
      PHASE23: "phase-2-3" as PhaseType,
      PHASE34: "phase-4-5" as PhaseType,
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
@import "./assets/css/global.css";
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

.nav-bar > button {
  flex-grow: 1;
}

.nav-bar button:last-child {
  margin-left: 20px;
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
