import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UserItem: React.FC<{ user: User }> = ({ user }) => {
  const { id, first_name, last_name, email, avatar } = user;

  return (
    <Link to={`/user/${id}`}>
      <li className={styles.userItem}>
        <img src={avatar} alt={`Avatar of ${first_name} ${last_name}`} className={styles.avatar} />
        <div className={styles.info}>
          <p>{`${first_name} ${last_name}`}</p>
          <p>{email}</p>
        </div>
      </li>
    </Link>
  );
};

export default UserItem;
