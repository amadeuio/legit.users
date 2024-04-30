import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";
import { User } from "../../../types/User";
import { useUsersContext } from "../../../context/UsersContext";

const UserItem: React.FC<{ user: User }> = ({ user }) => {
  const { id, first_name, last_name, email, avatar } = user;
  const { setUsers } = useUsersContext();

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === id ? { ...u, isFavorite: !u.isFavorite } : u))
    );
  };

  return (
    <Link to={`/user/${id}`}>
      <li className={styles.userItem}>
        <img src={avatar} alt={`Avatar of ${first_name} ${last_name}`} className={styles.avatar} />
        <div className={styles.info}>
          <p>{`${first_name} ${last_name}`}</p>
          <p>{email}</p>
        </div>
        <div onClick={(e) => handleFavoriteClick(e)}>Fav</div>
      </li>
    </Link>
  );
};

export default UserItem;
