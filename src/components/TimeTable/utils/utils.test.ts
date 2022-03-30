import { twentyFourHToIsoDateString } from "./utils";

describe("twentyFourHToIsoDateString ", () => {
  it("should return an ISO dateString", () => {
    // arrange

    vi.useFakeTimers();
    const now = new Date("2000-01-01T07:30:00.000");

    vi.setSystemTime(now);
    const timeString = "12:45";

    const expectedDate = new Date();
    expectedDate.setHours(12);
    expectedDate.setMinutes(45);
    expectedDate.setSeconds(0);
    expectedDate.setMilliseconds(0);

    // act

    const result = twentyFourHToIsoDateString(timeString);

    // assert

    expect(result).toBe(expectedDate.toISOString());
  });

  it("should return null is the input isn't at HH:MM format", () => {
    // arrange

    const input = "02:22";

    // act

    const result = twentyFourHToIsoDateString(input);

    // assert

    expect(result).toBe(null);
  });
});
