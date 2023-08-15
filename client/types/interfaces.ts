export interface LoginInterface {
  username: string;
  password: string;
}

export interface Users {
  username?: string | null | undefined
  role?: string | null | undefined
  email?: string | null | undefined
  accessToken?: string
}
