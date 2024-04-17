//App store
type TModalWindows = 'signin' | 'signup';

type TModalsStore = {
  show: boolean,
  content: TModalWindows | null,
}

//User store

type TAuthData = {
  uid: string;
}