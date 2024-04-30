import { useParams } from "react-router-dom";
import styles from "./UserDetails.module.scss";
import { useUsersContext } from "../../UsersContext";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useUsersContext();
  const numericId = parseInt(id, 10);
  const currentUser = users.find((user) => user.id === numericId);
  const { first_name, last_name, email, createdAt, avatar } = currentUser;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.userDetails}>
      <h1>
        {first_name} {last_name}
      </h1>
      <p>Email: {email}</p>
      {createdAt && <p>Created at: {createdAt}</p>}
      <p onClick={handleGoBack}>
        <img className={styles.avatar} src={avatar} alt="User Avatar" />
      </p>
    </div>
  );
}

export default UserDetails;
