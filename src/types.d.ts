type TMenuItem = {
  text: string;
  href: string;
}

type TDayOfWeek = {
  name: string;
  number: number;
}

type TMonth = {
  name: string;
  number: number;
}

type TDate = {
  value: number;
  type: 'prev' | 'current' | 'next',
}