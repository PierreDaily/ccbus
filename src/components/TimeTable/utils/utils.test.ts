import { twentyFourHToIsoDateString } from "./utils";

describe("twentyFourHToIsoDateString ", () => {

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

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

  it("should return an ISO dateString if the input at 'H:MM' format", () => {
    // arrange

    vi.useFakeTimers();
    const now = new Date("2000-01-01T07:30:00.000");

    vi.setSystemTime(now);

    const expectedDate = new Date();
    expectedDate.setHours(8);
    expectedDate.setMinutes(2);
    expectedDate.setSeconds(0);
    expectedDate.setMilliseconds(0);

    const timeString = "8:02";

    // act
    // expect(expectedDate.toISOString()).toBe(2);
    const result = twentyFourHToIsoDateString(timeString);

    // assert

    expect(result).toBe(expectedDate.toISOString());
  });

  it("should return null if the input start with more than 2 zero", () => {
    // arrange



    const timeString = "000:02";

    // act
    // expect(expectedDate.toISOString()).toBe(2);
    const result = twentyFourHToIsoDateString(timeString);

    // assert

    expect(result).toBeNull();
  });
});
