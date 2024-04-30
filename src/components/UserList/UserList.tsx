import { useQuery } from "react-query";
import styles from "./UserList.module.scss";
import UserItem from "./UserItem/UserItem";
import { User } from "../../types/User";
import { useEffect } from "react";
import { useUsersContext } from "../../UsersContext";

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

const UserList = () => {
  const { users, setUsers } = useUsersContext();
  const { data, isLoading, isError } = useQuery<User[], Error>("users", fetchUsers);

  useEffect(() => {
    if (data && !users.length) {
      // Only set users when the data has loaded & users is empy,
      // This last part ensures that form added users are not removed.
      setUsers(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className={styles.userList}>
      <h2>User List</h2>
      {users && (
        <ul className={styles.list}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
