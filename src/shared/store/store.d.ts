//App store
type TModalWindows = 'signin' | 'signup' | 'add-event' | 'add-birthday';

type TModalsStore = {
  show: boolean,
  content: TModalWindows | null,
}

//User store

type TUserData = {
  uid: string;
  email: string;
  name: string;
}

type TCalendarEvent = {
  date: Date;
  title: string;
  description?: string;
  tags?: string[];
  priority: 0 | 1 | 2;
}

type TBirthday = {
  name: string;
  date: Date;
  description?: string;
}

type TUserCalendar = {
  birthdaysList: TBirthday[];
  eventsList: TCalendarEvent[];
  uid: string;
}