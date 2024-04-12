import { addMonth, monthDays, monthStart } from "@formkit/tempo";

export function createDatesArray(year: number, month: number): TDate[] {
  const result: TDate[] = [];
  const date = new Date(year, month);

  const monthLength = monthDays(date);
  const prevMonthLength = monthDays(addMonth(date, -1));
  const firstDay = monthStart(date).getDay();

  for (let i = firstDay - 2; i >= 0; i -= 1) {
    result.push({value: prevMonthLength - i, type: 'prev'});
  }

  for (let i = 1; i <= monthLength; i += 1) {
    result.push({value: i, type: 'current'})
  }

  let counter = 1;

  while (result.length < 35) {
    result.push({value: counter++, type: "next"});
  }

  return result;
  
}