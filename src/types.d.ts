type TMenuItem = {
  text: string;
  href: string;
  icon?: string;
}

type TDayOfWeek = {
  name: string;
  number: number;
}

type TDate = {
  value: number;
  type: 'prev' | 'current' | 'next',
  isTooday: boolean,
  fullDate: Date,
}