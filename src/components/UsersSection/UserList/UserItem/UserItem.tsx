import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";
import { User } from "../../../../types/User";
import { useUsersContext } from "../../../../context/UsersContext";
import EmailIcon from "../../../../icons/EmailIcon";
import FavoriteIcon from "../../../../icons/FavoriteIcon";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const { id, first_name, last_name, email, avatar, isFavorite } = user;
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
        <div className={styles.left}>
          <img
            src={avatar}
            alt={`Avatar of ${first_name} ${last_name}`}
            className={styles.avatar}
          />
          <div className={styles.info}>
            <h3>{`${first_name} ${last_name}`}</h3>
            <div className={styles.email}>
              <EmailIcon className={styles.emailIcon} />
              <h4>{email}</h4>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div onClick={(e) => handleFavoriteClick(e)}>
            <FavoriteIcon
              className={`${styles.favoriteIcon} ${isFavorite ? styles.favorite : ""}`}
              isFilled={isFavorite}
            />
          </div>
        </div>
      </li>
    </Link>
  );
};

export default UserItem;
