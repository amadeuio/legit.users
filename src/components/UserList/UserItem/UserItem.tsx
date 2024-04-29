import Image from "next/image";
import styles from "./UserItem.module.scss";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UserItem: React.FC<{ user: User }> = ({ user }) => {
  const { avatar, first_name, last_name, email } = user;

  return (
    <li className={styles.userItem}>
      <Image
        width={128}
        height={128}
        src={avatar}
        alt={`Avatar of ${first_name} ${last_name}`}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <p>{`${first_name} ${last_name}`}</p>
        <p>{email}</p>
      </div>
    </li>
  );
};

export default UserItem;
