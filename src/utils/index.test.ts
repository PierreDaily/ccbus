import { isPublicHoliday } from ".";

test("isPublicHoliday function", () => {
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
