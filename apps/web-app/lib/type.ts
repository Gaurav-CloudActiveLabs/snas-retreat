export interface User {
  id: string;
  name:string;
  email:string;
  __typename: string;
}

export interface UserDetails {
  message: string;
  result: string;
  token: string;
  user: User;
  __typename: string;
}

export interface GlobalInfoContext {
  userDetails: UserDetails | null;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  setUserState: () => void;
  signOut: () => void;
}
