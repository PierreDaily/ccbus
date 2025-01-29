<template>
  <Layout>
    <div class="flex justify-between items-center">
      <h1 class="items-center text-base text-white flex font-sans text-normal">
        Timetables / updated on 14/11/2024
      </h1>
      <nav class="flex w-16 justify-between">
        <MailTo :email="email" />
        <Share to="/share" />
      </nav>
    </div>
    <ul
      class="flex flex-col w-full grow overflow-scroll bg-white rounded-[10px] relative"
      ref="refView"
    >
      <TimeSlot
        v-for="({ time, busLetter }, index) in activeTimeTable"
        :key="`${time}-${busLetter}`"
        :time="formatTime(new Date(time))"
        :timeLeft="timeLeft(minutesLeft(new Date(time), now))"
        :isActive="new Date(time || 0) > new Date()"
        :isFocus="index === indexToFocus"
        :busLetter="busLetter === 'CIRCULAR' ? 'AB' : busLetter"
        @scrollToActiveSlot="scrollTo"
      />
    </ul>
    <nav class="flex justify-between">
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

<script lang="ts" setup>
import { computed, ref, watchEffect, onMounted } from "vue";
import {
  isPublicHoliday,
  formatTime,
  minutesLeft,
  timeLeft,
} from "../../utils";
import { twentyFourHToIsoDateString } from "../../components/TimeTable/utils/utils";
import data from "../../assets/timestables.json";
import ButtonTab from "../../components/ButtonTab.vue";
import Layout from "../../components/Layout/index.vue";
import MailTo from "../../components/MailTo/index.vue";
import Share from "../../components/Button/Share/index.vue";
import TimeSlot from "../../components/TimeSlot/index.vue";
type BusStop = "bus-stop-1" | "bus-stop-2" | "bus-stop-3";

function isValidBusStop(busStop: string | null): boolean {
  return (
    busStop === "bus-stop-1" ||
    busStop === "bus-stop-2" ||
    busStop === "bus-stop-3"
  );
}

const email = import.meta.env.VITE_CONTACT_EMAIL;
const stop1 = "bus-stop-1" satisfies BusStop;
const stop2 = "bus-stop-2" satisfies BusStop;
const stop3 = "bus-stop-3" satisfies BusStop;
const activePhase = ref<BusStop>(
  ((isValidBusStop(localStorage.getItem("activePhase")) &&
    localStorage.getItem("activePhase")) as BusStop) ||
    ("bus-stop-2" as BusStop)
);
const now = ref(new Date());
const refView = ref<HTMLDivElement | null>(null);

const activeTimeTable = computed((): { time: string; busLetter: string }[] => {
  const tableObj = data[activePhase.value][dayType.value];
  let allTable: { time: string; busLetter: string }[] = [];
  type BusType = "A" | "B" | "CIRCULAR";
  let key: BusType;

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
      time: twentyFourHToIsoDateString(obj.time),
    }))
    .filter((obj) => obj.time !== "");
});

const dayType = computed(() => {
  const weekEndDays = [0, 6];
  const publicHolidayDateArray = data["public-holiday"].map(
    (inputString) => new Date(inputString)
  );

  if (
    weekEndDays.includes(now.value.getDay()) ||
    isPublicHoliday(publicHolidayDateArray, now.value)
  )
    return "weekEndAndPublicHoliday";

  return "weekDay";
});

const indexToFocus = computed(() => {
  return activeTimeTable.value.findIndex((obj) => {
    return new Date(obj?.time || 0).toISOString() > now.value.toISOString();
  });
});

function setPhase(val: BusStop) {
  activePhase.value = val;
}
function scrollTo(y: number) {
  if (refView.value) {
    refView.value.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
}

watchEffect(() => {
  localStorage.setItem("activePhase", activePhase.value);
});

onMounted(() => {
  setInterval(() => {
    now.value = new Date();
  }, 30000);
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

.nav-bar > button {
  flex-grow: 1;
}

.nav-bar button:nth-of-type(n) {
  margin-right: 10px;
}

.nav-bar button:last-child {
  margin-right: 0;
}

h1 {
  align-items: center;
  color: var(--font-color-white);
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;

  font-size: 12px;
}
</style>
