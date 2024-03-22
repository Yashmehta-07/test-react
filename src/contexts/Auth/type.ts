export interface ILogin {
  email: string;
  password: string;
}

export interface IUserContext {
  id: string;
  accountType: string;
  name: string;
}

export interface IAuthContext {
  login: (payload: ILogin) => Promise<unknown>;
  logout: () => Promise<unknown>;
  userDetails?: IUserContext;
  isLoggedIn: boolean;
  getUserDetails: () => Promise<unknown>;
}
