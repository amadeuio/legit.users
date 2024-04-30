import { useParams } from "react-router-dom";
import styles from "./UserDetails.module.scss";
import { useUsersContext } from "../../UsersContext";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const { users } = useUsersContext();
  const currentUser = users.find((user) => user.id === numericId);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.userDetails}>
      <h1>
        {currentUser.first_name} {currentUser.last_name}
      </h1>
      <p>Email: {currentUser.email}</p>
      <p onClick={handleGoBack}>
        <img className={styles.avatar} src={currentUser.avatar} alt="User Avatar" />
      </p>
    </div>
  );
}

export default UserDetails;
