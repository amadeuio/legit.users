export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  createdAt: string | null; // Only present in form added users
  isFavorite: boolean;
};
