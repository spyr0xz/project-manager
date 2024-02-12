export interface SignupByEmailSchema {
  email: string,
  username: string,
  password: string,
  isLoading: boolean,
  error?: string,
}