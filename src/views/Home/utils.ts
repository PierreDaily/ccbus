import type { BusStop, BusType, DayType } from "../../types";
import { twentyFourHToIsoDateString } from "../../components/TimeTable/utils/utils";

type BusTable = {
  [K in DayType]: {
    [L in BusType]: string[];
  };
};

type JSONTable = {
  "public-holiday": string[];
} & {
  [K in BusStop]: BusTable;
};

type BusSlot = { time: string; busLetter: string };

export function parseJsonTable(JsonTable: Omit<JSONTable, "public-holiday">) {
  let result: {
    "bus-stop-1": { weekDay: BusSlot[]; weekEndAndPublicHoliday: BusSlot[] };
    "bus-stop-2": { weekDay: BusSlot[]; weekEndAndPublicHoliday: BusSlot[] };
    "bus-stop-3": { weekDay: BusSlot[]; weekEndAndPublicHoliday: BusSlot[] };
  } = {
    "bus-stop-1": { weekDay: [], weekEndAndPublicHoliday: [] },
    "bus-stop-2": { weekDay: [], weekEndAndPublicHoliday: [] },
    "bus-stop-3": { weekDay: [], weekEndAndPublicHoliday: [] },
  };
  for (const busStop of Object.keys(JsonTable) as (keyof JSONTable)[]) {
    if (busStop !== "public-holiday") {
      for (const dayType of Object.keys(
        JsonTable[busStop]
      ) as (keyof BusTable)[]) {
        const tableObj = JsonTable[busStop][dayType];

        let allTable: { time: string; busLetter: string }[] = [];

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
        allTable = allTable
          .map((obj) => ({
            ...obj,
            time: twentyFourHToIsoDateString(obj.time),
          }))
          .filter((obj) => obj.time !== "");
        result[busStop][dayType] = allTable;
      }
    }
  }
  return result;
}
