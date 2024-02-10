export interface LoginByEmailSchema {
  email: string;
  password: string;
  isLoading: boolean;
  error?: string;
}
