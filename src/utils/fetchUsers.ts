import { User } from "../types/User";

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1&per_page=12");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export default fetchUsers;
