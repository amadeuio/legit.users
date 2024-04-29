import { useParams } from "react-router-dom";
import styles from "./UserDetails.module.scss";
import { useUsersContext } from "../../UsersContext";

function UserDetails() {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const { users } = useUsersContext();
  const currentUser = users.find((user) => user.id === numericId);

  return (
    <div className={styles.userDetails}>
      <h1>
        {currentUser.first_name} {currentUser.last_name}
      </h1>
      <p>Email: {currentUser.email}</p>
      <p>
        <img className={styles.avatar} src={currentUser.avatar} alt="User Avatar" />
      </p>
    </div>
  );
}

export default UserDetails;
