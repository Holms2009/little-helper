import { addDay, addMonth, dayStart, isEqual, monthDays, monthStart } from "@formkit/tempo";

export function createDatesArray(year: number, month: number): TDate[] {
  const date = new Date(year, month);
  const previousMonthDays = addPrevMonthDays(date);
  const currentMonthDays = addCurrentMonthDays(date);
  const nextMonthDays = addNextMonthDays(date, 35 - currentMonthDays.length - previousMonthDays.length);
  
  return [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays
  ]
}

function addPrevMonthDays(date: Date) {
  const result: TDate[] = [];
  const prevMonthLength = monthDays(addMonth(date, -1));
  const firstDay = monthStart(date).getDay();

  for (let i = firstDay - 2; i >= 0; i -= 1) {
    result.push({
      value: prevMonthLength - i,
      type: 'prev',
      isTooday: false,
      fullDate: addDay(date, -( i + 1)),
    });
  }

  return result
}

function addCurrentMonthDays(date: Date) {
  const result: TDate[] = [];
  const monthLength = monthDays(date);

  for (let i = 1; i <= monthLength; i += 1) {
    result.push({
      value: i,
      type: 'current',
      isTooday: isItToday(i, date.getMonth(), date.getFullYear()),
      fullDate: new Date(date.getFullYear(), date.getMonth(), i),
    })
  }

  return result;
}

function addNextMonthDays(date: Date, length: number) {
  const result: TDate[] = [];

  for (let i = 1; i <= length; i += 1) {
    result.push({
      value: i,
      type: "next",
      isTooday: false,
      fullDate: addDay(addMonth(date), i - 1)
    });
  }

  return result;
}

function isItToday(value: number, month: number, year: number): boolean {
  const currentDate = dayStart(new Date());
  const dateToCheck = new Date(year, month, value);

  return isEqual(currentDate, dateToCheck);
}