import UserItem from "./UserItem/UserItem";
import styles from "./UserList.module.scss";
import { User } from "../../../types/User";

interface UserListProps {
  userList: User[];
}

const UserList: React.FC<UserListProps> = ({ userList }) => {
  return (
    <ul className={styles.userList}>
      {userList.length ? (
        userList.map((user) => <UserItem key={user.id} user={user} />)
      ) : (
        <li className={styles.noMatch}>
          <p>No users match the current filters. 😔</p>
        </li>
      )}
    </ul>
  );
};

export default UserList;
