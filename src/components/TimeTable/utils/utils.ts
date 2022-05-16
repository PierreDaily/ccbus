export function twentyFourHToIsoDateString(timeString: string) {
  if (!RegExp("^((0|1)?[0-9]|2[0-3]):[0-5][0-9]$").test(timeString)) {
    return null;
  }
  const newDate = new Date();
  const [hours, minutes] = timeString.split(":");
  newDate.setHours(Number(hours));
  newDate.setMinutes(Number(minutes));
  newDate.setSeconds(0);
  return newDate.toISOString();
}
