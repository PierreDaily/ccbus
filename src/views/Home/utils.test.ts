import { expect, it, afterEach, beforeEach } from "vitest";
import { parseJsonTable } from "./utils";

const timeTable = {
  "bus-stop-1": {
    weekDay: {
      A: ["00:00", "00:15"],
      B: [],
      CIRCULAR: [],
    },
    weekEndAndPublicHoliday: {
      A: [],
      B: [],
      CIRCULAR: [],
    },
  },
  "bus-stop-2": {
    weekDay: {
      A: [],
      B: [],
      CIRCULAR: [],
    },
    weekEndAndPublicHoliday: {
      A: [],
      B: [],
      CIRCULAR: [],
    },
  },
  "bus-stop-3": {
    weekDay: {
      A: [],
      B: [],
      CIRCULAR: [],
    },
    weekEndAndPublicHoliday: {
      A: [],
      B: [],
      CIRCULAR: [],
    },
  },
};

describe("parseJsonTable function", () => {
  afterEach(() => {
    vi.useRealTimers();
  });
  beforeEach(() => {
    vi.useFakeTimers();
  });
  it("parse the data and convert time property from HH:MM to an ISO String Date", () => {
    const now = new Date("2000-01-01T07:30:00.000");

    vi.setSystemTime(now);

    expect(parseJsonTable(timeTable)).toEqual({
      "bus-stop-1": {
        weekDay: [
          {
            busLetter: "A",
            time: "1999-12-31T23:00:00.000Z",
          },
          {
            busLetter: "A",
            time: "1999-12-31T23:15:00.000Z",
          },
        ],
        weekEndAndPublicHoliday: [],
      },
      "bus-stop-2": {
        weekDay: [],
        weekEndAndPublicHoliday: [],
      },
      "bus-stop-3": {
        weekDay: [],
        weekEndAndPublicHoliday: [],
      },
    });
  });
  it("parse the data and ignore time slot that don't match the HH:MM pattern", () => {
    const now = new Date("2000-01-01T07:30:00.000");
    const corruptedTimeTable = {
      "bus-stop-1": {
        weekDay: {
          A: ["abc", "edf"],
          B: [],
          CIRCULAR: [],
        },
        weekEndAndPublicHoliday: {
          A: [],
          B: [],
          CIRCULAR: [],
        },
      },
      "bus-stop-2": {
        weekDay: {
          A: [],
          B: [],
          CIRCULAR: [],
        },
        weekEndAndPublicHoliday: {
          A: [],
          B: [],
          CIRCULAR: [],
        },
      },
      "bus-stop-3": {
        weekDay: {
          A: [],
          B: [],
          CIRCULAR: [],
        },
        weekEndAndPublicHoliday: {
          A: [],
          B: [],
          CIRCULAR: [],
        },
      },
    };
    vi.setSystemTime(now);

    expect(parseJsonTable(corruptedTimeTable)).toEqual({
      "bus-stop-1": {
        weekDay: [],
        weekEndAndPublicHoliday: [],
      },
      "bus-stop-2": {
        weekDay: [],
        weekEndAndPublicHoliday: [],
      },
      "bus-stop-3": {
        weekDay: [],
        weekEndAndPublicHoliday: [],
      },
    });
  });
});
