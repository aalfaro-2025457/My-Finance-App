export interface User {
  email: string;
  fullName: string;
  phone: string;
  age: number;
  createdAt?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginPayload {
  email: string;
  password?: string;
}

export interface RegisterPayload extends LoginPayload {
  fullName: string;
  phone: string;
  age: number;
}