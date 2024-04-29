import Image from "next/image";
import styles from "./UserItem.module.scss";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UserItem: React.FC<{ user: User }> = ({ user }) => (
  <li className={styles.userItem}>
    <Image
      width={128}
      height={128}
      src={user.avatar}
      alt={`Avatar of ${user.first_name} ${user.last_name}`}
      className={styles.avatar}
    />
    <div className={styles.info}>
      <p>{`${user.first_name} ${user.last_name}`}</p>
      <p>{user.email}</p>
    </div>
  </li>
);

export default UserItem;
