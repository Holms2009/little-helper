//App store
type TModalWindows = 'signin' | 'signup';

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