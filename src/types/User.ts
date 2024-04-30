export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  createdAt?: string; // Only present in added users
};
