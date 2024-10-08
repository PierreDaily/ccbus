import { isEqual, set } from "date-fns";

export function formatTime(date: Date): string {
  const hours = Math.floor(date.getHours());
  const minutes = date.getMinutes();

  return `${hours > 12 ? hours - 12 : hours}:${
    date.getMinutes() >= 10 ? minutes : "0" + String(minutes)
  } ${hours > 12 ? "pm" : "am"}`;
}

export function isPublicHoliday(dateList: Date[], now: Date) {
  const nowReset = set(now, {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  return dateList.some((date) => isEqual(nowReset, date));
}

export function minutesLeft(date: Date, now: Date): number {
  const seconds = (date.valueOf() - now.valueOf()) / 1000;
  const minutes = seconds / 60;
  return Math.floor(minutes) + 1;
}
/**
 * @param {number} minutes
 * @returns {string}
 */
export function timeLeft(minutes: number): string | undefined {
  if (minutes < 0) return;
  return minutes < 60 ? `${minutes} min` : `${Math.floor(minutes / 60)} hours`;
}
