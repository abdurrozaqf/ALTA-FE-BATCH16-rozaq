export interface User {
  id: number;
  full_name: string;
  email: string;
  role: string;
  address: string;
  phone_number: string;
  password: string;
  profile_picture: string;
}

export interface UserPayload {
  full_name: string;
  email: string;
  address: string;
  phone_number: string;
  password: string;
}
