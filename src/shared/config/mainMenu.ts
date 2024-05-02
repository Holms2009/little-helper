import calendarIcon from '../assets/images/icons/calendar.svg';
import noteIcon from '../assets/images/icons/note.svg';
import homeIcon from '../assets/images/icons/home.svg';

export const mainMenu: TMenuItem[] = [
  { text: 'Главная', href: '/', icon: homeIcon, },
  { text: 'Календарь', href: '/calendar', icon: calendarIcon },
  { text: 'Заметки', href: '/notes', icon: noteIcon },
]