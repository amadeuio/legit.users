import { useParams, useNavigate } from "react-router-dom";
import { useUsersContext } from "../../context/UsersContext";
import EmailIcon from "../../icons/EmailIcon";
import ChevronIcon from "../../icons/ChevronIcon";
import CheckIcon from "../../icons/CheckIcon";
import styles from "./UserDetails.module.scss";
import { User } from "../../types/User";

function UserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useUsersContext();
  const numericId = parseInt(id as string, 10);
  const currentUser: User | undefined = users.find((user) => user.id === numericId);
  const { first_name, last_name, createdAt, email, avatar } = currentUser as User;

  const isLegit = true; // They are lucky, all users will be legit

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.userDetails}>
      <div className={styles.back} onClick={handleGoBack}>
        <ChevronIcon className={styles.backIcon} direction="left" /> <p>Back</p>
      </div>

      <div className={styles.profile}>
        <img className={styles.avatar} src={avatar} alt="User Avatar" />

        <div className={styles.info}>
          <h2 className={styles.name}>{`${first_name} ${last_name}`}</h2>
          <h4 className={styles.email}>
            <EmailIcon className={styles.emailIcon} />
            {email}
          </h4>
          {isLegit && (
            <div className={styles.legit}>
              <CheckIcon className={styles.checkIcon} />
              <h5>This user is legit</h5>
            </div>
          )}
        </div>
      </div>

      <h4 className={styles.createdAt}>Created at: {createdAt || "2024"} 🕰️</h4>
    </div>
  );
}

export default UserDetails;
