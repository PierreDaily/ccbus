import { isPublicHoliday,minutesLeft } from ".";

describe("isPublicHoliday function", () => {
  it("should return true given that the input date is public holiday", () => {
    // arange
    const inputDate = new Date("2023/06/14");
    const day1 = new Date("2023/06/14");
    const publicHolidayList = [day1];

    // assert
    expect(isPublicHoliday(publicHolidayList, inputDate)).toBeTruthy();
  });

  it("should return false given that the input date isn't public holiday ", () => {
    const inputDate = new Date("2023/11/24");
    const day1 = new Date("2023/06/14");
    const publicHolidayList = [day1];

    expect(isPublicHoliday(publicHolidayList, inputDate)).toBeFalsy();
  });
});

describe("minutesLeft function", () => {
  it("should return 3 if the time difference is 120sec", () => {
    const date1 = new Date("2023/06/14");
    const date2 = new Date("2023/06/14");
    date1.setSeconds(120)

    expect(minutesLeft(date1,date2)).toBe(3)
  });

  it("should return 1 if there is no time difference", () => {
    const date = new Date("2023/06/14");

    expect(minutesLeft(date,date)).toBe(1)
  });

});